pm.test("Status code deve ser 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Deve conter os campos message e data", function() {
    const response = pm.response.json();

    pm.expect(response).to.have.property('message');
    pm.expect(response).to.have.property('data');
})

pm.test("Deve verificar o tipo de dado de cada campo", function() {
    const response = pm.response.json();

    pm.expect(response.message).to.be.a('string');
    pm.expect(response.data).to.be.an('array');
    pm.expect(response.data[0].id).to.be.a('number');
})

pm.test("Deve possuir mensagem de sucesso", function() {
    pm.response.to.have.jsonBody('message', 'Animais listados com sucesso.')
})