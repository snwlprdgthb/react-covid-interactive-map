import React from "react";
import Spinner from "./Spinner";

export default function ToolTip({ currentCountry, loading }) {
  console.log(currentCountry);

  if (loading) {
    return <Spinner />;
  }

  if (currentCountry.error) {
    return (
      <div>
        <h1>{currentCountry.error.message}</h1>
      </div>
    );
  }

  if (currentCountry) {
    return (
      <div>
        <ul>
          <li data-type="warning">{currentCountry.confirmed.value}</li>
          <li>{currentCountry.recovered.value}</li>
          <li>{currentCountry.deaths.value}</li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h1>no data</h1>
    </div>
  );
}
