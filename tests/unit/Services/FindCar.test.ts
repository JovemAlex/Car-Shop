import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarServices from '../../../src/Services/CarServices';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('Deve listar todos os carros', function () {
  it('Deve retornar todos os carros com SUCESSO', async function () {
    // arr
    const findCarsOutput: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];

    const expectReturn: Car[] = findCarsOutput.map((e) => new Car(e));

    sinon.stub(Model, 'find').resolves(findCarsOutput);

    // act

    const service = new CarServices();
    const result = await service.findAll();

    // ass

    expect(result).to.be.deep.equal(expectReturn);

    sinon.restore();
  });

  it('Deve retornar um erro ao listar um carro que não exista', async function () {
    // arr
    const id = '123456789abcdef';
    
    sinon.stub(Model, 'find').resolves(undefined);

    // act 
    const service = new CarServices();
    const result = await service.findById(id);
    //  ass

    expect(result).to.be.deep.equal(undefined);

    sinon.restore();
  });

  it('Deve retornar um carro pelo id com SUCESSO', async function () {
    // arr
    const findCarsOutput: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      }];

    const expectedReturn: Car[] = findCarsOutput.map((e) => new Car(e));

    sinon.stub(Model, 'find').resolves(findCarsOutput);

    // act

    const service = new CarServices();
    const result = await service.findById('634852326b35b59438fbea2f');

    // ass

    expect(result).to.be.deep.equal(expectedReturn);

    sinon.restore();
  });
});