import { HeelType, SockDirection } from "@/app/types";
import NumberInput from "@/app/ui/NumberInput";

function SockForm({
  onSubmit,
  onChange,
  stsPerInch,
  submitted,
  circumference,
  footLength,
  direction,
  heelType,
  buttonText,
}: {
  onSubmit: React.SubmitEventHandler;
  onChange: React.ChangeEventHandler;
  stsPerInch: number;
  submitted: boolean;
  circumference: number;
  footLength: number;
  direction: SockDirection;
  heelType: HeelType;
  buttonText: string;
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md">
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
              label="Circumference of foot in inches: "
              name="circumference"
              step="0.125"
              onChange={onChange}
              value={circumference}
              submitted={submitted}
            />

            <NumberInput
              label="Length of foot in inches: "
              name="footLength"
              step="0.125"
              onChange={onChange}
              value={footLength}
              submitted={submitted}
            />
          </fieldset>
        </div>
        <div className="col-md">
          <fieldset id="constr-direction" className="mb-3">
            <legend>
              Construction Direction
              <br />
              <span>Which direction do you want to knit the socks?</span>
            </legend>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="toeup"
                name="direction"
                value="toeup"
                onChange={onChange}
                required
                checked={direction === "toeup"}
              />
              <label className="form-check-label" htmlFor="toeup">
                Toe Up
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="cuffdown"
                name="direction"
                value="cuffdown"
                onChange={onChange}
                required
                checked={direction === "cuffdown"}
              />
              <label className="form-check-label" htmlFor="cuffdown">
                Cuff Down
              </label>
            </div>
            {/* show short row heel message if direction is toe up */}
            {direction === "toeup" && (
              <p id="toe-up-short-row">
                Your toe-up sock recipe will include a short-row heel.
              </p>
            )}
          </fieldset>
          {/* only show heel choices if direction is cuff down */}
          {direction === "cuffdown" && (
            <fieldset id="heel-type" className="mb-3">
              <legend>
                Heel Type
                <br />
                <span>What kind of heel do you want to use?</span>
              </legend>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="flap"
                  name="heeltype"
                  value="flap"
                  onChange={onChange}
                  required
                  checked={heelType === "flap"}
                />
                <label className="form-check-label" htmlFor="flap">
                  Heel flap with gusset
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="shortrow"
                  name="heeltype"
                  value="shortrow"
                  onChange={onChange}
                  required
                  checked={heelType === "shortrow"}
                />
                <label className="form-check-label" htmlFor="shortrow">
                  Short row heel
                </label>
              </div>
            </fieldset>
          )}

          <div>
            <input className="btn btn-info" type="submit" value={buttonText} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SockForm;
