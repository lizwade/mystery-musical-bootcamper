import React, {useState} from "react";

// interface PianoDropdownProps {
//   names: string[];
// }

function PianoDropdown({bootcampers, pushUserToParent}, ) {
  //const { firstName: names, id } = bootcampers;
  //const { names } = props;
  
  const [selectedName, setSelectedName] = useState("");

  const names = bootcampers.map((b) => b.first_name);
  //I feel like the above job should be done before we pass in the props,
  //maybe by the function that calls the SQL? or a middleman function?
  //because having it inside the compponent means it is remapped on every re-render
  //which is every mouse move!


  const whiteKeyCount = 24;
  const blackKeyPositions = [
    1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 15, 16, 18, 19, 20, 22, 23,
  ]; // 0-based index

  return (
    <div className="piano-dropdown">
      <div className="display-panel">{selectedName || "."}</div>
      <div className="piano-keyboard">
        <div className="white-keys">
          {names.slice(0, whiteKeyCount).map((name, index) => (
            <div
              key={index}
              className="white-key"
              onMouseEnter={() => setSelectedName(name)}
              onClick={() => pushUserToParent(name)}
            ></div>
          ))}
        </div>
        <div className="black-keys">
          {blackKeyPositions.map((position, index) => (
            <div
              key={index}
              className="black-key"
              style={{
                left: `calc(${(position / whiteKeyCount) * 100}% - 1.5%)`,
              }}
              onMouseEnter={() => setSelectedName(names[whiteKeyCount + index])}
              onClick={() => pushUserToParent(names[whiteKeyCount + index])}
              
            ></div>
          ))}
        </div>
      </div>
      <style>{`
        .piano-dropdown {
          width: 600px;
          margin: 20px auto;
          font-family: Arial, sans-serif;
        }

        .display-panel {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
          font-size: 18px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }

        .piano-keyboard {
          position: relative;
          height: 180px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          overflow: hidden;
        }

        .white-keys {
          display: flex;
          height: 100%;
        }

        .white-key {
          flex: 1;
          background-color: white;
          border-right: 1px solid #ccc;
          transition: background-color 0.2s;
        }

        .white-key:last-child {
          border-right: none;
        }

        .white-key:hover {
          background-color: #e0e0e0;
        }

        .black-keys {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60%;
        }

        .black-key {
          position: absolute;
          width: 2.5%;
          height: 100%;
          background-color: #333;
          transition: background-color 0.2s;
        }

        .black-key:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
};

export default PianoDropdown;
