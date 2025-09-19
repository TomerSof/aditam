import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import supabase from "./app/client/SupabaseServer";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  console.log("Middleware hit:", req.url);

  // Skip middleware for login page
  if (!pathname.startsWith("/admin") || pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Read the Supabase access token from the cookie
  const token = req.cookies.get("sb-access-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  console.log("Token:", token);

  // Use service role key to verify user
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (!user || error) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Check if user is admin
  const { data: admin } = await supabase
    .from("admins")
    .select("email")
    .eq("email", user.email)
    .single();

  if (!admin) {
    // Not an admin: redirect
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Admin allowed
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
