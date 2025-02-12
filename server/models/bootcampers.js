import { pool } from "../db/index.js";

export async function READallBootcampers() {
  console.log("in the SQL function");
  const result = await pool.query("SELECT * FROM bootcampers;");
  console.log(result.rows);
  return result.rows;
}
