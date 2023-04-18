import { ReactElement, useState } from "react";
import { DMY } from "../types/DMY";
import Form from "./Form";
import { showDate } from "../utils/showDate";

const DateBody = (): ReactElement => {
  const [date, setDate] = useState<string>("");
  const [daysMonthsYears, setDaysMonthsYears] = useState<DMY>({
    days: 0,
    months: 0,
    years: 0,
  });
  return (
    <>
      <h1 className="mainTitle">Datas</h1>
      <Form
        date={date}
        setDate={setDate}
        daysMonthsYears={daysMonthsYears}
        setDaysMonthsYears={setDaysMonthsYears}
      />
      <p className="date">{showDate(date, daysMonthsYears)}</p>
    </>
  );
};

export default DateBody;
