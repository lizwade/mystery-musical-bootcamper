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
        name        VARCHAR(20) NOT NULL,
        isFemale    BOOLEAN,
        code        uuid
      );
    `);

    // Create the songs table with a foreign key to the bootcampers table
    await pool.query(`
      CREATE TABLE songs (
        id              SERIAL PRIMARY KEY,
        bootcamper_id   int references bootcampers(id),
        bandName        varchar(80),
        songName        varchar(80),
        mp3url          varchar(255), --need to use regex to force this into url to an mp3?
        isSinging       boolean,
        message         varchar(255),
        moreMusic       varchar(255), --regex for url?
        hasConsented    boolean
        
      );
    `);

    // Seed the authors table
    await pool.query(`
      INSERT INTO bootcampers (name, isFemale)
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
            bandName,
            songName, 
            mp3url,
            isSinging,
            message,
            moreMusic,
            hasConsented,
            bootcamper_id
            )
      VALUES 
        ('Messy Play', 'The Wetness', 'https://messyplay.bandcamp.com/track/the-wetness', TRUE, null, 'https://messyplay.bandcamp.com/album/messy-play', TRUE, 17 ),
        ('The Made-up Band', 'You Dont Exist', 'https://nowhere.com/youdontexist.mp3', FALSE, 'I played guitar on this. Hear the duff note at the end!', 'https://www.madeup.com', TRUE, 11);
        
        
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
