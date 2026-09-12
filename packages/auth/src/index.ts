export { auth } from "./server";
export {
  getSession,
  requireUser,
  requireRole,
  requireAdmin,
  requireFreelancer,
} from "./session";
export type { Role } from "./session";
export type { AuthEnv } from "./env";
export { emailProvider } from "./email/provider";
export type { EmailMessage, EmailProvider } from "./email/provider";
export {
  sendWelcomeEmail,
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendOrderConfirmationEmail,
  sendDeliveryNotificationEmail,
  sendOrderCompletionEmail,
  sendRefundNotificationEmail,
  sendPayoutNotificationEmail,
} from "./email/templates";