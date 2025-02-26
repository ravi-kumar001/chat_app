import { Send } from "lucide-react";
import { useState } from "react";

interface Message {
    id: number;
    text: string;
    sender: 'me' | 'other'
}

const Chat = () => {

    const [messages, setMessages] = useState<Message[]>([{ id: 1, text: "Hello!", sender: "other" },
    { id: 2, text: "Hi, how are you?", sender: "me" },])
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col w-80 h-96 bg-white p-4 rounded-lg shadow-md">
                <div className="flex-1 overflow-y-auto p-2">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`mb-2 p-2 rounded-lg max-w-xs ${msg.sender === "me" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-200"
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="mt-2 flex items-center gap-2">
                    <input
                        type="text"
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 border rounded-lg"
                        placeholder="Type a message..."
                    />
                    <button
                        // onClick={sendMessage}
                        className="bg-blue-500 text-white p-2 rounded-lg flex items-center"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;