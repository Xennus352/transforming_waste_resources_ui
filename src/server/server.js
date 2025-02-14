import  express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

let newPostCount = 0; // Store the count of new posts

io.on("connection", (socket) => {
  console.log("User connected");

  // Send the current new post count when user connects
  socket.emit("updatePostCount", newPostCount);

  // Handle new posts
  socket.on("newPost", (post) => {
    console.log("New post received:", post);

    // Increment new post count
    newPostCount++;

    // Broadcast the new post and updated count
    io.emit("newPostNotification", post);
    io.emit("updatePostCount", newPostCount);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Endpoint to receive notifications from PHP
app.post("/notify", (req, res) => {
  const { event, data } = req.body;

  if (event === "newPost") {
    newPostCount++;
    // io.emit("newPostNotification", data);
    io.emit("updatePostCount", newPostCount); // just give the number of count
  }

  res.json({ success: true });
});

server.listen(5000, () => {
  console.log("WebSocket server running on port 5000");
});
