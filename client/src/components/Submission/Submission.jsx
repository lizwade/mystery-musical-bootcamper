/* eslint-disable react/prop-types */
import { useState } from "react";
import VerifySection from "../VerifySection/VerifySection";
import EnterMyInfoForm from "../EnterMyInfoForm/EnterMyInfoForm";

function Submission({ bootcampers }) {
  const [isVerified, setIsVerified] = useState(true); //this needs to persist across re-renders, but only for one session?

  const bootcamperNames = bootcampers.map((b) => b.first_name);
  typeof bootcamperNames;
  console.log("This is bootcamperNames:");
  console.log(bootcamperNames);

  function verifyBootcamper(id) {
    //get record by id for the given bootcamper
    //store it somehow, to be passed to Form section. As state in Submission?
    setIsVerified(true);
  }

  //note: from seeded database, 10 and 16 are array elements with data
  return isVerified ? (
    <EnterMyInfoForm bootcamper={bootcampers[10]}>
      The form for a verified bootcamper to enter their info will go here
    </EnterMyInfoForm>
  ) : (
    <VerifySection bootcampers={bootcamperNames}></VerifySection>
    //TODO:Is it right to pass ALL of bootcampers to the VerifySection?
    //It only needs a few parts - and I've coded it to only destructure a few parts,
    // but what if some other hypothetical developer changed that?
    // Also do we cause more re-rendering if the child has props for the whole object unnecesarily?
  );
}

export default Submission;
