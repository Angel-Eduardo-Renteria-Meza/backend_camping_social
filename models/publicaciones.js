import mongoose, { Schema } from 'mongoose';

const publicacionSchema = new Schema({
    text: String,
    image: String
   
});

export const PublicacionesModel = mongoose.model('publicaciones', publicacionSchema, 'publicaciones');
