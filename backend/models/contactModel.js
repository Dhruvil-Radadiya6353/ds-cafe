import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { 
    type: String, 
    required: true,
    enum: ['General Questions', 'Feedback', 'Complaint', 'Reservation', 'Suggestion'] 
  },
  message: { type: String, required: true },
  details: {
    date: { type: Date },
    time: String,
    guests: Number
  }
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);