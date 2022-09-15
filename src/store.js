import { configureStore } from '@reduxjs/toolkit';

import searchReducer from 'src/reducers/searchReducer';
import alertReducer from 'src/reducers/alertReducer';

export const store = configureStore({
	reducer: {
		search: searchReducer,
		alert: alertReducer,
	},
});
