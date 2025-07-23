import connectToDatabase from "@/app/lib/mongodb";
import Message from "@/app/models/MessageSchema";


// GET MESSAGES
export async function getMessages() {
  await connectToDatabase();
  return await Message.find({}).lean().sort({ createdAt: -1 });
};
