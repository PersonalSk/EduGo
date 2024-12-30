import { createStore } from 'redux';
import rootReducer from './Redux/Reducer/RootReducer'

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

export { store };
