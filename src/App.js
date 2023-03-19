import "./App.css";
import ShowDubaiTime from "./TimeZones/ShowDubaiTime";
import ShowIndianTime from "./TimeZones/ShowIndianTime";
import ShowMelbournTime from "./TimeZones/ShowMelbournTime";
import ShowTehranTime from "./TimeZones/ShowTehranTime";
import ShowHongKongTime from "./TimeZones/ShowHongKongTime";
import ShowJapanTime from "./TimeZones/ShowJapanTime";
import MelbournTimeHandler from "./AddTimeZone/MelbournTimeHandler";
import DelhiTimeHandler from "./AddTimeZone/DelhiTimeHandler";
import DubaiTimeHandler from "./AddTimeZone/DubaiTimeHandler";
import JapanTimeHandler from "./AddTimeZone/JapanTimeHandler";
import HongTimeHandler from "./AddTimeZone/HongTimeHandler";
import RedStyle from "./Styler/RedStyle";
import BlueStyle from "./Styler/BlueStyle";

function App() {
  return (
    <div className="App">
      <h1>My Digital Clock</h1>
      <div id="panel" className="left-panel">
        <button
          id="redStyle"
          className="styler"
          onClick={() => {
            document.getElementById("clockDisplay").style.color = "red";
          }}
        >
          Red Style
        </button>
        <button
          id="blueStyle"
          className="styler"
          onClick={() => {
            document.getElementById("clockDisplay").style.color = "#17d4fe";
          }}
        >
          Blue Style
        </button>
        <div className="dropdown">
          <button className="dropbtn">More Time Zones!</button>
          <div className="dropdown-content">
            <a
              onClick={() => {
                document.getElementById("Melbourn").style.display = "block";
              }}
            >
              Melbourn
            </a>
            <a
              onClick={() => {
                document.getElementById("Dubai").style.display = "block";
              }}
            >
              Dubai
            </a>
            <a
              onClick={() => {
                document.getElementById("NewDelhi").style.display = "block";
              }}
            >
              New Delhi
            </a>
            <a
              onClick={() => {
                document.getElementById("Tokyo").style.display = "block";
              }}
            >
              Tokyo
            </a>
            <a
              onClick={() => {
                document.getElementById("HongKong").style.display = "block";
              }}
            >
              Hong kong
            </a>
          </div>
        </div>
      </div>
      <div id="clockDisplay">
        <ShowTehranTime />
        <ShowMelbournTime />
        <ShowDubaiTime />
        <ShowIndianTime />
        <ShowHongKongTime />
        <ShowJapanTime />
      </div>
    </div>
  );
}

export default App;
