import { LOADING, LOAD_RESULT, SET_ERROR} from './actions'

const initState = { 
    user: "", 
    result: { repos: [], user: {
        avatar_url: "",
        login: "",
        email: ""
    } }, 
    loading: false, 
    error: false 
};

const searchReducer = (state=initState, action) => {
    switch(action.type) {
        case LOADING:
            return { ...state, user: action.payload, loading: true};
        case LOAD_RESULT:
            return { ...state, result: action.payload, loading: false, error: false};
        case SET_ERROR:
            return { ...state, error: action.payload, loading: false};
        default:
            return state;
    }
};

export default searchReducer;