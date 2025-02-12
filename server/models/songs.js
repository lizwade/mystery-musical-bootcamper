import { pool } from "../db/index.js";

export async function READsongByBootcamperId(bootcamperId) {
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

export async function READallSongs() {
  console.log("in the SQL function for fetching all songs");
  const result = await pool.query("SELECT * FROM songs;");
  console.log(result.rows);
  return result.rows;
}

//this function is broken because of variable names, but not currently using anyway
export async function UPDATEsongbyId(
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

export async function CREATEsong(
  bootcamperId,
  bandName,
  songName,
  mp3url,
  isSinging,
  message,
  moreMusic,
  hasConsented
) {
  console.log(
    `in the SQL function attempting to CREATE song for bootcamper ${bootcamperId}`
  );

  const result = await pool.query(
    `INSERT INTO songs (bootcamper_id, band_name, song_name, mp3_url, is_singing, message, more_music, has_consented)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [
      bootcamperId,
      bandName,
      songName,
      mp3url,
      isSinging,
      message,
      moreMusic,
      hasConsented,
    ]
  );
  console.log("finished the INSERT SQL statement");
  return result.rows;
}
