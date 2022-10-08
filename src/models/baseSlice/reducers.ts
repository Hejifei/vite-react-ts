export default {
  increment: (state: IBaseModel.IState) => {
    state.value += 1
  },
  decrement: (state: IBaseModel.IState) => {
    state.value -= 1
  },
  incrementByAmount: (state: IBaseModel.IState, action: IAction) => {
    state.value += action.payload
  },
  changeLoading: (state: IBaseModel.IState, action: IAction) => {
    state.isLoading = action.payload
  }
}
