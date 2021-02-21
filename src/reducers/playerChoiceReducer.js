export default (state="", action) => {
  switch (action.type) {
    case "PLAYER_SELECT_ROCK":
      return state="rock"
    case "PLAYER_SELECT_SCISSORS":
      return state="scissors"
    case "PLAYER_SELECT_PAPER":
      return state="paper"
    default:
      return state
  }
}
