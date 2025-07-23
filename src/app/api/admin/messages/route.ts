import { getMessages } from "./actions";


// Export POST HTTP method handler
export async function GET(request: Request) {
  try {
    const password = request.headers.get('x-admin-password');
    const validPassword = process.env.ADMIN_PASSWORD;

    if(password !== validPassword){
      return new Response(JSON.stringify({ error: "Unauthorized "}), { status: 401 });
    }
    const result = await getMessages();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}