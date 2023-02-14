import {
  Schema,
  isValidObjectId,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<ICar[] | undefined> {
    if (!isValidObjectId(id)) return undefined;

    return this.model.find({ _id: id });
  }
}