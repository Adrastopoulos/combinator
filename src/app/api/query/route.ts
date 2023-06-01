import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const expr1 = searchParams.get("expr1");
  const expr2 = searchParams.get("expr2");

  if (!expr1 || !expr2) return NextResponse.error();

  const res = await fetch(
    `https://api.wolframalpha.com/v2/query?input=${encodeURIComponent(
      `${expr1} = ${expr2}`
    )}&appid=${process.env.WOLFRAM_APP_ID}&output=json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
