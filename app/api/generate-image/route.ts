import { NextResponse } from "next/server"
import { experimental_generateImage as generateImage } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const { image } = await generateImage({
      model: openai.image("dall-e-3"),
      prompt,
      size: "1024x1024",
    })

    return NextResponse.json({
      imageData: image.base64,
      success: true,
    })
  } catch (error) {
    console.error("Error generating image:", error)
    return NextResponse.json(
      { error: "Failed to generate image", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

