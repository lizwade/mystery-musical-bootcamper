import express from "express";
import cors from "cors";
const app = express();
const port = 3022;

//Here we list client addresses that are whitelisted to make requests to our server
const corsOptions = {
  origin: ["http://localhost:5173"],
};

const musicians = [
  {
    name: "Beck",
    genre: "alternative",
    bestSong: "Hollow Log",
  },
  {
    name: "Kendrick Lamar",
    genre: "Hip-Hop",
    bestSong: "Savior",
  },
  {
    name: "Kate Bush",
    genre: "Art Pop",
    bestSong: "The Sensual World",
  },
];

const bootcampers = [
  {
    id: 1,
    code: "25q3",
    name: "Kit",
    isFemale: false,
    bandName: "The Forgotten",
    mp3url: "http://something.mp3",
    isSinging: false,
    message: "Hope you like it!",
    moreMusic: "http://bandcamp.com/fab",
    hasConsented: true,
  },
  {
    id: 2,
    code: "6yP0",
    name: "Adam",
    isFemale: false,
    bandName: null,
    mp3url: null,
    isSinging: null,
    message: null,
    moreMusic: null,
    hasConsented: false,
  },
];

app.use(cors(corsOptions));

// API routes
app.get("/api", async (req, res) => {
  res.json(bootcampers);
});

app.listen(port, () => {
  console.log(`We are listening on port ${port}`);
});
