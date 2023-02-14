import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleServices from '../../../src/Services/MotorcycleServices';

describe('Deve listar todas as motos', function () {
  it('Deve retornar todas as motos com SUCESSO', async function () {
    // arr
    const findMotorcyclesOutput: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];

    const expectReturn: Motorcycle[] = findMotorcyclesOutput.map((e) => new Motorcycle(e));

    sinon.stub(Model, 'find').resolves(findMotorcyclesOutput);

    // act

    const service = new MotorcycleServices();
    const result = await service.findAll();

    // ass

    expect(result).to.be.deep.equal(expectReturn);

    sinon.restore();
  });

  it('Deve retornar um erro ao listar uma moto que não exista', async function () {
    // arr
    const id = '123456789abcdef';
    
    sinon.stub(Model, 'find').resolves(undefined);

    // act 
    const service = new MotorcycleServices();
    const result = await service.findById(id);
    //  ass

    expect(result).to.be.deep.equal(undefined);

    sinon.restore();
  });

  it('Deve retornar uma moto pelo id com SUCESSO', async function () {
    // arr
    const findMotorcyclesOutput: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      }];

    const expectedReturn: Motorcycle[] = findMotorcyclesOutput.map((e) => new Motorcycle(e));

    sinon.stub(Model, 'find').resolves(findMotorcyclesOutput);

    // act

    const service = new MotorcycleServices();
    const result = await service.findById('634852326b35b59438fbea2f');

    // ass

    expect(result).to.be.deep.equal(expectedReturn);

    sinon.restore();
  });
});