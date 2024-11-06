import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getImages } from '../api/apis';

// First, create the thunk
export const fetchImages = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response = await getImages()
        const json = await response.json()
        return json.data
    },
)
interface Images {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}

interface ImagesState {
    entities: Images[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ImagesState = {
    entities: [],
    loading: 'idle',
}

// Then, handle actions in your reducers:
const imageSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            // Add user to the state array
            state.entities.push(action.payload)
        })
    },
})

export default imageSlice.reducer