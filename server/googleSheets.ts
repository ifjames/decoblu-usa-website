import { google } from 'googleapis';
import type { ContactFormData } from './emailService';

// Google Sheets configuration
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Initialize Google Sheets API
const getSheetClient = async () => {
  try {
    // Check if Google Sheets credentials are configured
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 
        !process.env.GOOGLE_PRIVATE_KEY || 
        !process.env.GOOGLE_SHEET_ID ||
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL.includes('your-service-account') ||
        process.env.GOOGLE_PRIVATE_KEY.includes('Your-Private-Key-Here')) {
      console.log('Google Sheets credentials not configured. Form responses will not be logged to sheets.');
      return null;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    return sheets;
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    return null;
  }
};

// Format data for Google Sheets
const formatSheetData = (data: ContactFormData) => {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return [
    timestamp,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.vehicleMakeModel,
    data.registration || '',
    data.services,
    data.message,
    'New' // Status column
  ];
};

// Log form response to Google Sheets
export const logToGoogleSheets = async (data: ContactFormData): Promise<boolean> => {
  try {
    const sheets = await getSheetClient();
    
    if (!sheets) {
      console.log('Google Sheets logging disabled - credentials not configured');
      return true; // Return true so it doesn't block email sending
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Form Responses!A:J'; // Adjust range as needed
    
    // Prepare the data to append
    const values = [formatSheetData(data)];
    
    const request = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values,
      },
    };

    const response = await sheets.spreadsheets.values.append(request);
    console.log('Form response logged to Google Sheets:', response.data.updates?.updatedRows);
    return true;
    
  } catch (error) {
    console.error('Error logging to Google Sheets:', error);
    return false; // Don't fail the entire form submission if sheets logging fails
  }
};

// Initialize the spreadsheet with headers (run this once)
export const initializeGoogleSheet = async (): Promise<boolean> => {
  try {
    const sheets = await getSheetClient();
    
    if (!sheets) {
      console.log('Cannot initialize Google Sheets - credentials not configured');
      return false;
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    // Check if headers already exist
    const checkRange = 'Form Responses!A1:J1';
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: checkRange,
    });

    if (existingData.data.values && existingData.data.values.length > 0) {
      console.log('Google Sheet headers already exist');
      return true;
    }

    // Add headers if they don't exist
    const headers = [
      'Timestamp',
      'First Name',
      'Last Name', 
      'Email',
      'Phone',
      'Project Type',
      'Room/Space Size',
      'Service Requested',
      'Message',
      'Status'
    ];

    const headerRequest = {
      spreadsheetId,
      range: 'Form Responses!A1:J1',
      valueInputOption: 'RAW',
      resource: {
        values: [headers],
      },
    };

    await sheets.spreadsheets.values.update(headerRequest);
    
    // Format the header row (make it bold)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0,
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 10,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: {
                    bold: true,
                  },
                  backgroundColor: {
                    red: 0.9,
                    green: 0.9,
                    blue: 0.9,
                  },
                },
              },
              fields: 'userEnteredFormat(textFormat,backgroundColor)',
            },
          },
        ],
      },
    });

    console.log('Google Sheet initialized with headers');
    return true;
    
  } catch (error) {
    console.error('Error initializing Google Sheet:', error);
    return false;
  }
};

// Test Google Sheets connection
export const testGoogleSheetsConnection = async (): Promise<boolean> => {
  try {
    const sheets = await getSheetClient();
    
    if (!sheets) {
      console.log('Google Sheets connection test skipped - credentials not configured');
      return true;
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    // Try to read the spreadsheet info
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    });
    
    console.log('Google Sheets connection verified:', response.data.properties?.title);
    return true;
    
  } catch (error) {
    console.error('Google Sheets connection failed:', error);
    return false;
  }
};
