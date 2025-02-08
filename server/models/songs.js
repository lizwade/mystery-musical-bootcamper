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

export async function updateSongbyId(
  song_id,
  band_name,
  song_name,
  mp3_url,
  is_singing,
  message,
  more_music,
  has_consented
) {
  console.log(
    `in the SQL function attempting to updateSongById with song id ${song_id}`
  );

  const result = await pool.query(
    "UPDATE songs SET band_name=$2, song_name=$3, mp3_url=$4, is_singing=$5, message=$6, more_music=$7, has_consented=$8 WHERE id=$1 RETURNING *",
    [
      song_id,
      band_name,
      song_name,
      mp3_url,
      is_singing,
      message,
      more_music,
      has_consented,
    ]
  );
  console.log("finished the UPDATE SQL statement");
  return result.rows;
}
