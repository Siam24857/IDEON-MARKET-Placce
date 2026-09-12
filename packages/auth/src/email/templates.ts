import { emailProvider } from "./provider";

function layout(title: string, bodyHtml: string): string {
  return `
  <!DOCTYPE html>
  <html>
    <body style="margin:0;padding:0;background:#f6f7fb;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7fb;padding:32px 16px;">
        <tr><td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e7e9f0;">
            <tr><td style="padding:28px 32px;background:#0f172a;">
              <div style="color:#ffffff;font-size:20px;font-weight:700;">IDEONS <span style="color:#6366f1;">Ecosystem</span></div>
            </td></tr>
            <tr><td style="padding:32px;">
              <h1 style="margin:0 0 16px;font-size:22px;color:#0f172a;">${title}</h1>
              <div style="font-size:15px;line-height:1.7;color:#334155;">${bodyHtml}</div>
            </td></tr>
            <tr><td style="padding:20px 32px;border-top:1px solid #eef0f5;color:#94a3b8;font-size:13px;">
              IDEONS — one account across marketplace, jobs, e-books & resources.
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
  </html>`;
}

function ctaButton(url: string, label: string): string {
  return `<p style="margin:24px 0;"><a href="${url}" style="display:inline-block;background:#6366f1;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;">${label}</a></p>`;
}

export async function sendWelcomeEmail(
  to: string,
  name: string
): Promise<void> {
  await emailProvider.send({
    to,
    subject: "Welcome to IDEONS",
    html: layout(
      "Welcome aboard",
      `<p>Hi ${name},</p><p>Your IDEONS account is ready. Explore the marketplace, browse job openings, or start building your portfolio today.</p>`
    ),
  });
}

export async function sendVerificationEmail(
  to: string,
  url: string
): Promise<void> {
  await emailProvider.send({
    to,
    subject: "Verify your email address",
    html: layout(
      "Verify your email",
      `<p>Click the button below to confirm your email address and activate your account.</p>${ctaButton(
        url,
        "Verify email"
      )}<p style="color:#64748b;font-size:13px;">If you did not create an account, you can safely ignore this email.</p>`
    ),
  });
}

export async function sendPasswordResetEmail(
  to: string,
  url: string
): Promise<void> {
  await emailProvider.send({
    to,
    subject: "Reset your password",
    html: layout(
      "Reset your password",
      `<p>We received a request to reset your password. Click below to choose a new one.</p>${ctaButton(
        url,
        "Reset password"
      )}<p style="color:#64748b;font-size:13px;">This link expires shortly. If you didn't request this, ignore this email.</p>`
    ),
  });
}

export async function sendOrderConfirmationEmail(
  to: string,
  orderNumber: string,
  amount: number
): Promise<void> {
  await emailProvider.send({
    to,
    subject: `Order #${orderNumber} confirmed`,
    html: layout(
      "Order confirmed",
      `<p>Thank you! Your order <strong>#${orderNumber}</strong> has been placed. We notified the freelancer and they will start on it shortly.</p><p>Amount: <strong>$${amount}</strong></p>`
    ),
  });
}

export async function sendDeliveryNotificationEmail(
  to: string,
  orderNumber: string
): Promise<void> {
  await emailProvider.send({
    to,
    subject: `Delivery submitted for order #${orderNumber}`,
    html: layout(
      "Your delivery is ready",
      `<p>Your freelancer submitted a delivery for order <strong>#${orderNumber}</strong>. Review it and let them know if you need revisions.</p>`
    ),
  });
}

export async function sendOrderCompletionEmail(
  to: string,
  orderNumber: string
): Promise<void> {
  await emailProvider.send({
    to,
    subject: `Order #${orderNumber} completed`,
    html: layout(
      "Order completed",
      `<p>Congratulations! Order <strong>#${orderNumber}</strong> was marked complete. We'd love to hear about your experience — leave a review.</p>`
    ),
  });
}

export async function sendRefundNotificationEmail(
  to: string,
  orderNumber: string
): Promise<void> {
  await emailProvider.send({
    to,
    subject: `Refund processed for order #${orderNumber}`,
    html: layout(
      "Refund processed",
      `<p>A refund was issued for order <strong>#${orderNumber}</strong>. The money will return to your original payment method within a few business days.</p>`
    ),
  });
}

export async function sendPayoutNotificationEmail(
  to: string,
  amount: number
): Promise<void> {
  await emailProvider.send({
    to,
    subject: "Your payout is on the way",
    html: layout(
      "Payout processed",
      `<p>A payout of <strong>$${amount}</strong> was sent to your connected bank account.</p>`
    ),
  });
}