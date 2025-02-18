import React from "react";

// interface Bootcamper {
//   firstName: String;
//   id: Number;
// }

// interface StatementProps {
//   bootcampers: Bootcamper;
// }

function Statement({user} ) {
  //const { firstName, id } = props.bootcampers; 
  return (<>
    <p>
      I'm {user} and I do / don't have an mp3
      of music I've made I can add to the game
    </p>
    <p>My one-time code is
    <input type="text"/>
    <button>Save my response</button> </p>
    </>
  );
}

export default Statement;
