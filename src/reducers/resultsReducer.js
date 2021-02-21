export default (state="", action) => {
  switch(action.type) {
    case "PLAYER_WINS":
      return state="YOU WIN"
    case "PLAYER_LOSES":
      return state="YOU LOSE"
    case "PLAYER_DRAWS":
      return state="DRAW"
    default:
      return state
  }
}
