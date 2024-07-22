import mongoose from 'mongoose';

const { Schema } = mongoose;

const jobListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
    required: true,
  },
}, { collection: 'jobListings' });

export default mongoose.models.jobListing || mongoose.model('jobListing', jobListingSchema);
