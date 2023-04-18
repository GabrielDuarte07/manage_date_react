import { Dispatch, ReactElement, SetStateAction } from "react";
import { DMY } from "../types/DMY";

type FormProps = {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  daysMonthsYears: DMY;
  setDaysMonthsYears: Dispatch<SetStateAction<DMY>>;
};

const Form = ({
  date,
  setDate,
  daysMonthsYears,
  setDaysMonthsYears,
}: FormProps): ReactElement => {
  return (
    <form className="mainForm">
      <label htmlFor="mainDate" className="mainDate">
        <span>Data: </span>
        <input
          type="date"
          id="mainDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label htmlFor="moreDays">
        <span>+/- Dias: </span>
        <input
          type="number"
          id="moreDays"
          className="numberInput"
          value={daysMonthsYears.days}
          onChange={(e) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              days: Number(e.target.value),
            })
          }
        />
      </label>

      <label htmlFor="moreMonths">
        <span>+/- Meses: </span>
        <input
          type="number"
          id="moreMonths"
          className="numberInput"
          value={daysMonthsYears.months}
          onChange={(e) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              months: Number(e.target.value),
            })
          }
        />
      </label>

      <label htmlFor="moreYears">
        <span>+/- Anos: </span>
        <input
          type="number"
          id="moreYears"
          className="numberInput"
          value={daysMonthsYears.years}
          onChange={(e) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              years: Number(e.target.value),
            })
          }
        />
      </label>
    </form>
  );
};

export default Form;
