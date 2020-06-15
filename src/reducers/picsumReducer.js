import { FETCH_PICSUM_DATA } from "../actions/types";

export default function picsumReducer(state = [], action) {
    switch (action.type) {
        case FETCH_PICSUM_DATA:
            return action.data;
        default:
            return state;
    }
}
