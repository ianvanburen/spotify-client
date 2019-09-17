export const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        isAuthenticated: true,
        username: action.username,
        user: action.user
      }
    case 'LOG_OUT':
      return {
        isAuthenticated: false,
        username: null
      }
    default:
      return state
  }
}