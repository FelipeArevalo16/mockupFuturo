const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mi_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
  nombre: String,
  edad: Number
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

const nuevoUsuario = new Usuario({ nombre: 'Juan', edad: 30 });
nuevoUsuario.save().then(() => console.log('Usuario guardado'));
