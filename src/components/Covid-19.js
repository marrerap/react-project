import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import LoadStatesTask from "../tasks/LoadStatesTask";
import legendItems from "../Entities/LegendItems";


const Covid19 = () => {
  const [states, setStates] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse()
  const load = () => {
      const loadStatesTask = new LoadStatesTask();
      loadStatesTask.load(setStates)
  }

  useEffect(load, []);  

  return (
    <div>
      {states.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap states={states} />
          <Legend legendItems={legendItemsInReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
