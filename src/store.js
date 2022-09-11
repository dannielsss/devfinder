import { configureStore } from '@reduxjs/toolkit';
import searchReducer from 'src/reducers/searchReducer';

export const store = configureStore({
	reducer: {
		search: searchReducer,
	},
});
