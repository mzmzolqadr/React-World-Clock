import { useEffect, useState } from "react";

const ShowMelbournTime = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getUTCHours() + 11;
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
      const melbournTime = hour + ":" + minute + ":" + seconds + " " + session;
      setClockState(melbournTime);
    }, 1000);
  }, []);

  return (
    <div>
      <div id="Melbourn" className="clock">
        Melbourn: {clockState}
      </div>
    </div>
  );
};

export default ShowMelbournTime;
