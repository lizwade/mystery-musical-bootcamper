import { useState, useEffect } from "react";
//import "./App.css";
import Submission from "./components/Submission/Submission";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  //The data needs to be fetched and held (as state?) at this level
  //So it can be passed either to Submission for amendment
  //Or Game for use in playing the game
  let [bootcampers, setBootcampers] = useState(null);

  //Here is the one from the video tutorial
  //TODO: Work out how to store / hide PORT. Should it be read here from the .env file? But that's on the server side.
  //TODO: Consider refactoring to work with fetch() instead of using axios library
  const readBootcampersNamesIntoState = async () => {
    const PORT = 3018;
    const address = `http://localhost:${PORT}/bootcampers`;
    const response = await axios.get(address);
    console.log(
      "hello from inside the App.jsx readBootcampersIntoState function"
    );
    console.log(response.data);
    setBootcampers(response.data);
  };

  useEffect(() => {
    readBootcampersNamesIntoState();
  }, []);

  // function updateDatabase(newData) {
  //   setBootcampers(newData);
  // }

  if (bootcampers === null) {
    console.log("no data in bootcampers yet...");
    return <h2>loading!</h2>;
  }

  return (
    <>
      <Header id="header"></Header>
      <Submission
        bootcampers={bootcampers.data}
        //onSubmit={updateDatabase}
      ></Submission>
    </>
  );
}

export default App;
