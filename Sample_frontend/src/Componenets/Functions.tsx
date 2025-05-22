export const decoderesponsetoken = async (data:any) => {
    try {
      const response = await fetch("http://localhost:5000/api/decodetoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: data.token }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json(); // Parse and return the JSON response
    } catch (error:any) {
      console.error("Error decoding token:", error);
      return { error: error.message }; // Return error in JSON format
    }
  };
  