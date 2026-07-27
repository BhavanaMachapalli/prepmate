import pool from "../config/db.js";

export const createUser = async (fullName, email, password) => {
  const query = `
    INSERT INTO users (full_name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const values = [fullName, email, password];

  const result = await pool.query(query, values);

  return result.rows[0];
};
export const findUserByEmail = async (email) => {
  const query = `
    SELECT * FROM users
    WHERE email = $1;
  `;

  const result = await pool.query(query, [email]);

  return result.rows[0];
};