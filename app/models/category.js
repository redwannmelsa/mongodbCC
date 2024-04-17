const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Category name is required'] }
});

export const Category = mongoose.model('Category', categorySchema)
