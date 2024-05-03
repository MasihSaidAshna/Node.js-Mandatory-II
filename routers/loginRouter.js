import { Router } from "express";
import { findUser } from "../database/users";

const router = Router();

router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {

        if (!email || !password) {
            return res.status(400).json({ message: "Both email and password are required"});
        }

        // Find the user by email and password
        const user = await findUser(email, password);

        res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(401).json({ message: "Invalid credentials" });
    }
});

export default router;
