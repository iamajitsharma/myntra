import "./App.css";
import data from "./data";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [newData, setNewData] = useState(data);
  const [value, setValue] = useState("");
  const [filterOn, setFilterOn] = useState(false);
  const [variableName, setVariableName] = useState("male");
  return (
    <>
     
      <Navbar/>

      {/* search bar */}
      <div id="product-title-holder">
          <input
            style={{
              backgroundColor: "transparent",
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              width: "20vw",
              padding: 5,
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 30,
            }}
            // what to display on search bar
            // where do I store typed data
            value={value}
            // what should I do everytime I type
            onChange={(e) => {
              setValue(e.target.value);
              if (e.target.value.length === 0) {
                setNewData(data);
              } else {
                const tempData = data.filter((el) => {
                  // el = shirt1, cotton shirt,
                  // el = shirt2, denim
                  // el = kurti
                  return (
                    el.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase()) ||
                    el.description
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  );
                });
                setNewData(tempData);
              }
            }}
          ></input>
        </div>
        {/* filter-holder */}
        <div id="filter-holder">
          <div
            style={{
              borderRadius: 30,
              height: 30,
              width: 150,
              fontSize: 12,
              margin: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#42454b",
            }}
            onClick={() => {
              setFilterOn(!filterOn);
            }}
          >
            Toggle filter
          </div>
        </div>
        {filterOn && (
          <div>
            <p>Gender: {variableName}</p>
            <input
              type="radio"
              name={variableName}
              value="male"
              onChange={(e) => {
                setVariableName("male");
                const tempData = data.filter((el) => {
                  return el.gender.includes("male");
                });
                setNewData(tempData);
              }}
              checked={variableName === "male"}
              />
            <label>male</label>
            <input
              type="radio"
              name={variableName}
              value="female"
              onChange={(e) => {
                setVariableName("female");
                const tempData = data.filter((el) => {
                  return el.gender.includes("female");
                });
                setNewData(tempData);
              }}
              checked={variableName === "female"}
              />
            <label>female</label>
          </div>
        )}
        <h1>{value}</h1>
        {/* products */}
        <div
          style={{
            display: "flex",
            margin: "10px",
            flexFlow: "row wrap",
            justifyCcontent: "space-evenly",
            gap:"15px",
          }}
        >
          {newData.map((items) => (
            <div className="feature-item"
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   flexDirection: "column",
              //   backgroundColor: "#42454b",
              //   height: 200,
              //   borderRadius: 5,
              //   width: 300,
              //   elevation: 8,
              //   margin: 10,
              // }}
            >
                <img src={items.otherImages} className="itemImage" alt="logo" />
                  <div className="item-details">
                    <h4>{items.name}</h4>
                    <p className="item-des">{items.description}</p>
                    <p className="item-price">Rs. {items.finalPrice}<span> {items.strickPrice}</span></p>
                </div>
            </div>
          ))}
        </div>
    </>
  );
  }

export default App;
