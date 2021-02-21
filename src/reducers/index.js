import {combineReducers} from "redux";
import playerChoiceReducer from "./playerChoiceReducer";
import houseChoiceReducer from "./houseChoiceReducer";
import resultsReducer from "./resultsReducer";
import scoreReducer from "./scoreReducer";


export default combineReducers({
  playerChoice: playerChoiceReducer,
  houseChoice: houseChoiceReducer,
  results: resultsReducer,
  score: scoreReducer
})
