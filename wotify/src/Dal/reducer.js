export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_ACTIVE_PLAYLIST':
            return {
                ...state,
                active_playlist: action.active_playlist,
            }

        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify,
            }

        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search?.toLowerCase(),
            }

        default: 
            return state;   

    }
}

export default reducer;