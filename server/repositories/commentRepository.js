import postgres from "postgres";

const sql = postgres();

const create = async (communityId, postId, comment, userId) => {
  const result = await sql`INSERT INTO posts
    (community_id, content, parent_post_id, created_by)
    VALUES (${communityId}, ${comment.content}, ${postId}, ${userId})
    RETURNING *;`;

  return result[0];
};

const findAll = async (communityId, postId) => {
  return await sql`SELECT * FROM posts
    WHERE community_id = ${communityId} AND parent_post_id = ${postId}
    ORDER BY created_at;`;
};

const deleteById = async (communityId, postId, commentId, userId) => {
  const result = await sql`DELETE FROM posts
    WHERE community_id = ${communityId} AND parent_post_id = ${postId} AND id = ${commentId} AND created_by = ${userId}
    RETURNING *;
  `;

  return result[0];
};

export { create, findAll, deleteById };
