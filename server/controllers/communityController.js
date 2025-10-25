import * as communityRepository from "../repositories/communityRepository.js";

const create = async (c) => {
  const community = await c.req.json();
  if (!community.name ||
        !community.description
  ) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const newCommunity = await communityRepository.create(community);
  return c.json(newCommunity, 201);
};

const findAll = async (c) => {
  const communities = await communityRepository.findAll();
  return c.json(communities);
};

const findById = async (c) => {
  const id = Number(c.req.param("communityId"));
  if (!Number.isInteger(id)) {
    return c.json({ error: "Invalid id" }, 400);
  }

  const community = await communityRepository.findById(id);

  if (!community) {
    return c.json({ error: "Community not found" }, 404);
  }

  return c.json(community);
};

const deleteById = async (c) => {
  const id = Number(c.req.param("communityId"));
  if (!Number.isInteger(id)) {
    return c.json({ error: "Invalid id" }, 400);
  }

  const deletedCommunity = await communityRepository.deleteById(id);

  if (!deletedCommunity) {
    return c.json({ error: "Community not found" }, 404);
  }

  return c.json(deletedCommunity);
};

export { create, findAll, findById, deleteById };