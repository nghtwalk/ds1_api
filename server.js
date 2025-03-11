const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

const bosses = require('./src/data/bosses');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {

  res.send('Bem Vindo(a) A Api Dark Souls 1');

});

app.get('/bosses', (req, res) => {

  res.json(bosses);

})

app.get('/bosses/:id', (req, res) => {

  const id = parseInt(req.params.id, 10);
  const boss = bosses.find(b => b.id === id);
  if (boss) {
    res.json(boss);
  } else {
    res.status(404).json({ message: 'Boss não encontrado' });
  }

})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});