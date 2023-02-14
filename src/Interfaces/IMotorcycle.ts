import CategoryOptions from '../utils/CategoryOptions';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: CategoryOptions;
  engineCapacity: number;
}