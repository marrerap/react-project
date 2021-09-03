import React from "react";
import { Container } from "react-bootstrap";
import LineGraph from "../components/LineGraph";
import { useDispatch, useSelector } from "react-redux";
import { actionSetSearch } from "../redux/actions/Search";
import { actionSetNewsResults} from '../redux/actions/SetNewsResults'


function Page2() {
  // const [statistics, setStatistics] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);
  const stateURI = encodeURI(state)
  const statistics = useSelector((state) => state.results)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/states/${stateURI}`)
      .then((res) => res.json())
      .then((data) => {
       dispatch(actionSetNewsResults(data))
      console.log(data)
        });
  };
  const handleClear = (e) => {
    e.preventDefault();
    dispatch(actionSetNewsResults([]));
  };
  



  return (
    <div>
      <h1>Covid-19 Statistics</h1>
      <form onSubmit={handleSubmit}>
       
          <select
          style={{marginBottom: '15px'}}
            id="state"
            name="state"
            value={state}
            onChange={(e) => dispatch(actionSetSearch(e.target.value))}
          >
            <option value="---">---</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District of Columbia">District of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Guam">Guam</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Virgin Islands">Virgin Islands</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
          <br/>
          <div style={{marginBottom: '15px'}} >
            <button type="submit">Show Stat's</button>&nbsp;&nbsp;
          <button type='reset' onClick={handleClear} >Clear Stat's</button>
          </div>
          
  
      </form>
      <Container>
        <LineGraph data={statistics} />
      </Container>
    </div>
  );
}

export default Page2;
