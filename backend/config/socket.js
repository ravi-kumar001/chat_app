const { Server } = require("socket.io");

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*", // Allow all origins (for development)
            methods: ["GET", "POST"], // Allowed request methods
        },
    });

    io.on("connection", (socket) => {
        console.log("A user connected");

        socket.on("joinChat", (targetUserId) => {
            const roomId = `chat_${targetUserId}`;
            socket.join(roomId); // ✅ Now the user joins the room
            console.log(`User joined room: ${roomId}`);
        });

        socket.on("sendMessage", ({ text, userId }) => {
            const roomId = `chat_${userId}`;
            console.log(`Sending message to room: ${roomId}`);
            io.to(roomId).emit("messageReceived", { text }); // ✅ Now the message will be received
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
};

module.exports = { initializeSocket };
