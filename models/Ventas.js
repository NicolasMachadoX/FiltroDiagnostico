const { Schema, model } = require("mongoose");

const objSchema = Schema({
    fechaVenta:{
        type: String,
        required: [true, 'El nombre es requerido']
    },
    paciente:{
        type: Number,
        require: [true, 'La direccion es requerida']
    },
    medicamentosVendidos:{
        type: Object,
        require: [true, 'El telefono es requerido']
    }}
);

module.exports = model('ventas', objSchema);

