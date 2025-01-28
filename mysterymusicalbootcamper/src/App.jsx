//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import Submission from "./components/Submission/Submission";

function App() {
  //The data needs to be held / fetched at this level
  //So it can be passed either to Submission for amendment
  //Or Game for use in playing the game
  //For now, let's hard code it in App
  const data = [
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

  const [bootcampers, setBootcampers] = useState(data);

  function updateDatabase(newData) {
    setBootcampers(newData);
  }

  //Welcome!
  //Message to explain the game and the purpose of this form
  //
  //Who are you?
  //DROP DOWN MENU, data from bootcampers.name
  //Potential issues:
  //  People pretending to be someone they're not (could selecting the name require a secret code, matched with each name, and dm it to each bootcamper?)
  //  People submitting more than once (could have a warning that a resubmission will overwrite. But if I'm using codes, could have a PUT endpoint to update?)
  //

  return (
    <Submission
      bootcampers={bootcampers}
      onSubmit={updateDatabase}
    ></Submission>
  );
}

export default App;
