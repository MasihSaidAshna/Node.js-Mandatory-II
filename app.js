import express from "express";
const app = express();

app.use(express.json());



const PORT = proceess.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));