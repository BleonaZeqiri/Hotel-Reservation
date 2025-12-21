import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

type IProps = {
  date: Date | null;
  setDate: (date: Date | null) => void;
  minDate?: Date | null;
  cls?: string;
  defaultValue?: string;
};

export default function DatePicker({
  date,
  setDate,
  minDate,
  cls = "",
  defaultValue = "Choose Date",
}: IProps) {
  return (
    <Flatpickr
      id="datetime-picker"
      placeholder="Choose Date"
      className={cls}
      type="text"
      defaultValue={defaultValue}
      options={{
        dateFormat: "Y-m-d",
        enableTime: false,
        defaultDate: date ?? undefined, 
        closeOnSelect: true,
        minDate: minDate ?? "today",
      }}
      onChange={([selectedDate]) => {
        setDate(selectedDate ?? null);
      }}
    />
  );
}

