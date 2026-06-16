import NumberInput from "@/app/ui/NumberInput";

function HatForm({
  height,
  stsPerInch,
  rowsPerInch,
  circumference,
  fittedOrSlouchy,
  buttonText,
  submitted,
  onSubmit,
  onChange,
}: {
  height: number;
  stsPerInch: number;
  rowsPerInch: number;
  circumference: number;
  fittedOrSlouchy: "fitted" | "slouchy"; // TODO: update to use bool for isFitted
  buttonText: string;
  submitted: boolean;
  onSubmit: React.SubmitEventHandler;
  onChange: React.ChangeEventHandler;
}) {
  const circsByHeight: {
    [key: string]: string;
  } = {
    "5.75": "13-15",
    "6.5": "15-16",
    "7.25": "16-18",
    "7.75": "18-20",
    "8.25": "20-22",
    "9.25": "21-23",
    "10": "22-24",
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset id="gauge-size">
        <legend>Gauge and Size Information</legend>
        <NumberInput
          label="Stitches per inch: "
          name="stsPerInch"
          step="0.25"
          onChange={onChange}
          value={stsPerInch}
          submitted={submitted}
        />

        <NumberInput
          label="Rows per inch: "
          name="rowsPerInch"
          step="0.25"
          onChange={onChange}
          value={rowsPerInch}
          submitted={submitted}
        />

        <div className="mb-3">
          <label htmlFor="height">Size:</label>
            <select
              id="height"
              className="form-select"
              name="height"
            value={height}
            onChange={onChange}
          >
            <option value="5.75">0-6 mo</option>
            <option value="6.5">6-12 mo</option>
            <option value="7.25">1-3 years</option>
            <option value="7.75">3-10 years</option>
            <option value="8.25">Teen / Adult small</option>
            <option value="9.25">Adult medium</option>
            <option value="10">Adult large</option>
          </select>
        </div>

        <NumberInput
          label={`Circumference of head in inches (common numbers for your size: ${circsByHeight[height.toString()]}): `}
          name="circumference"
          step="0.125"
          onChange={onChange}
          value={circumference}
          submitted={submitted}
        />

        <div className="mb-3">
          <label htmlFor="fittedOrSlouchy">Fitted or slouchy?</label>
            <select
              id="fittedOrSlouchy"
              className="form-select"
              name="fittedOrSlouchy"
            value={fittedOrSlouchy}
            onChange={onChange}
          >
            <option value="fitted">Fitted</option>
            <option value="slouchy">Slouchy</option>
          </select>
        </div>
      </fieldset>

      <div>
        <input className="btn btn-info" type="submit" value={buttonText} />
      </div>
    </form>
  );
}

export default HatForm;
