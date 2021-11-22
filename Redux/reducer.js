const INITIAL_STATE = {
    state:user
}

const user = null

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

    case 'GET_USER':
        return { ...state, ...payload }

    default:
        return state
    }
}
