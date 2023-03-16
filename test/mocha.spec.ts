import { expect, assert, Assertion } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest'
import { app } from '../crud/server';
import {isProduct, produto, idDelete, notProduct} from './super'
import { CustomError } from '../crud/routes/middleware';
import { application } from 'express';
import { json } from 'body-parser';

describe('endpoint /create', function () {
  it('cria um novo produto', function (done) {
    request(app)
      .post('/create')
      .send(produto)
      .then(response => {
        expect(response.statusCode).to.be.equal(200);
        expect(isProduct(response.body)).to.be.true;
        done();
      });
  });

  it('nao deve criar um novo produto', function (done) {
    request(app)
      .post('/create')
      .send(notProduct)
      .then(response => {
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.status).to.be.equal(400);
        done();
      });
  });
});


// describe('endpoint /delete', function (){
//   describe('deleta um novo produto', function () {
//     it('deleta um produto', async function () {
//       try {
//         const response = await request(app)
//           .delete('/delete')
//           .set('Content-Type', 'application/json')
//           .send(idDelete);
//           console.log('passou aqui');
//           console.log(response.body);
  
//         expect(response.statusCode).to.be.equal(200);
//       } catch (error) {
//         // Trate os erros aqui, se necessário
//         throw error;
//       }
//     });
//   });
 
  
// })


// it('deleta um produto', function(done){
//   request(app)
//    .delete('/delete')
//    .send(idDelete)
//    .then(response =>{
//      console.log(idDelete);
     
//      console.log(response);
     
//      expect(response.status).to.be.equal(200)
//      expect(isProduct(response.body)).to.be.true
//      done()
//    })
//  })
