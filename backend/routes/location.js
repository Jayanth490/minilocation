import axios from 'axios';

export const getLocationFromCoords = async (lat, lon) => {
  try {
    console.log(`📍 Fetching address for: Latitude: ${lat}, Longitude: ${lon}`);

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/location/reverse`, {
      params: { lat, lon }
    });

    console.log('🌍 Full Response:', res.data);

    // Check if the response has address details
    if (res.data?.address) {
      const { road, suburb, city, state, country } = res.data.address;

      // Format the address if necessary, for example: road, city, country
      const formattedAddress = [road, suburb, city, state, country]
        .filter(Boolean)
        .join(', ') || 'Address details incomplete';

      console.log(`✅ Found address: ${formattedAddress}`);
      return formattedAddress;
    } else {
      throw new Error('No address found');
    }
  } catch (err) {
    // Improved error handling for Axios response
    if (err.response) {
      console.error('❌ Axios error response:', err.response);
      if (err.response.status === 404) {
        return 'Address not found (404)';
      }
      if (err.response.status === 500) {
        return 'Server error occurred while fetching address';
      }
    } else {
      console.error('❌ Error message:', err.message);
    }
    
  }
};
