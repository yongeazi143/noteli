// Import required dependencies
import { json } from "@vercel/node";

// Define the serverless function
export default json(async (req, res) => {
  if (req.method === "POST") {
    try {
      // Parse the JSON data from the request body
      const data = req.body;

      // Process the data (e.g., generate something)
      const generatedResult = {
        message: `Data received: ${data.value} Congratulations!`,
      };

      // Respond with a JSON object
      res.status(200).json(generatedResult);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
});
