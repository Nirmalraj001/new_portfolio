import emailjs from '@emailjs/browser';

/**
 * Interface mapping the parameters required by the EmailJS template.
 * Conforms to strict type checking rules - no 'any' types allowed.
 */
export interface EmailParams {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  message: string;
  reply_to: string;
  time: string;
  [key: string]: string; // Satisfy index signature for record constraints
}

/**
 * Reusable email service that handles transmission using EmailJS Browser SDK.
 * Reads configurations dynamically from Vite environment variables.
 * Never hardcodes any credentials.
 * 
 * Required Variables:
 * - VITE_EMAILJS_PUBLIC_KEY
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 */
export const sendEmail = async (params: EmailParams): Promise<void> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Verify that all environment credentials are loaded
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS credentials are missing. Make sure VITE_EMAILJS_PUBLIC_KEY, ' +
      'VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID are configured in your .env file.'
    );
  }

  // Send the email parameters to the EmailJS API using the browser SDK
  // Cast params to a standard record representation to satisfy the SDK typings
  const templateParams: Record<string, unknown> = { ...params };

  await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey
  );
};
