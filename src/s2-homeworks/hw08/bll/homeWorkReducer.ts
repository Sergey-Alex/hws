import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            copyState.sort((a, b) => {
                if (action.payload === 'up') {
                    return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1
                } else if (action.payload === 'down') {
                    return  (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1
                } else {
                    return 0
                }
            })
            return copyState // need to fix
        }
        case 'check': {
            return state.filter(v => v.age > 18) // need to fix
        }
        default:
            return state
    }
}

