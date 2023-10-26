import React, { useState, useEffect } from "react";

const TimeOfDay = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    //? Function to determine the time of day
    function getTimeOfDay() {
      const hour = new Date().getHours();
      if (hour >= 0 && hour < 12) {
        return "Morning";
      } else if (hour >= 12 && hour < 18) {
        return "Afternoon";
      } else {
        return "Evening";
      }
    }

    //? Update the time of day when the component mounts
    setTimeOfDay(getTimeOfDay());

    //? Update the time of day every minute
    const intervalId = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return <p className="text-2xl font-medium font-poppins">Good {timeOfDay},</p>;
};

export default TimeOfDay;
