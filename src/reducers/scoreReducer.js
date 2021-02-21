export default (state=0, action) => {
  switch(action.type) {
    case "PLAYER_WINS":
      return state+1
    case "PLAYER_LOSES":
      return state-1
    case "PLAYER_DRAWS":
      return state
    default:
      return state
  }
}
