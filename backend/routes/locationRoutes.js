import express from 'express';
import axios from 'axios';
import cors from 'cors'; // Use import for consistency

const app = express();
const router = express.Router();

// ✅ Use CORS with the correct origin
app.use(cors({
  origin: [
    'https://minilocation-v4du.vercel.app/',
    'https://locationtrack-omega.vercel.app',
    'http://localhost:3000',  // Ensure this is added
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ✅ Reverse geocoding route
router.get('/reverse', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        lat,
        lon,
        format: 'json',
        zoom: 18,
        addressdetails: 1
      }
    });

    console.log("Response from geocoding:", response.data); // Log the response to debug

    // Check if response has address details
    if (response.data && response.data.display_name) {
      res.json({ address: response.data.display_name });
    } else {
      res.status(404).json({ error: 'No address found for the provided coordinates' });
    }
  } catch (err) {
    console.error('❌ Reverse geocoding failed:', err.message);
    res.status(500).json({ error: 'Failed to fetch address' });
  }
});

app.use('/api', router); // Register the router under the /api path

export default app; // Use export default for ES modules
