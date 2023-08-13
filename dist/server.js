import { Server } from "socket.io";
import { config } from "dotenv";
config();
const io = new Server(5174, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
});
io.on("connection", (socket) => {
    console.log("connected");
    socket.on("send-changes", async (value) => {
        try {
            socket.broadcast.emit("receive-changes", value);
        }
        catch (error) {
            console.log(error);
        }
    });
});
//# sourceMappingURL=server.js.map