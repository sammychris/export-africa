const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema for Product
const productSchema = new Schema({
    exporter: { type: Schema.Types.ObjectId, ref: 'Exporter', required: true },
    name: { type: String, required: true, index: true },
    featuredImage: {
        name: { type: String },
        type: { type: String },
        size: { type: Number },
        path: { type: String }, // Storage path or URL
        changed: { type: Boolean },
    },
    description: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: 'USD' }, // Default currency
    measurementUnit: { type: String, required: true },
    gallery: [{
        name: { type: String },
        type: { type: String },
        size: { type: Number },
        path: { type: String }, // Storage path or URL
        changed: { type: Boolean },
    }],
    videoUrl: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], // Array of reviews
    averageRating: { type: Number, default: 0.0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Define associations (same as before)
productSchema.virtual('reviewCount', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'product',
    count: true,
});
  
productSchema.pre('save', async function (next) {
    if (this.isModified('reviews')) {
        // Recalculate average rating based on reviews
        const reviews = await this.populate('reviews').execPopulate();
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        this.averageRating = totalRating / reviews.length;
    }
    next();
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
