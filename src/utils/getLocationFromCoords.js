import axios from "axios";

export const getLocationFromCoords = async (lat, lng) => {
  try {
    console.log(`📍 Fetching address for: Latitude: ${lat}, Longitude: ${lng}`);

    // Ensure the API URL is available
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'; // Fallback to local URL if not set
    const requestUrl = `${apiUrl}/location/reverse`;  // Full API URL

    // Log the full API URL for debugging
    console.log(`🔗 Request URL: ${requestUrl}`);

    const res = await axios.get(requestUrl, {
      params: { lat, lon: lng },
    });

    console.log('🌍 Full Response:', res.data);

    if (res.data?.address) {
      const { road, suburb, city, state, country } = res.data.address;

      // Format the address with available components
      const formattedAddress = [road, suburb, city, state, country]
        .filter(Boolean)
        .join(', ') || 'Address details are incomplete or unavailable.';

      // If any part of the address is available, consider it "address found"
      const addressFound = formattedAddress !== 'Address details are incomplete or unavailable.';

      console.log(`✅ Address found: ${addressFound}`);
      console.log(`✅ Full address: ${formattedAddress}`);

      return { addressFound, formattedAddress };
    } else {
      throw new Error('No address found');
    }
  } catch (err) {
    console.error('❌ Reverse geocoding failed:', err.message);

    // Handle network errors or other exceptions more specifically
    if (err.message.includes('Network Error')) {
      return {
        addressFound: false,
        formattedAddress: 'Network error. Please check your connection.',
      };
    }

    // Return a fallback message if the geocoding fails
    return {
      addressFound: false,
      formattedAddress: 'Address not found. Could not retrieve location.',
    };
  }
};
