import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dns from "dns";
import path from "path";
import { fileURLToPath } from "url";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://servicesjmseptember_db_user:HwempoyKbcSbf00j@cluster0.yt5pl13.mongodb.net/aptech?retryWrites=true&w=majority", {
    serverSelectionTimeoutMS: 60000,
})
    .then(() => console.log("MongoDB connected Successfully"))
    .catch((err) => console.error("Connection failed:", err.message));

const contactSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: String,
    email: String,
    message: String,
}, { timestamps: true });

const Contact = mongoose.model("contact", contactSchema, "contact");

app.post("/contact", async (req, res) => {
    try {
        const entry = await Contact.create(req.body);
        res.json({ message: "Message sent successfully", entry });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/contact", async (req, res) => {
    try {
        const entries = await Contact.find().sort({ createdAt: -1 });
        res.json(entries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/contact/:id", async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../")));

// Catch-all route for frontend (Express 5 compatible)
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));