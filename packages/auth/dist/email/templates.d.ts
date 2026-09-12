export declare function sendWelcomeEmail(to: string, name: string): Promise<void>;
export declare function sendVerificationEmail(to: string, url: string): Promise<void>;
export declare function sendPasswordResetEmail(to: string, url: string): Promise<void>;
export declare function sendOrderConfirmationEmail(to: string, orderNumber: string, amount: number): Promise<void>;
export declare function sendDeliveryNotificationEmail(to: string, orderNumber: string): Promise<void>;
export declare function sendOrderCompletionEmail(to: string, orderNumber: string): Promise<void>;
export declare function sendRefundNotificationEmail(to: string, orderNumber: string): Promise<void>;
export declare function sendPayoutNotificationEmail(to: string, amount: number): Promise<void>;
