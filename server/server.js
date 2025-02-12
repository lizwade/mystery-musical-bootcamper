import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//These CRUD methods with CRUD names are defined elsewhere
import { READallBootcampers } from "./models/bootcampers.js";
import {
  READallSongs,
  READsongByBootcamperId,
  UPDATEsongbyId,
  CREATEsong,
} from "./models/songs.js";

const app = express();
const PORT = process.env.PORT;

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:5173"], // client addresses that are whitelisted to make requests to our server
};

app.use(cors(corsOptions));
app.use(express.json()); //not sure if we need this but the SoC has this line in...

//set up the routes with API methods, and then define those methods below
app.get("/bootcampers", getBootcampers); //front end doesn't need to GET this
app.get("/songs/:id", getSongByBootcamperId); //front end doesn't need to GET this
app.get("/songs", getSongs); //front end doesn't need to GET this
app.post("/submit_here", (req, res) => {
  handleSubmitSong(req, res, 7); //currently hardcoded to submit a song for a specific bootcamper - this can only succeed once
});
app.put("/songs/:id", modifySongbyId);

export async function getBootcampers(req, res) {
  try {
    const bootcampers = await READallBootcampers();
    res.status(200).json({ status: "success", data: bootcampers });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getSongByBootcamperId(req, res) {
  try {
    const song = await READsongByBootcamperId(parseInt(req.params.id));
    if (!song) {
      res
        .status(404)
        //.json({ status: "error", message: "No song by that bootcamper" });
        .json({ status: "not found", data: null });
    } else {
      res.status(200).json({ status: "success", data: song });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getSongs(req, res) {
  try {
    const songs = await READallSongs();
    res.status(200).json({ status: "success", data: songs });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function modifySongbyId(req, res) {
  try {
    const song_id = parseInt(req.params.id);
    const {
      band_name,
      song_name,
      mp3_url,
      is_singing,
      message,
      more_music,
      has_consented,
    } = req.body;

    console.log(req.body);

    const song = await UPDATEsongbyId(
      song_id,
      band_name,
      song_name,
      mp3_url,
      is_singing,
      message,
      more_music,
      has_consented
    );
    res.status(200).json({ status: "success", payload: song });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

//takes in a bootcamper_id and the info from form to create a new record
export async function handleSubmitSong(req, res, bootcamperId) {
  try {
    const {
      bandName,
      songName,
      mp3url,
      isSinging,
      message,
      moreMusic,
      hasConsented,
    } = req.body;

    console.log(req.body);

    const song = await CREATEsong(
      bootcamperId,
      bandName,
      songName,
      mp3url,
      isSinging,
      message,
      moreMusic,
      hasConsented
    );
    res.status(200).json({ status: "success", payload: song });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
