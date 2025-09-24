import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download route
  app.get("/api/resume", (req, res) => {
    const resumePath = "attached_assets/Ramiro_Pinedo_Resume.pdf";
    res.download(resumePath, "Ramiro_Pinedo_Resume.pdf", (err) => {
      if (err) {
        console.error("Resume download error:", err);
        res.status(404).send("Resume not found");
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
