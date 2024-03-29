import React from "react";
import "./App.css";

function App() {
  return <div className="App"></div>;
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const dataXArr: any = {};
          let oneGear: any = [];

          results.data.forEach((entry: any) => {
            if (entry.gear > 3 && !dataXArr[entry[""]]) {
              dataXArr[entry[""]] = entry.gear;
            }
          });

          if (dataX) {
            setDataX(dataXArr);
            setIsFetched(!isFetched);
          }
        },
      });
    }
  };
  return (
    <div className="App">
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: "block", margin: "10px auto" }}
      />
      {isFetched && dataX && (
        <Bar
          onClick={() => console.log(dataX)}
          options={{}}
          data={{
            labels: Object.keys(dataX),
            datasets: [
              {
                label: "More than 4 gears",
                data: Object.values(dataX),
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default App;
