import express from "express";
import cors from "cors";

//not sure if this is the right place to import this. I'm very confused about file structure and models vs controllers vs API
import { fetchAllBootcampers } from "./models/bootcampers.js";
import {
  fetchAllSongs,
  fetchSongByBootcamperId,
  updateSongbyId,
} from "./models/songs.js";

const app = express();
const PORT = process.env.PORT;

//Here we list client addresses that are whitelisted to make requests to our server
const corsOptions = {
  origin: ["http://localhost:5173"],
};

//dummy data, to be deleted once we are successfully retrieving from database
// const bootcampers = [
//   {
//     id: 1,
//     code: "25q3",
//     name: "Kit",
//     isFemale: false,
//     bandName: "The Forgotten",
//     mp3url: "http://something.mp3",
//     isSinging: false,
//     message: "Hope you like it!",
//     moreMusic: "http://bandcamp.com/fab",
//     hasConsented: true,
//   },
//   {
//     id: 2,
//     code: "6yP0",
//     name: "Adam",
//     isFemale: false,
//     bandName: null,
//     mp3url: null,
//     isSinging: null,
//     message: null,
//     moreMusic: null,
//     hasConsented: false,
//   },
// ];

app.use(cors(corsOptions));
app.use(express.json()); //not sure if we need this but the SoC has this line in...

// API routes
// app.get("/api", async (req, res) => {
//   //res.json(bootcampers); //this causes the hardcoded data above to be served in the browser at http://localhost:3018/api
//   //can we just swap out the variable above and swap in the function fetchAllBootcampers??
//   bootcampers = res.json(fetchAllBootcampers());
// });

app.get("/bootcampers", getBootcampers);
app.get("/songs/:id", getSongByBootcamperId);
app.get("/songs", getSongs);
//app.post("/songs", createSong);
app.put("/songs/:id", modifySongbyId);

export async function getBootcampers(req, res) {
  try {
    const bootcampers = await fetchAllBootcampers();
    res.status(200).json({ status: "success", data: bootcampers });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getSongByBootcamperId(req, res) {
  try {
    const song = await fetchSongByBootcamperId(parseInt(req.params.id));
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
    const songs = await fetchAllSongs();
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

    const song = await updateSongbyId(
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

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
