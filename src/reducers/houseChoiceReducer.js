export default (state="", action) => {
  switch(action.type) {
    case "HOUSE_SELECT_ROCK":
      return state="rock"
    case "HOUSE_SELECT_SCISSORS":
      return state="scissors"
    case "HOUSE_SELECT_PAPER":
      return state="paper"
    default:
      return state
  }
}
