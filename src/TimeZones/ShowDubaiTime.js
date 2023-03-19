import { useEffect, useState } from "react";

const ShowDubaiTime = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getUTCHours() + 4;
      let minute = date.getUTCMinutes();
      let seconds = date.getSeconds();
      let session = "AM";
      if (hour > 12) {
        hour = hour - 12;
        session = "PM";
      }
      if (minute > 60) {
        minute = minute - 60;
        hour = hour + 1;
      }
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      const dubaiTime = hour + ":" + minute + ":" + seconds + " " + session;
      setClockState(dubaiTime);
    }, 1000);
  }, []);

  return (
    <div>
      <div id="Dubai" className="clock">
        Dubai: {clockState}
      </div>
    </div>
  );
};

export default ShowDubaiTime;
