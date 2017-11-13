import * as constants from '../constants';
import { Map } from 'immutable';

const initialState = Map({
    causes: Map({})
});

const causes = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default causes;
