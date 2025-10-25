import * as commentRepository from "../repositories/commentRepository.js";

const create = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  const postId = Number(c.req.param("postId"));
  
  if (!Number.isInteger(communityId) || !Number.isInteger(postId)) {
    return c.json({ error: "Invalid community ID or post ID" }, 400);
  }

  const comment = await c.req.json();
  if (!comment.content) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const newComment = await commentRepository.create(communityId, postId, comment);
  return c.json(newComment, 201);
};

const findAll = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  const postId = Number(c.req.param("postId"));
  
  if (!Number.isInteger(communityId) || !Number.isInteger(postId)) {
    return c.json({ error: "Invalid community ID or post ID" }, 400);
  }

  const comments = await commentRepository.findAll(communityId, postId);
  return c.json(comments);
};

const deleteById = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  const postId = Number(c.req.param("postId"));
  const commentId = Number(c.req.param("commentId"));
  
  if (!Number.isInteger(communityId) || !Number.isInteger(postId) || !Number.isInteger(commentId)) {
    return c.json({ error: "Invalid community ID, post ID, or comment ID" }, 400);
  }

  const deletedComment = await commentRepository.deleteById(communityId, postId, commentId);
  
  if (!deletedComment) {
    return c.json({ error: "Comment not found" }, 404);
  }

  return c.json(deletedComment);
};

export { create, findAll, deleteById };
