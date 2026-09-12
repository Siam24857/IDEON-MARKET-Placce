export const ROLES = {
  BUYER: "BUYER",
  FREELANCER: "FREELANCER",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
} as const;
export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ACCOUNT_STATUSES = {
  ACTIVE: "ACTIVE",
  SUSPENDED: "SUSPENDED",
  BANNED: "BANNED",
} as const;
export type AccountStatus = (typeof ACCOUNT_STATUSES)[keyof typeof ACCOUNT_STATUSES];

export const VERIFICATION_STATUSES = {
  UNVERIFIED: "UNVERIFIED",
  VERIFIED: "VERIFIED",
  PENDING: "PENDING",
} as const;
export type VerificationStatus = (typeof VERIFICATION_STATUSES)[keyof typeof VERIFICATION_STATUSES];

export const SERVICE_STATUSES = {
  DRAFT: "DRAFT",
  PENDING_REVIEW: "PENDING_REVIEW",
  PUBLISHED: "PUBLISHED",
  REJECTED: "REJECTED",
  PAUSED: "PAUSED",
} as const;
export type ServiceStatus = (typeof SERVICE_STATUSES)[keyof typeof SERVICE_STATUSES];

export const SERVICE_TYPES = {
  SERVICE: "SERVICE",
  DIGITAL_PRODUCT: "DIGITAL_PRODUCT",
} as const;
export type ServiceType = (typeof SERVICE_TYPES)[keyof typeof SERVICE_TYPES];

export const ORDER_STATUSES = {
  PENDING_PAYMENT: "PENDING_PAYMENT",
  PAID: "PAID",
  IN_PROGRESS: "IN_PROGRESS",
  DELIVERED: "DELIVERED",
  REVISION_REQUESTED: "REVISION_REQUESTED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  REFUNDED: "REFUNDED",
  DISPUTED: "DISPUTED",
} as const;
export type OrderStatus = (typeof ORDER_STATUSES)[keyof typeof ORDER_STATUSES];

export const PAYMENT_STATUSES = {
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
  FAILED: "FAILED",
  REFUNDED: "REFUNDED",
} as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[keyof typeof PAYMENT_STATUSES];

export const PAYOUT_STATUSES = {
  PENDING: "PENDING",
  PAID: "PAID",
  FAILED: "FAILED",
} as const;
export type PayoutStatus = (typeof PAYOUT_STATUSES)[keyof typeof PAYOUT_STATUSES];

export const DISPUTE_STATUSES = {
  OPEN: "OPEN",
  UNDER_REVIEW: "UNDER_REVIEW",
  RESOLVED_BUYER: "RESOLVED_BUYER",
  RESOLVED_FREELANCER: "RESOLVED_FREELANCER",
  CLOSED: "CLOSED",
} as const;
export type DisputeStatus = (typeof DISPUTE_STATUSES)[keyof typeof DISPUTE_STATUSES];

export const REPORT_STATUSES = {
  OPEN: "OPEN",
  REVIEWED: "REVIEWED",
  RESOLVED: "RESOLVED",
  DISMISSED: "DISMISSED",
} as const;
export type ReportStatus = (typeof REPORT_STATUSES)[keyof typeof REPORT_STATUSES];

export const FREELANCER_LEVELS = {
  NEW: "NEW",
  LEVEL_1: "LEVEL_1",
  LEVEL_2: "LEVEL_2",
  TOP_RATED: "TOP_RATED",
} as const;
export type FreelancerLevel = (typeof FREELANCER_LEVELS)[keyof typeof FREELANCER_LEVELS];

export const FREELANCER_STATUSES = {
  PENDING: "PENDING",
  ACTIVE: "ACTIVE",
  SUSPENDED: "SUSPENDED",
  REJECTED: "REJECTED",
} as const;
export type FreelancerStatus = (typeof FREELANCER_STATUSES)[keyof typeof FREELANCER_STATUSES];

export const PACKAGE_NAMES = {
  BASIC: "BASIC",
  STANDARD: "STANDARD",
  PREMIUM: "PREMIUM",
} as const;
export type PackageName = (typeof PACKAGE_NAMES)[keyof typeof PACKAGE_NAMES];

export const CURRENCIES = {
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
} as const;
export type Currency = (typeof CURRENCIES)[keyof typeof CURRENCIES];

export const PLATFORM_DEFAULTS = {
  PLATFORM_NAME: "IDEONS Marketplace",
  COMMISSION_PERCENT: 10,
  MIN_SERVICE_PRICE: 5,
  MAX_SERVICE_PRICE: 100000,
  CURRENCY: "USD",
  SERVICE_APPROVAL_REQUIRED: true,
  MAINTENANCE_MODE: false,
} as const;

export const NOTIFICATION_TYPES = {
  NEW_ORDER: "NEW_ORDER",
  PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
  PAYMENT_FAILED: "PAYMENT_FAILED",
  NEW_MESSAGE: "NEW_MESSAGE",
  DELIVERY_SUBMITTED: "DELIVERY_SUBMITTED",
  REVISION_REQUESTED: "REVISION_REQUESTED",
  ORDER_COMPLETED: "ORDER_COMPLETED",
  NEW_REVIEW: "NEW_REVIEW",
  SERVICE_APPROVED: "SERVICE_APPROVED",
  SERVICE_REJECTED: "SERVICE_REJECTED",
  REFUND: "REFUND",
  PAYOUT: "PAYOUT",
} as const;
export type NotificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];