import { useState, useEffect } from "react";
import "./App.css";
import Submission from "./components/Submission/Submission";
import axios from "axios";

function App() {
  //The data needs to be fetched and held (as state?) at this level
  //So it can be passed either to Submission for amendment
  //Or Game for use in playing the game

  //initialise state with an empty array
  let [bootcampers, setBootcampers] = useState(null);

  //define a function to fetch the data from the API
  //Here is the old version similar to SoC way, except there we called a function we had defined eg getAstronauts
  // const fetchdata = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3022/api");
  //     const data = await response.json();
  //     console.log(data);
  //     setBootcampers(data);
  //   } catch (error) {
  //     console.log(`Error fetching data: ${error} `);
  //   }
  // };

  //Here is the one from the video tutorial
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3022/api");
    console.log("hello from inside the fetchAPI function");
    console.log(response.data);
    setBootcampers(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  // function updateDatabase(newData) {
  //   setBootcampers(newData);
  // }

  //Welcome!
  //Message to explain the game and the purpose of this form
  //
  //Who are you?
  //DROP DOWN MENU, data from bootcampers.name
  //Potential issues:
  //  People pretending to be someone they're not (could selecting the name require a secret code, matched with each name, and dm it to each bootcamper?)
  //  People submitting more than once (could have a warning that a resubmission will overwrite. But if I'm using codes, could have a PUT endpoint to update?)
  //
  if (bootcampers === null) {
    console.log("no data in bootcampers yet...");
    return <h2>loading!</h2>;
  }

  return (
    //commenting this out just to try and get the data working!
    //<h2>ready</h2>
    <Submission
      bootcampers={bootcampers}
      //onSubmit={updateDatabase}
    ></Submission>
  );
}

export default App;
