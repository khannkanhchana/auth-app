
import { loginRequest } from "./type/login";

export async function loginAdmin(loginData: loginRequest) {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    if(!res.ok){
        throw Error("Failed to login")
    }
    const data = await res.json()
    return data;
}


//  Get
export async function getAdminData(token: string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/profile`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await res.json()
    return data;
}

    