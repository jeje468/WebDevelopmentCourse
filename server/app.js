import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import * as communityController from "./controllers/communityController.js";
import * as postController from "./controllers/postController.js";
import * as commentController from "./controllers/commentController.js";
import * as authController from "./controllers/authController.js";
import * as middlewares from "./middlewares.js";

const app = new Hono();

app.use("/*", cors());

app.post("/api/communities", middlewares.authenticate, communityController.create);
app.get("/api/communities", communityController.findAll);
app.get("/api/communities/:communityId", communityController.findById);
app.delete("/api/communities/:communityId", middlewares.authenticate, communityController.deleteById);

app.post("/api/communities/:communityId/posts", postController.create);
app.get("/api/communities/:communityId/posts", postController.findAll);
app.get("/api/communities/:communityId/posts/:postId", postController.findById);
app.delete("/api/communities/:communityId/posts/:postId", postController.deleteById);

app.post("/api/communities/:communityId/posts/:postId/comments", commentController.create);
app.get("/api/communities/:communityId/posts/:postId/comments", commentController.findAll);
app.delete("/api/communities/:communityId/posts/:postId/comments/:commentId", commentController.deleteById);

app.post("/api/auth/register", authController.register);
app.post("/api/auth/login", authController.login);

export default app;