function DropDownSelect({ options, onChange, title }) {
  let count = 0;
  return (
    <div>
      <label htmlFor="input">{title + " "}</label>
      <select className="series-select" id="input" onChange={onChange}>
        {options.map((opt) => {
          return <option key={count} value={count++}>{opt}</option>;
        })}
      </select>
    </div>
  );
}

export default DropDownSelect;
