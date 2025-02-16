// THIS CODE ADAPTED FROM SCHOOLOFCODE WEEK-5-CONNECTING-NODE-AND-POSTGRES
//
import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS bootcampers CASCADE;
      DROP TABLE IF EXISTS songs CASCADE;
    `);

    // Create the bootcampers table
    await pool.query(`
      CREATE TABLE bootcampers (
        id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name        VARCHAR(20) NOT NULL,
        is_female   BOOLEAN,
        code        uuid
      );
    `);

    // Create the songs table with a foreign key to the bootcampers table
    await pool.query(`
      CREATE TABLE songs (
        id               int generated always as identity PRIMARY KEY,
        bootcamper_id    int references bootcampers(id),
        band_name        varchar(80),
        song_name        varchar(80),
        mp3_url          varchar(255), --need to use regex to force this into url to an mp3?
        is_Singing       boolean,
        message          varchar(255),
        more_music       varchar(255), --regex for url?
        has_consented    boolean
        
      );
    `);

    // Seed the authors table
    await pool.query(`
      INSERT INTO bootcampers (first_name, is_female)
      VALUES 
        ('Adam', FALSE),
        ('Jacob', FALSE),
        ('Ashton', FALSE),
        ('Alistair', FALSE),
        ('Conner', FALSE),
        ('Kim', TRUE),
        ('Chris', FALSE),
        ('Jonathan', FALSE),
        ('Caitlin', TRUE),
        ('Fergus', FALSE),
        ('Nasrin', TRUE),
        ('Carmen', TRUE),
        ('Joe', FALSE),
        ('Owen', FALSE),
        ('Samantha', TRUE),
        ('Christopher', FALSE),
        ('Liz', TRUE),
        ('Sami', FALSE),
        ('Danielle', TRUE),
        ('Nicholas', FALSE),
        ('Sergio', FALSE),
        ('David', FALSE),
        ('Grace', TRUE),
        ('Tim', FALSE),
        ('Giuseppe', FALSE),
        ('Louis', FALSE),
        ('Sumeya', TRUE),
        ('Hannah', TRUE),
        ('Hope', TRUE),
        ('Shanti', TRUE),
        ('Holly', TRUE),
        ('Luke', FALSE),
        ('Zsolt', FALSE),
        ('Jermaine', FALSE),
        ('Monika', TRUE),
        ('Olivia', TRUE),
        ('Kit', FALSE),
        ('Mitchell', FALSE),
        ('Sarah', TRUE),
        ('Madeleine', TRUE),
        ('Sam', FALSE);
    `);

    // Seed the books table
    await pool.query(`
    

      INSERT INTO songs (
            bootcamper_id,
            band_name,
            song_name, 
            mp3_url,
            is_singing,
            message,
            more_music,
            has_consented
            )
      VALUES 
        (17, 'Messy Play', 'The Wetness', 'https://messyplay.bandcamp.com/track/the-wetness', TRUE, null, 'https://messyplay.bandcamp.com/album/messy-play', TRUE),
        (11, 'The Made-up Band', 'You Dont Exist', 'https://nowhere.com/youdontexist.mp3', FALSE, 'I played guitar on this. Hear the duff note at the end!', 'https://www.madeup.com', TRUE);
        
        
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
