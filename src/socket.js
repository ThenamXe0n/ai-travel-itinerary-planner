import { io } from "socket.io-client";


export const socket = io("http://localhost:8080");
const userId =localStorage.getItem("user");  // Unique ID from your database

// Register user with the server
socket.emit('register', userId);
