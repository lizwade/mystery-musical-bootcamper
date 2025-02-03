/* eslint-disable react/prop-types */

function EnterMyInfoForm({ bootcamper }) {
  async function updateMyInfo(formData) {
    console.log("in the updateMyInfo function");
    const response = await fetch("/update", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Successfully updated the data");
    } else {
      alert("Failed to update data.");
    }
  }

  return (
    <div>
      <h3>Hello {bootcamper.name}!</h3>
      <form action={"dummy_string"}>
        <label>
          What is your band name / performer name?
          <input
            type="text"
            name="bandName"
            size="30"
            defaultValue={bootcamper.bandName}
            required
          />
        </label>
        <br></br>
        <label>
          Please enter the url of the mp3 you want to submit for the game
          <input
            type="url"
            name="mp3url"
            size="50"
            defaultValue={bootcamper.mp3url}
            required
          />
        </label>
        <br></br>
        <label>
          Do you sing on this track?
          <input
            type="radio"
            name="isSinging"
            id="true"
            value="true"
            defaultChecked={bootcamper.isSinging}
          />
          <label htmlFor="true">Yes</label>
          <input
            type="radio"
            name="isSinging"
            id="false"
            value="false"
            defaultChecked={!bootcamper.isSinging}
          />
          <label htmlFor="false">No</label>
        </label>
        <br></br>
        <br></br>
        <label className="labelForTextArea">
          Do you have a message to display to fellow bootcampers after they have
          heard your music?
          <br></br>
          <textarea
            name="message"
            rows="4"
            cols="50"
            maxLength={200}
            defaultValue={bootcamper.message}
          />
        </label>
        <br></br>
        <label>
          Would you like to share a link to more of your music?
          <input
            type="url"
            name="moreMusic"
            size="50"
            defaultValue={bootcamper.moreMusic}
          />
        </label>
        <br></br>
        <label>
          I have the right to distribute this music and I consent to its use in
          this game
          <input
            type="checkbox"
            name="hasConsented"
            defaultValue="false"
            required
          />
        </label>
        <br></br>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default EnterMyInfoForm;
