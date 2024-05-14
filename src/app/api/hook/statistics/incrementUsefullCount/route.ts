import { incrementHookUsefullCount } from "@/server/db/queries";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const hookId = searchParams.get("hookId");

  try {
    if (!hookId) {
      return new Response("Missing hook id parameter", { status: 400 });
    }

    await incrementHookUsefullCount(parseInt(hookId));
  } catch (error) {
    console.error(error);
    return new Response("Failed to increment usefull count for hook: " + hookId, { status: 500 });
  }

  return new Response("", { status: 200 });
}
