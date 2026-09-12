import { env } from "../env";
class ConsoleEmailProvider {
    async send(message) {
        if (env.NODE_ENV === "production")
            return;
        console.info(`[email:console] To: ${message.to} | Subject: ${message.subject}`);
        console.info(message.html
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim());
    }
}
class LogEmailProvider {
    async send(message) {
        console.log(JSON.stringify({ provider: "log", ...message }));
    }
}
function createEmailProvider() {
    if (env.EMAIL_API_KEY) {
        return new LogEmailProvider();
    }
    return new ConsoleEmailProvider();
}
export const emailProvider = createEmailProvider();
