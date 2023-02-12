// npm i redux @types/redux
import { combineReducers, legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer,
});
const store = createStore(reducer, {amount: 0, goods: ['Apple', 'Pear', 'Potato']}, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export default store;
