import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

// Submit contact form (fixed validation)
router.post('/submit', async (req, res) => {
  try {
    const { name, email, subject, message, details } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
      details: subject === 'Reservation' ? details : undefined
    });

    await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully', data: newContact });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all contacts (fixed filtering)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { subject: category } : {};
    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    res.json({ count: contacts.length, data: contacts });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;