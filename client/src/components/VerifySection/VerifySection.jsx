/* eslint-disable react/prop-types */
function VerifySection({ bootcamperNames }) {
  // this prop is arriving as undefined?? Do we need to await something?
  function onClick() {}
  console.log("reading bootcamperNames inside VerifySection");
  console.log(bootcamperNames);

  console.log("The 0th element in bootcamper names is ");
  console.log(bootcamperNames[0]);

  // need to be able to generate the labels dynamically here, rather than pass them as literal text between the tags
  return (
    <form>
      <label>
        Who are you?
        <input type="radio" name="name" id={bootcamperNames[0]} />
        <label htmlFor={bootcamperNames[0]}>bootcamperNames[0]</label>
        <input type="radio" name="name" id="Kit" />
        <label htmlFor="Kit">Kit</label>
      </label>
      <hr />
      <label>
        Enter your personal access code
        <input name="code" />
      </label>
      <button type="submit" onClick={onClick}>
        submit
      </button>
    </form>
  );
}

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default VerifySection;
