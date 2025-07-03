"use server";

import emailSender from "@/lib/emailSender";
import { z } from "zod";

// Form validation schema
const quoteFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "Company name is required"),
  website: z.string().optional(),
  serviceType: z.string().min(1, "Service type is required"),
  budget: z.string().min(1, "Budget range is required"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export async function submitQuoteRequest(formData: QuoteFormData) {
  try {
    // Validate form data
    const validatedData = quoteFormSchema.parse(formData);

    // Owner's email address
    const ownerEmail =
      process.env.CONTACT_MAIL_ADDRESS || "ahraju3904@gmail.com";

    // Email subject
    const subject = `New Quote Request from ${validatedData.firstName} ${validatedData.lastName}`;

    // Generate HTML email content
    const htmlContent = generateEmailTemplate(validatedData);

    // Send email to owner
    await emailSender(subject, ownerEmail, htmlContent);

    return { success: true, message: "Quote request submitted successfully!" };
  } catch (error) {
    console.error("Error submitting quote request:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.errors.map((e) => ({
          field: e.path[0],
          message: e.message,
        })),
      };
    }
    return {
      success: false,
      message: "Failed to submit quote request. Please try again.",
    };
  }
}

// Email template generator
function generateEmailTemplate(data: QuoteFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .container {
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
        }
        .header {
          background: linear-gradient(to right, #dc2626, #b91c1c);
          color: white;
          padding: 20px;
          text-align: center;
        }
        .content {
          padding: 20px;
        }
        .section {
          margin-bottom: 20px;
        }
        .section-title {
          font-weight: bold;
          margin-bottom: 5px;
          color: #b91c1c;
        }
        .field {
          margin-bottom: 10px;
        }
        .field-name {
          font-weight: bold;
        }
        .field-value {
          margin-left: 10px;
        }
        .footer {
          background-color: #f5f5f5;
          padding: 15px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 8px;
          border-bottom: 1px solid #eee;
        }
        td:first-child {
          font-weight: bold;
          width: 40%;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
          <p>A new quote request has been submitted through your website</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Client Information</div>
            <table>
              <tr>
                <td>Name:</td>
                <td>${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>${data.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>${data.phone}</td>
              </tr>
              <tr>
                <td>Company:</td>
                <td>${data.company}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>${data.website || "Not provided"}</td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <div class="section-title">Project Details</div>
            <table>
              <tr>
                <td>Service Type:</td>
                <td>${data.serviceType}</td>
              </tr>
              <tr>
                <td>Monthly Order Volume:</td>
                <td>${data.budget}</td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <p>Please respond to this client within 24 hours to discuss their project requirements.</p>
            <p><a href="mailto:${
              data.email
            }" style="color: #b91c1c; text-decoration: none; font-weight: bold;">Reply to ${
    data.firstName
  }</a></p>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated message from your Rapid Flow Fulfillment Services website.</p>
          <p>&copy; ${new Date().getFullYear()} Rapid Flow Fulfillment Services. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
