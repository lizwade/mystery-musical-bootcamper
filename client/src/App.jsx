import { useState, useEffect } from "react";
import "./App.css";
import Submission from "./components/Submission/Submission";
import Header from "./components/Header/Header";
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
  //TODO: Work out how to store / hide PORT. Should it be read here from the .env file? But that's on the server side.
  //TODO: Consider refactoring to work with fetch() instead of using axios library
  const fetchAPI = async () => {
    const PORT = 3018;
    const address = `http://localhost:${PORT}/api`;
    const response = await axios.get(address);
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

  //THIS IS THE CODE SNIPPET THAT MADE IT ALL WORK
  //AND SOLVED THE ASYNC PROBLEM THAT WAS MAKING ALL THE CHILD COMPONENTS
  //FAIL TO RENDER AND CRASH THE PROGRAM
  //IT TOOK ME SO MANY HOURS TO WORK OUT WHAT I NEEDED TO DO
  if (bootcampers === null) {
    console.log("no data in bootcampers yet...");
    return <h2>loading!</h2>;
  }

  return (
    <>
      <Header id="header"></Header>
      <Submission
        bootcampers={bootcampers}
        //onSubmit={updateDatabase}
      ></Submission>
    </>
  );
}

export default App;
