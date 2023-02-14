import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarServices from '../../../src/Services/CarServices';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('Deve cadastrar um carro', function () {
  it('Deve cadastrar um carro com SUCESSO', async function () {
    // arr

    const newCarInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const returnedCar: ICar = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const newCarOutput: Car = new Car(returnedCar);

    sinon.stub(Model, 'create').resolves(newCarOutput);

    // act
    
    const service = new CarServices();
    const result = await service.create(newCarInput);

    // ass

    expect(result).to.be.deep.equal(newCarOutput);

    sinon.restore();
  });
});