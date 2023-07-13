
const initState = {
    themeId: 1,
}
export type initialStateType = {
    themeId: number
}

export const themeReducer = (state: initialStateType = initState, action: ReturnType<typeof changeThemeId>): initialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}


export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const // fix any
