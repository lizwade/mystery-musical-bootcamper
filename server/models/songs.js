import { pool } from "../db/index.js";

export async function fetchSongByBootcamperId(bootcamperId) {
  console.log(
    `in the SQL function attempting to fetch the song by bootcamper ${bootcamperId} `
  );
  const result = await pool.query(
    "SELECT * FROM songs WHERE bootcamper_id = $1",
    [bootcamperId]
  );
  console.log(result.rows[0]);
  return result.rows[0];
}

export async function fetchAllSongs() {
  console.log("in the SQL function for fetching all songs");
  const result = await pool.query("SELECT * FROM songs;");
  console.log(result.rows);
  return result.rows;
}

// the below is hard-coded for now to songId 1 and bandname
export async function updateSongbyId(songId) {
  console.log(
    `in the SQL function attempting to updateSongById with song id ${songId}`
  );
  const result = await pool.query(
    "UPDATE songs SET bandname='Kate Bush' WHERE id=1"
  );
  console.log("finished the UPDATE SQL statement");
  return result;
}
