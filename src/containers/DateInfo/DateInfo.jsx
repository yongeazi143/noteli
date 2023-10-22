import React, { useState, useEffect } from "react";

function DateInfo() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");

  useEffect(() => {
    // Update the day of the week when the component mounts
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = new Date().getDay();
    setCurrentDayOfWeek(daysOfWeek[dayIndex]);
    setCurrentDate(new Date());
  }, []);

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();

  return (
    <p className="text-sm font-medium font-poppins">{`${currentDayOfWeek}, ${day} ${month}, ${year}.`}</p>
  );
}

export default DateInfo;
