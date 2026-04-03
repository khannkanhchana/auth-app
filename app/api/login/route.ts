export async function POST(req:NextRequest) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
        method: "POST",
        header: {
        "Content-Type" : "application/json"
    }


    })
    if(!res.ok){
        return NextResponse.json({message: "Unauthorized"})
    }
    
    
}