import { createUser, getUserByPhoneNumber } from '../models/User.js';
  // Correct import of the db module

export const registerUser = async (req, res) => {
  const { name, phoneNumber, lat, lng } = req.body;

  if (!name || !phoneNumber || !lat || !lng) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await getUserByPhoneNumber(phoneNumber);
    if (existingUser) {
      return res.status(200).json({ message: 'User already exists. Location updated!' });
    }

    // Create or update the user
    const newUser = await createUser(name, phoneNumber, lat, lng);
    return res.status(201).json({
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (err) {
    console.error('❌ Registration failed:', err.message);
    return res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

// New function to get user location by phone number
import db from '../config/db.js';  // Correct import of the db (pool) instance

// Example of querying using pool (which is now db)
export const getLocationByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.params;

  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  try {
    const result = await db.query('SELECT * FROM users WHERE phone_number = $1', [phoneNumber]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { latitude, longitude } = result.rows[0];

    return res.status(200).json({
      message: 'Location found',
      latitude,
      longitude,
    });
  } catch (err) {
    console.error('❌ Error fetching location:', err.message);
    return res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};
