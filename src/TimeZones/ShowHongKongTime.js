import { useEffect, useState } from "react";

const ShowHongKongTime = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getUTCHours() + 8;
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
      const hongTime = hour + ":" + minute + ":" + seconds + " " + session;
      setClockState(hongTime);
    }, 1000);
  }, []);

  return (
    <div>
      <div id="HongKong" className="clock">
        Hong kong: {clockState}
      </div>
    </div>
  );
};

export default ShowHongKongTime;
