import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarServices from '../../../src/Services/CarServices';

describe('Atualizar um carro', function () {
  it('Deve atualizar um carro com SUCESSO', async function () {
    // arr
    const id = '634852326b35b59438fbea2f';

    const updateInput: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const updateOutput: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateOutput);

    // act
    const service = new CarServices();
    const result = await service.update(id, updateInput);
    // ass
    expect(result).to.be.deep.equal(updateOutput);
  });
});