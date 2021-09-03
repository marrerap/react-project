import { SET_NEWS_RESULTS } from "../actions/SetNewsResults";

export default function setNewsResults(state = [], action ) {
    switch (action.type) {
        case SET_NEWS_RESULTS:
            return action.article;

        default: 
        return state;
    }
}