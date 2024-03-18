import {createSlice} from '@reduxjs/toolkit'

const fetchingStatusSlice = createSlice({
    name : 'fetchStatus',
    initialState : {
        fetchDone : false, 
        currentFetching : false,
    },
    reducers : {
        markFetchDone : (state) => {
            return state.fetchDone = false;
        },
        markFetchFetchingStarted : (state) => {
            return state.currentFetching = true;
        },
        markFetchFetchingEnded : (state) => {
            return state.currentFetching = false;
        },
    }
})

export const fetchingStatusAction = fetchingStatusSlice.actions;

export default fetchingStatusSlice