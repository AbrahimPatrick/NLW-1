import express from 'express';

const app = express();

app.use(express.json());

const users = [
  'Diego',
  'Cleiton',
  'Robson',
  'Daniel'
];

app.get('/users', (request, response) => {
  // ex.: url?search=dan
  const search = String(request.query.search);

  const filteredUsers = search ? 
  users.filter(user => user.includes(search)) 
  : users;

  console.log(search);

  response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  response.json(user);
});

app.post('/users', (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email
  }

  return response.json(user);
});

app.listen(3333);