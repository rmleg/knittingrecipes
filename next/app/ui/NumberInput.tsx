import React from "react";

function NumberInput({
  value,
  name,
  step,
  submitted,
  label,
  onChange,
}: {
  value: number;
  name: string;
  step: string;
  submitted: boolean;
  label: string;
  onChange: React.ChangeEventHandler;
}) {
  const invalid = Boolean(submitted) && Number(value) <= 0;
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        className={`form-control ${invalid && "is-invalid"}`}
        type="number"
        min="0"
        step={step}
        placeholder={"0"}
        name={name}
        onChange={onChange}
      />
      {/* Show error message if form has been submitted but number is not greater than 0 */}
      {invalid && (
        <span className="error invalid-feedback">
          Please enter a number greater than 0
        </span>
      )}
    </div>
  );
}

export default NumberInput;
