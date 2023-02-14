import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleServices {
  constructor(private _model = new MotorcycleODM()) {}

  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(newMotorcycle: IMotorcycle) {
    const newMotorcycleCreate = await this._model.create(newMotorcycle);
    return this.createMotorcycleDomain(newMotorcycleCreate);
  }

  // public async findAll() {
  //   const allCars = await this._model.findAll();
  //   const result = allCars.map((e) => this.createCarDomain(e));
  //   return result;
  // }

  // public async findById(id: string) {
  //   const car = await this._model.findById(id);
  //   if (car === undefined) return undefined;
  //   const result = car.map((e) => this.createCarDomain(e));
  //   return result;
  // }

  // public async update(id: string, car: ICar) {
  //   const carUpdate = await this._model.update(id, car);
  //   return this.createCarDomain(carUpdate);
  // }
}