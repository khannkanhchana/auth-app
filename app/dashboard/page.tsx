import { getAdminData } from "@/lib/admin-auth";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("better-auth.session_data");
  if (!authToken) {
    redirect("/login");
  }
   console.log("authToken", authToken)


  const token = authToken?.value 

  const response = await getAdminData(token);

  // if response is not ok, redirect to login
  if (!authToken) {
    redirect("/login");
  }

 

  // is user is not admin, redirect to login
  if (response.role !== "admin") {
    redirect("/login");
  }


  return (
    <main>
      <h1>Welcome: {response.name}</h1>
      <h2>Role: {response.role}</h2>
    </main>
  );
}
