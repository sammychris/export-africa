const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String},
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
  image: {
    name: { type: String },
    type: { type: String },
    size: { type: Number },
    path: { type: String }, // Storage path or URL
    changed: { type: Boolean },
  },
  metaKeywords: { type: String},
  metaDescription: { type: String},
  measurementUnits: [{
    label: String,
    value: String,
    // mongoose.Schema.Types.ObjectId,
    // ref: 'UnitOfMeasurement'
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  // Enable virtual population
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Define associations
categorySchema.virtual('children', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'parent',
});

const Category =  mongoose.models?.Category || mongoose.model('Category', categorySchema);

module.exports = Category;
