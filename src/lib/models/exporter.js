// models/exporter.js
import mongoose, { Schema } from 'mongoose';



const exporterSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    companyName: { type: String, required: true },
    description:  { type: String, required: true },
    productCategories: [{ value: String, label: String }],
    logo: {
        name: { type: String },
        type: { type: String },
        size: { type: Number },
        path: { type: String }, // Storage path or URL
        changed: { type: Boolean },
    },
    brochuresCatalogsUrl: { type: String },
    country: { type: String, required: true },
    state: { type: String, required: true },
    contact: {
        email: String,
        phone: String,
        website: String,
    },
    verified: { type: Boolean, default: false },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    certifications: [{
        name: { type: String },
        type: { type: String },
        size: { type: Number },
        path: { type: String }, // Storage path or URL
        changed: { type: Boolean },
    }],
    companyDocuments: {
        name: { type: String },
        type: { type: String },
        size: { type: Number },
        path: { type: String }, // Storage path or URL
        changed: { type: Boolean },
    },
    idDocument: {
        name: { type: String },
        type: { type: String },
        size: { type: Number },
        path: { type: String }, // Storage path or URL
        changed: { type: Boolean },
    },
    addressProof: {
        name: { type: String },
        type: { type: String },
        size: { type: Number },
        path: { type: String }, // Storage path or URL
        changed: { type: Boolean },
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    socialLinks: [{ platform: String, url: String }],
});

const Exporter = mongoose.models.Exporter || mongoose.model('Exporter', exporterSchema);

export default Exporter;
