import { NextResponse } from "next/server";

// This middleware is used to handle requests and can be extended for additional functionality
// Currently, it does not modify the request or response but serves as a placeholder for future middleware logic

export function middleware(request) {
  // Middleware logic can be added here if needed
  return NextResponse.next();
}
