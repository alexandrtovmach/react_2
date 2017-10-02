const initUsers = ['Raiden', 'Sub-Zero', 'Scorpion', 'Jonny Cage', 'Sonya'];

export function reducer(state = initUsers, action) {
    switch (action.type) {
        case 'ADD_USER': {
            return [...state, action.payload]
        }
        case 'REMOVE_USER': {
            let data = [...state];
            data.splice(action.payload, 1);
            return data;
        }
        case 'SEARCH_USER': {
            return state.filter((el) => {
                return el.toLowerCase().includes(action.payload.toLowerCase())
            })
        }
    }
    return state;
}
