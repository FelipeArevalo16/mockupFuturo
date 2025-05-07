const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'mi_base_de_datos'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
});


connection.query('SELECT * FROM usuarios', (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(results);
});

connection.end();
