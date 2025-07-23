import connectToDatabase from "@/app/lib/mongodb";
import Message, { IMessage } from "@/app/models/MessageSchema";
import { saveMessage } from "./actions";

// Export POST HTTP method handler
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await saveMessage(data);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}