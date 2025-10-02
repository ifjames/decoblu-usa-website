import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { join } from 'path';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  confirmEmail: string;
  vehicleMakeModel: string;
  registration: string;
  services: string;
  message: string;
}

// Email configuration
const createTransporter = () => {
  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email credentials not configured. Emails will be logged instead of sent.');
    return null;
  }

  // Try multiple SMTP configurations
  const configs = [
    {
      // Primary: Office 365 SMTP
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    },
    {
      // Fallback: Gmail SMTP (if you want to use Gmail temporarily)
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || process.env.EMAIL_USER,
        pass: process.env.GMAIL_PASS || process.env.EMAIL_PASS,
      }
    }
  ];

  // Check if we should use Gmail fallback
  if (process.env.USE_GMAIL === 'true') {
    console.log('Using Gmail SMTP as fallback');
    return nodemailer.createTransport(configs[1]);
  }

  // Use Office 365 by default
  return nodemailer.createTransport(configs[0]);
};

const transporter = createTransporter();

export const generateEmailTemplate = (data: ContactFormData): string => {
  try {
    // Read the email template file from the root directory
    const templatePath = join(process.cwd(), 'email-template.html');
    let template = readFileSync(templatePath, 'utf8');
    
    // Create a template function that can evaluate JavaScript expressions
    const templateFunction = new Function('data', `
      return \`${template}\`;
    `);
    
    // Execute the template function with the data
    return templateFunction(data);
    
  } catch (error) {
    console.error('Error reading email template file:', error);
    // Fallback to a simple template if file reading fails
    return `
      <html>
        <body>
          <h2>New Contact Form Submission - DecoBlu USA</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Project Type:</strong> ${data.vehicleMakeModel}</p>
          ${data.registration ? `<p><strong>Room/Space Size:</strong> ${data.registration}</p>` : ''}
          <p><strong>Service:</strong> ${data.services}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </body>
      </html>
    `;
  }
};

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    if (!transporter) {
      // Log the email content for development
      console.log('=== EMAIL WOULD BE SENT ===');
      console.log('To: info@decobluusa.com');
      console.log('CC: infodecoblu@gmail.com');
      console.log('Subject: New Contact Form Submission', data.firstName, data.lastName);
      console.log('Content:', JSON.stringify(data, null, 2));
      console.log('=== END EMAIL ===');
      return true; // Return true for development
    }

    const emailTemplate = generateEmailTemplate(data);
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@decobluusa.com',
      to: 'info@decobluusa.com',
      cc: 'infodecoblu@gmail.com',
      subject: `🎯 New Contact Form Submission | ${data.firstName} ${data.lastName} - ${data.services}`,
      html: emailTemplate,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return true;
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // If Office 365 fails, we could try alternative methods here
    if (error.code === 'EAUTH' && error.responseCode === 535) {
      console.log('SMTP Authentication failed. Please check:');
      console.log('1. SMTP AUTH is enabled for your Office 365 tenant');
      console.log('2. The account has proper permissions');
      console.log('3. Consider using an app password if 2FA is enabled');
      console.log('4. Changes may take up to 1 hour to propagate');
    }
    
    return false;
  }
};

// Test email configuration
export const testEmailConnection = async (): Promise<boolean> => {
  try {
    if (!transporter) {
      console.log('Email service running in development mode (no credentials configured)');
      return true;
    }
    
    await transporter.verify();
    console.log('Email server connection verified');
    return true;
  } catch (error) {
    console.error('Email server connection failed:', error);
    return false;
  }
};
