import 'dotenv/config';
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Production-ready logging function
function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit", 
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const requestPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (requestPath.startsWith("/api")) {
      let logLine = `${req.method} ${requestPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Setup static file serving for production
function serveStatic(app: express.Express) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const clientDistPath = path.resolve(__dirname, "public");
  
  // Serve static files from public directory
  app.use(express.static(clientDistPath));
  
  // Fallback to index.html for SPA routing (but not for API routes)
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/")) {
      return next();
    }
    res.sendFile(path.resolve(clientDistPath, "index.html"));
  });
}

// Setup Vite for development only
async function setupViteDevelopment(app: express.Express, server: any) {
  // Dynamic import only in development
  if (process.env.NODE_ENV !== "production") {
    try {
      const { setupVite } = await import("./vite.js");
      await setupVite(app, server);
    } catch (error) {
      log("Vite setup failed, falling back to static serving", "dev");
      serveStatic(app);
    }
  }
}

(async () => {
  try {
    const server = await registerRoutes(app);

    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      
      log(`Error ${status}: ${message}`, "error");
      res.status(status).json({ message });
    });

    // Setup static files or Vite based on environment
    if (process.env.NODE_ENV === "production") {
      log("Setting up production static file serving", "setup");
      serveStatic(app);
    } else {
      log("Setting up Vite development server", "setup");
      await setupViteDevelopment(app, server);
    }

    // Start the server
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`DecoBlu USA server running on port ${port} (${process.env.NODE_ENV || 'development'} mode)`);
    });

  } catch (error) {
    log(`Failed to start server: ${error}`, "error");
    process.exit(1);
  }
})();
