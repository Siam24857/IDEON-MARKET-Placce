import { NextResponse } from "next/server";

export function apiSuccess<T>(
  data: T,
  message = "OK",
  init?: ResponseInit
) {
  return NextResponse.json(
    { success: true as const, data, message },
    init
  );
}

export function apiError(
  message: string,
  code = "INTERNAL_ERROR",
  status = 500,
  details?: unknown
) {
  return NextResponse.json(
    {
      success: false as const,
      message,
      code,
      ...(details ? { details } : {}),
    },
    { status }
  );
}

export function handleRouteError(error: unknown) {
  console.error("[api]", error);
  const message =
    error instanceof Error ? error.message : "Something went wrong";
  return apiError(message);
}

export function assertHttpError(error: unknown) {
  return error instanceof Error ? error : new Error("Unknown error");
}