
const express = require('express');
const cors = require('cors');
const { json } = require('stream/consumers');
const app = express();
const PORT = 5000;

// Permitir o uso de json
app.use(express.json());
app.use(cors());

// Para saber que está rodando
app.get('/', (req, res) => {
    res.send("Bem-vindo à minha API!")
});

// Para enviar os dados para a API
app.post('/api/dados-formulario-contato', (req, res) => {

    // Dados enviados
    const dataForm = req.body;

    // Mostrar no console que deu certo
    console.log('Dados do formulário:', dataForm);

    // Enviar os dados de volta como JSON
    res.json({mensagem: 'Dados recebidos com sucesso!', dados: dataForm});

    }
    
)

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});

// Rota para retornar os dados do formulário em JSON
app.get('/api/dados-formulario-contato', (req, res) => {
    const dados = { 
        mensagem: 'Dados em JSON',
        dados: {
            nome: 'Exemplo',
            email: 'exemplo@example.com',
            telefone: '123456789',
            tamanho: 'pequena',
            segmento: 'exemplo',
            produto: 'exemplo',
            cargo: 'exemplo',
            mensagem: 'exemplo'
        }
    };
    res.json(dados);
});



