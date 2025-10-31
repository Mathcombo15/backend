const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('API de Tarefas', () => {
    let tarefaId; // Variável para armazenar o ID da tarefa criada

    // Teste para GET /tarefas
    test('Deve retornar 200 e um JSON ao fazer GET /tarefas', async () => {
        const response = await request.get('/tarefas');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });

    // Teste para POST /tarefas
    test('Deve retornar 201 e um JSON ao fazer POST /tarefas', async () => {
        const response = await request.post('/tarefas').send({
            nome: "Estudar Node",
            concluida: false
        });
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toHaveProperty('id');
        tarefaId = response.body.id; // Salva o ID para os próximos testes
    });

    // Teste para GET /tarefas/:id (sucesso)
    test('Deve retornar 200 e um JSON para GET /tarefas/:id', async () => {
        const response = await request.get(`/tarefas/${tarefaId}`);
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });

    // Teste para GET /tarefas/:id (não encontrado)
    test('Deve retornar 404 para GET /tarefas/1 (ID inexistente)', async () => {
        const response = await request.get('/tarefas/1');
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    });

    // Teste para PUT /tarefas/:id (sucesso)
    test('Deve retornar 200 e um JSON para PUT /tarefas/:id', async () => {
        const response = await request.put(`/tarefas/${tarefaId}`).send({
            nome: "Estudar Node e Express",
            concluida: true
        });
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });

    // Teste para PUT /tarefas/:id (não encontrado)
    test('Deve retornar 404 para PUT /tarefas/1 (ID inexistente)', async () => {
        const response = await request.put('/tarefas/1').send({
            nome: "Estudar",
            concluida: false
        });
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    });

    // Teste para DELETE /tarefas/:id (sucesso)
    test('Deve retornar 204 para DELETE /tarefas/:id', async () => {
        const response = await request.delete(`/tarefas/${tarefaId}`);
        expect(response.status).toBe(204);
    });

    // Teste para DELETE /tarefas/:id (não encontrado)
    test('Deve retornar 404 para DELETE /tarefas/1 (ID inexistente)', async () => {
        const response = await request.delete('/tarefas/1');
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    });
});