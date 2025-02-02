/* eslint-disable react/prop-types */
import { useState } from "react";
import VerifySection from "../VerifySection/VerifySection";
import EnterMyInfoForm from "../EnterMyInfoForm/EnterMyInfoForm";

function Submission({ bootcampers }) {
  console.log(bootcampers);
  console.log(bootcampers[0].name);

  const [isVerified, setIsVerified] = useState(true); //this needs to persist across re-renders, but only for one session?

  function verifyBootcamper(id) {
    //get record by id for the given bootcamper
    //store it somehow, to be passed to Form section. As state in Submission?
    setIsVerified(true);
  }

  return isVerified ? (
    <EnterMyInfoForm bootcamper={bootcampers[0]}>
      The form for a verified bootcamper to enter their info will go here
    </EnterMyInfoForm>
  ) : (
    <VerifySection bootcampers={bootcampers}></VerifySection>
    //TODO:Is it right to pass ALL of bootcampers to the VerifySection?
    //It only needs a few parts - and I've coded it to only destructure a few parts,
    // but what if some other hypothetical developer changed that?
    // Also do we cause more re-rendering if the child has props for the whole object unnecesarily?
  );
}

export default Submission;
