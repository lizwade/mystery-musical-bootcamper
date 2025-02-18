import { pool } from "../db/index.js";

export async function READallBootcampers() {
  console.log("in the SQL function");
  const result = await pool.query("SELECT first_name FROM bootcampers;");
  console.log(result.rows);

  //const arr = result.rows.map((x) => x.first_name);

  //console.log(arr);

  return result.rows;
}
