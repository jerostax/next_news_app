import { NextResponse } from "next/server";

export function middleware(request) {
  // Middleware logic can be added here if needed
  return NextResponse.next();
}
