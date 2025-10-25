import * as postRepository from "../repositories/postRepository.js";

const create = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const post = await c.req.json();

  if (!post.title || !post.content) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const newPost = await postRepository.create(communityId, post);
  return c.json(newPost, 201);
};

const findAll = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const posts = await postRepository.findAll(communityId);
  return c.json(posts);
};

const findById = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const postId = Number(c.req.param("postId"));
  if (!Number.isInteger(postId)) {
    return c.json({ error: "Invalid post id" }, 400);
  }

  const post = await postRepository.findById(communityId, postId);

  if (!post) {
    return c.json({ error: "Post not found" }, 404);
  }

  return c.json(post);
};


const deleteById = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const postId = Number(c.req.param("postId"));
  if (!Number.isInteger(postId)) {
    return c.json({ error: "Invalid post id" }, 400);
  }

  const deletedPost = await postRepository.deleteById(communityId, postId);

  if (!deletedPost) {
    return c.json({ error: "Post not found" }, 404);
  }

  return c.json(deletedPost);
};

export { create, findAll, findById, deleteById };