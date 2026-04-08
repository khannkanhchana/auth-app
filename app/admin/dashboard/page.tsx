import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function SocialDashboard(){
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // dont login
    if(!session){
        redirect("/login")
    }
    console.log("session", session)
    return(
         <main>
            <h1>Welcome, {session?.user?.name}</h1>
         </main>
    )
}
