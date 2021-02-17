const express = require ("express");
const { get } = require("http");

const app = express ()
const path = require ('path')
const port = 2021;

app.get('/fibo',(req, res) => {
    numero = parseInt(req.query.numero);
    if(numero % 2 === 0) {
      fibonacci(20);
    }else
    {    
       fibonacci(10);
    }
    res.json(`La respuesta es : ${fibonacci}`);
})

function fibonacci(num) {  
  var fibonaccis = [];
        var anterior= 0;
        var siguiente= 1;
    resultado = parseInt(anterior)+parseInt(siguiente);
  
  for (let i=0; i< num ;i++){
    resultado = anterior + siguiente;
    anterior = siguiente;
    siguiente = resultado;

    fibonacci.push(resultado);
}
    return fibonacci;
}

app.listen(2021, () => {
    console.log(`Escuchando en el puerto 2021`);
});
