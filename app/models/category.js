const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: [true, "The name field must be unique"],
    trim: true,
    minlength: [5, "The category name must be at least 5 characters long"]
  }
})

categorySchema.plugin(uniqueValidator);


export const Category = mongoose.model('Category', categorySchema)
