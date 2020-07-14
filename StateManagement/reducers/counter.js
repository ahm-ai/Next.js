


const counterReducer = (state , action) => {
    switch (action.type) {
      case 'TICK':
        return {
          ...state,
          lastUpdate: action.lastUpdate,
          light: !!action.light,
        }
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        }
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1,
        }
      case 'RESET':
        return {
          ...state,
          count: 0,
        }
      default:
        return state
    }
  }

  export default counterReducer;
