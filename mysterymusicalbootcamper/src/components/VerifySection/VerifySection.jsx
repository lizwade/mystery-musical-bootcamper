/* eslint-disable react/prop-types */
function VerifySection() {
  function onClick() {}

  //code here for drop down menu, from mdn tutorial
  // <select id="simple" name="simple">
  //   <option>Banana</option>
  //   <option selected>Cherry</option>
  //   <option>Lemon</option>
  // </select>;

  return (
    <form>
      <label>
        Who are you?
        <input type="radio" name="name" id="Adam" />
        <label htmlFor="Adam">Adam</label>
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
