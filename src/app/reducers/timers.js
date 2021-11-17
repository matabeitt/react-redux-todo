
const initialState = {
    times: []
}


export default (state = initialState, { type, payload }) => {
    switch (type) {
    case TODO_START:
        let todoItem = filter(state.times, (item) => item.id == payload);

        return { ...state, ...payload }
    case TODO_STOP:
        return {...state, ...payload }
    default:
        return state
    }
}
