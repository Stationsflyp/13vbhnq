import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json({ error: "Código de autorización requerido" }, { status: 400 })
    }

    // Configuración para Vercel con logging para debug
    const clientId = process.env.DISCORD_CLIENT_ID || "1373548029008805950"
    const clientSecret = process.env.DISCORD_CLIENT_SECRET
    const redirectUri = process.env.DISCORD_REDIRECT_URI || "https://oxcyshopsecuritybb.vercel.app/auth/callback"

    // Debug logging (temporal)
    console.log("=== DEBUG TOKEN EXCHANGE ===")
    console.log("Client ID:", clientId)
    console.log("Client Secret exists:", !!clientSecret)
    console.log("Redirect URI:", redirectUri)
    console.log("Code received:", code.substring(0, 10) + "...")

    if (!clientSecret) {
      console.error("❌ DISCORD_CLIENT_SECRET no está configurado")
      return NextResponse.json(
        {
          error: "Client secret no configurado",
          debug: "DISCORD_CLIENT_SECRET environment variable is missing",
        },
        { status: 500 },
      )
    }

    // Intercambiar código por token de acceso
    const tokenParams = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
    })

    console.log("Token request params:", tokenParams.toString())

    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: tokenParams,
    })

    console.log("Discord response status:", tokenResponse.status)

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error("❌ Discord API Error:", errorData)

      // Parsear el error de Discord si es JSON
      let discordError = errorData
      try {
        const parsedError = JSON.parse(errorData)
        discordError = parsedError.error_description || parsedError.error || errorData
      } catch (e) {
        // Si no es JSON, usar el texto tal como está
      }

      return NextResponse.json(
        {
          error: "Error al intercambiar código por token",
          discord_error: discordError,
          status: tokenResponse.status,
        },
        { status: 400 },
      )
    }

    const tokenData = await tokenResponse.json()
    console.log("✅ Token exchange successful")

    return NextResponse.json({
      access_token: tokenData.access_token,
      token_type: tokenData.token_type,
      expires_in: tokenData.expires_in,
    })
  } catch (error) {
    console.error("❌ Unexpected error in token exchange:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
