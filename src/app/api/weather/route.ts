import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const unit = searchParams.get("unit") === "fahrenheit" ? "fahrenheit" : "celsius"

  // Mocked temperature for preview
  const baseC = 27
  const temperature = unit === "fahrenheit" ? Math.round((baseC * 9) / 5 + 32) : baseC

  return NextResponse.json({ temperature })
}
