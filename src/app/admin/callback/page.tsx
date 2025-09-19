import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import supabaseServer from "@/app/client/SupabaseServer";

export default async function CallbackPage() {
  // Await cookies() because it returns a promise
  const cookieStore = await cookies();
  const token = cookieStore.get("sb-access-token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  const {
    data: { user },
    error: userError,
  } = await supabaseServer.auth.getUser(token);

  if (userError || !user) redirect("/admin/login");

  const { data: admin } = await supabaseServer
    .from("admins")
    .select("email")
    .eq("email", user.email)
    .single();

  if (!admin) {
    await supabaseServer.auth.signOut();
    redirect("/admin/login");
  }

  // Admin validated
  redirect("/admin");
}
