import { useEffect, useState } from "react";

const ShowTehranTime = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getUTCHours() + 4;
      let minute = date.getUTCMinutes() + 30;
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
      const tehranTime = hour + ":" + minute + ":" + seconds + " " + session;
      setClockState(tehranTime);
    }, 1000);
  }, []);

  return (
    <div>
      <div id="Tehran" className="clock">
        Tehran: {clockState}
      </div>
    </div>
  );
};

export default ShowTehranTime;
