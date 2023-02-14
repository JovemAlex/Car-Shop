// import sinon from 'sinon';
// import { expect } from 'chai';
// import { Model } from 'mongoose';
// import ICar from '../../../src/Interfaces/ICar';
// import Car from '../../../src/Domains/Car';

// describe('Atualizar um carro', function () {
//   it('Deve atualizar um carro com SUCESSO', async function () {
//     // arr

//     const updateCarInput: ICar = {
//       model: 'Marea',
//       year: 1992,
//       color: 'Red',
//       status: true,
//       buyValue: 12.000,
//       doorsQty: 2,
//       seatsQty: 5,
//     };

//     const updateResult: ICar[] = [
//       {
//         id: '634852326b35b59438fbea2f',
//         model: 'Marea',
//         year: 2002,
//         color: 'Black',
//         status: true,
//         buyValue: 12.000,
//         doorsQty: 4,
//         seatsQty: 5,
//       }];

//     const carUpdated: Car[] = updateResult.map((e) => new Car(e));

//     sinon.stub(Model, 'update').resolves(carUpdated);

//     // act

//     // ass
//   });
// });