const worker = require('../models/workerModel');

const createworker = async (req, res) => {
  const { nombre, puesto } = req.body;
  if (!nombre || !puesto) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }
  
  const { data, error } = await worker.createworker(nombre, puesto);
  if (error) {
    return res.status(500).json({ message: 'Error al crear al empleado.', error });
  }
  
  res.status(201).json({ message: 'Empleado registrado exitosamente.', data });
};

const getAllworkers = async (req, res) => {
  const { data, error } = await worker.getAllworkers();
  console.log("Datos de empleados:", data);
  
  if (error) {
    return res.status(500).json({ message: 'Error al obtener empleados.', error });
  }
  
  res.status(200).json({ data });
};

const getworkerById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await worker.getworkerById(id);
  
  if (error) {
    return res.status(500).json({ message: 'Error al obtener al empleado.', error });
  }
  
  if (!data) {
    return res.status(404).json({ message: 'Empleado no encontrado.' });
  }
  
  res.status(200).json({ data });
};

const updateworker = async (req, res) => {
  const { id } = req.params;
  const { nombre, puesto } = req.body;  // Extraer las variables del cuerpo
  
  const { data, error } = await worker.updateworker(id, nombre, puesto);
  if (error) {
    return res.status(500).json({ message: 'Error al actualizar los datos.', error });
  }
  
  res.status(200).json({ message: 'Datos actualizados exitosamente.', data });
};

const deleteworker = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await worker.deleteworker(id);
  
  if (error) {
    return res.status(500).json({ message: 'Error al eliminar al empleado.', error });
  }
  
  res.status(200).json({ message: 'Empleado eliminado exitosamente.', data });
};

module.exports = {
  createworker,
  getAllworkers,
  getworkerById,
  updateworker,
  deleteworker
};
