import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Authorization code missing" }, { status: 400 });
  }

  try {
    const tokenResponse = await axios.get(
      `https://graph.facebook.com/v12.0/oauth/access_token`,
      {
        params: {
          client_id: process.env.FACEBOOK_APP_ID,
          client_secret: process.env.FACEBOOK_APP_SECRET,
          redirect_uri: process.env.FACEBOOK_REDIRECT_URI,
          code,
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    return NextResponse.json({ success: true, accessToken });
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    return NextResponse.json({ error: "Failed to authenticate" }, { status: 500 });
  }
}