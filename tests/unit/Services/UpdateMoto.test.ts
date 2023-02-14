import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleServices from '../../../src/Services/MotorcycleServices';

describe('Atualizar um carro', function () {
  it('Deve atualizar um carro com SUCESSO', async function () {
    // arr
    const id = '634852326b35b59438fbea2f';

    const updateInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const updateOutput: IMotorcycle = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateOutput);

    // act
    const service = new MotorcycleServices();
    const result = await service.update(id, updateInput);
    // ass
    expect(result).to.be.deep.equal(updateOutput);
  });
});