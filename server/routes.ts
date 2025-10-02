import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, testEmailConnection, type ContactFormData } from "./emailService";
import { logToGoogleSheets, testGoogleSheetsConnection, initializeGoogleSheet } from "./googleSheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test email configuration on startup
  testEmailConnection();
  
  // Test Google Sheets connection and initialize if needed
  await testGoogleSheetsConnection();
  await initializeGoogleSheet();

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData: ContactFormData = req.body;
      
      // Basic validation
      if (!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.phone) {
        return res.status(400).json({ 
          success: false, 
          message: "Missing required fields" 
        });
      }

      // Validate email confirmation
      if (contactData.email !== contactData.confirmEmail) {
        return res.status(400).json({ 
          success: false, 
          message: "Email addresses do not match" 
        });
      }

      // Send email and log to Google Sheets
      const [emailSent, sheetsLogged] = await Promise.all([
        sendContactEmail(contactData),
        logToGoogleSheets(contactData)
      ]);
      
      if (emailSent) {
        const sheetsStatus = sheetsLogged ? " and logged" : "";
        res.json({ 
          success: true, 
          message: `Contact form submitted successfully${sheetsStatus}. We'll get back to you within 24 hours!` 
        });
      } else {
        // Even if email fails, we might have logged to sheets
        res.status(500).json({ 
          success: false, 
          message: "Failed to send email. Please try again or contact us directly." 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
