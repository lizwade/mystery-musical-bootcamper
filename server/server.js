import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT;

//Here we list client addresses that are whitelisted to make requests to our server
const corsOptions = {
  origin: ["http://localhost:5173"],
};

//dummy data, to be deleted once we are successfully retrieving from database
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
  res.json(bootcampers); //currently causes the hardcoded data above to be served in the browser at http://localhost:3018/api
});

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
