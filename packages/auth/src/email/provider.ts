import { env } from "../env";

export type EmailMessage = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

export interface EmailProvider {
  send(message: EmailMessage): Promise<void>;
}

class ConsoleEmailProvider implements EmailProvider {
  async send(message: EmailMessage): Promise<void> {
    if (env.NODE_ENV === "production") return;
    console.info(
      `[email:console] To: ${message.to} | Subject: ${message.subject}`
    );
    console.info(
      message.html
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    );
  }
}

class LogEmailProvider implements EmailProvider {
  async send(message: EmailMessage): Promise<void> {
    console.log(JSON.stringify({ provider: "log", ...message }));
  }
}

function createEmailProvider(): EmailProvider {
  if (env.EMAIL_API_KEY) {
    return new LogEmailProvider();
  }
  return new ConsoleEmailProvider();
}

export const emailProvider = createEmailProvider();