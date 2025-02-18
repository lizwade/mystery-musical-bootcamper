import React from "react";

interface Bootcamper {
  firstName: String;
  id: Number;
}

interface StatementProps {
  bootcampers: Bootcamper;
}

function Statement(props: StatementProps ) {
  const { firstName, id } = props.bootcampers; 
  return (
    <p>
      I'm {firstName} and I do / don't have am mp3 of music I've made that I'm
      happy to upload for the game
    </p>
  );
}

export default Statement;
