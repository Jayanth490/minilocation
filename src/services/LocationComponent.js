const handleSearch = async () => {
  if (!lat || !lng) {
    console.log("❌ Invalid coordinates.");
    return;
  }

  // Optionally: Set loading state here (e.g., isLoading = true)

  try {
    const { addressFound, formattedAddress } = await getLocationFromCoords(lat, lng);

    if (addressFound) {
      console.log(`✅ Address found: ${formattedAddress}`);
    } else {
      console.log(`❌ Address not found: ${formattedAddress}`);
    }
  } catch (err) {
    // Catch any errors that might occur during the API request
    console.error("❌ Error during address lookup:", err.message);
  } finally {
    // Optionally: Set loading state to false here (e.g., isLoading = false)
  }
};
