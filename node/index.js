const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('Paulo')`;
connection.query(sql);
connection.end();

const getPeople = async () => {
  const connection = mysql.createConnection(config);
  const selectQuery = `SELECT * FROM people`;

  return new Promise((resolve, reject) => {
    connection.query(selectQuery, (err, results) => {
      connection.end();
      if (err) {
        reject(err);
      }
      if (results.length >= 0) {
        resolve(results.map((people) => `<p>${people.name}</p>`).join(''));
      } else {
        resolve('');
      }
    });
  });
};

const insertPeople = async (name) => {
  const connection = mysql.createConnection(config);
  const insertQuery = `INSERT INTO people(name) values('${name}')`;

  return new Promise((resolve, reject) => {
    connection.query(insertQuery, (err) => {
      connection.end();
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

app.get('/', async (req, res) => {
  res.send(`
      <h1>Full Cycle Rocks!</h1>
      ${await getPeople()}
    `);
});

app.get(`/:name`, async (req, res) => {
  await insertPeople(req.params.name);
  res.send(`
      <h1>Full Cycle Rocks!</h1>
      ${await getPeople()}
    `);
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
