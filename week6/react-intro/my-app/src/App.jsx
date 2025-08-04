// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";


function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  const showCompany = (name, revenue) => (
    <div id={name}>
      {name} makes {revenue} every year
    </div>
  );
  const getClassName = (temperature) =>
    temperature < 15
      ? "freezing"
      : temperature > 15 && temperature < 30
      ? "fair"
      : "hell-scape";

  let temp = 10;

  return (
    <>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          {companies.map((company) =>
            showCompany(company.name, company.revenue)
          )}
        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className="exercise" id="ex-2">
          <div id="weatherBox" class={getClassName(temp)}></div>
        </div>
      </div>
    </>
  );
}

export default App;
