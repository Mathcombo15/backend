const supertest = require('supertest');
const express = require("express");

const app = require('../app');
const request = supertest(app)

describe("Testes dos endpoints /produtos", () => {
    
    let id;
    test("POST /produtos", async () => {
        const response = await request.post(`/produtos`).send({ nome: 'Laranja', preco: 10.0 });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.nome).toBe('Laranja');
        id = response.body._id;
    })
}

)