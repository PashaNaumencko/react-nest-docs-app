interface IAction {
  type: string;
}

const createReducer = <TAction extends IAction, TState>(initialState: TState, handlers: any) => {
  return (state = initialState, action: TAction) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  };
}

export default createReducer;
