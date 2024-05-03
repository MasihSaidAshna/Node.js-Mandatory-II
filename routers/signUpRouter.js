import { Router } from "express";
import { createUser } from "../database/users";

const router = Router();

router.post("/api/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        await createUser(username, email, password);

        res.status(201).json({ message: "User signed up successfully" });
    } catch (error) {
        // Error occurred while creating user
        console.error("Error signing up user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
