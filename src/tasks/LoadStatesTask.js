import papa from "papaparse";
import { features } from "../data/states.json";
import legendItems from "../Entities/LegendItems";

class LoadStatesTask {
  covid19DataUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_state.csv";

  setState = null;
  mapStates = features;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covid19DataUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };
  #processCovidData = (covidStates) => {
    for (let i = 0; i < this.mapStates.length; i++) {
      const mapState = this.mapStates[i];
      const covidState = covidStates.find(
        (covidState) => covidState.Province_State === mapState.properties.name
      );

      mapState.properties.cases28Days = 0;
      mapState.properties.cases28DaysText = "0";

      if (covidState != null) {
        const confirmed = covidState.Cases_28_Days;
        mapState.properties.confirmed = confirmed;
        mapState.properties.confirmedText = this.#numberWithCommas(confirmed);
      }
      this.#setStateColor(mapState);
    }
    this.setState(this.mapStates);
  };

  #setStateColor = (mapState) => {
    const legendItem = legendItems.find((legendItem) =>
      legendItem.isFor(mapState.properties.confirmed)
    );
    if (legendItem != null) {
      mapState.properties.color = legendItem.color;
    }
  };

  #numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadStatesTask;
