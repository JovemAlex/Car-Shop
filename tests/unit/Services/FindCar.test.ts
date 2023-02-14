import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarServices from '../../../src/Services/CarServices';

describe('Deve listar todos os carros', function () {
  it('Deve retornar todos os carros com SUCESSO', async function () {
    // arr
    const findCarsOutput = [
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

    sinon.stub(Model, 'find').resolves(findCarsOutput);

    // act

    const service = new CarServices();
    const result = await service.findAll();

    // ass

    expect(result).to.be.deep.equal(findCarsOutput);

    sinon.restore();
  });
});