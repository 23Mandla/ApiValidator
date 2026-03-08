import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { email, endpoint } = await req.json();
    const beginsWithHttp = true;

    if(!endpoint.startsWith("http://") && !endpoint.startsWith("https://")) {
      return NextResponse.json(
        {
          status: 400,
          message: "Invalid endpoint URL. It should start with http:// or https://",
        },
        { status: 400 }
      );
    }

    const apiResponse = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "data": "example" }),
      }
    );

    const result = await apiResponse.json();
    console.log("API response:", { status: apiResponse.status, body: result });

    if (!apiResponse.ok) {
        return NextResponse.json(
            {
                status: apiResponse.status,
                message: `Endpoint returned status ${apiResponse.status}`,
            }
        );
    }

    const response = NextResponse.json(
       { 
        status: apiResponse.status,
        beginsWithHttp,
        message: "End point response",
        body: result
        }
    );

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}