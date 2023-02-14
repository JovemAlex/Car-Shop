import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleServices from '../../../src/Services/MotorcycleServices';

describe('Deve cadastrar uma Moto', function () {
  it('Deve cadastrar uma moto com SUCESSO', async function () {
    // arr

    const newMotorcycleInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const returnedMotorcycle: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const newMotorcycleOutput: Motorcycle = new Motorcycle(returnedMotorcycle);

    sinon.stub(Model, 'create').resolves(newMotorcycleOutput);

    // act
    
    const service = new MotorcycleServices();
    const result = await service.create(newMotorcycleInput);

    // ass

    expect(result).to.be.deep.equal(newMotorcycleOutput);

    sinon.restore();
  });
});