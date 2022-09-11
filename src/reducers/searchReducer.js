import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
	loading: false,
	notfound: false,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchUser: (state, action) => {
			state.user = action.payload;
		},
		loading: (state) => {
			state.loading = !state.loading;
		},
		notfound: (state, action) => {
			state.notfound = action.payload;
		}
	},
});

export const { searchUser, loading, notfound } = searchSlice.actions;
export default searchSlice.reducer;
