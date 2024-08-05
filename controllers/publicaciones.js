// controllers/publicacionController.js
import { PublicacionesModel } from "../models/publicaciones.js"; // Asegúrate de usar la ruta correcta
import path from 'path'
// Crear una nueva publicación
export const agregarPublicacion = async (req, res) => {
  try {
    const { text } = req.body;
    let image = req.file ? req.file.path : null; // Ruta de la imagen subida

    if (image) {
        image = path.relative(path.resolve('uploads'), image).replace(/\\/g, '/');
        image = `/uploads/${image}`;
      }
    // Crear un nuevo documento de publicación
    const nuevaPublicacion = new PublicacionesModel({ text, image });
    
    // Guardar la publicación en la base de datos
    await nuevaPublicacion.save();

    res.status(201).send({ message: 'Publicación agregada exitosamente', publicacion: nuevaPublicacion });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error al agregar la publicación' });
  }
};

export const getPublications = async (req, res) => {
    const publicaciones = await PublicacionesModel.find({})
    res.status(200).json(publicaciones)
}

