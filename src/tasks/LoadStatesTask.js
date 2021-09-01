import { features } from "../data/states.json"


class LoadStatesTask {
    load = (setState) => {
        setState(features);
    }
}

export default LoadStatesTask;

