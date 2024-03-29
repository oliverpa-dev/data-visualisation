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
}

export default App;
