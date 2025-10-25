import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import * as communityController from "./controllers/communityController.js";
import * as postController from "./controllers/postController.js";
import * as commentController from "./controllers/commentController.js";

const app = new Hono();

app.use("/*", cors());

app.post("/api/communities", communityController.create);
app.get("/api/communities", communityController.findAll);
app.get("/api/communities/:communityId", communityController.findById);
app.delete("/api/communities/:communityId", communityController.deleteById);

app.post("/api/communities/:communityId/posts", postController.create);
app.get("/api/communities/:communityId/posts", postController.findAll);
app.get("/api/communities/:communityId/posts/:postId", postController.findById);
app.delete("/api/communities/:communityId/posts/:postId", postController.deleteById);

app.post("/api/communities/:communityId/posts/:postId/comments", commentController.create);
app.get("/api/communities/:communityId/posts/:postId/comments", commentController.findAll);
app.delete("/api/communities/:communityId/posts/:postId/comments/:commentId", commentController.deleteById);

export default app;