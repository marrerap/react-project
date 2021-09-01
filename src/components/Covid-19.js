import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import LoadStatesTask from "../tasks/LoadStatesTask";


const Covid19 = () => {
  const [states, setStates] = useState([]);
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
          <CovidMap />
          <Legend />
        </div>
      )}
    </div>
  );
};

export default Covid19;
