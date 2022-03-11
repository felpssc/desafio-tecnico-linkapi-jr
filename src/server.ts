import "dotenv/config";
import { app } from "./app";
import cors from "cors";
import express from "express";

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});