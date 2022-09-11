import React, { useState } from 'react';

import { searchUser, loading, notfound } from 'src/reducers/searchReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Input } from './SearchWrapperElements';

function SearchWrapper() {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();

	const onSubmitForm = async (e) => {
		e.preventDefault();
		dispatch(loading());
		try {
			const res = await axios.get(`https://api.github.com/users/${searchValue}`);
			dispatch(searchUser(res.data));
			dispatch(notfound(false))
			dispatch(loading());
		} catch (error) {
			dispatch(loading());
			if (error.response.status === 404) {
				dispatch(notfound(true))
			}
		}
	};

	return (
		<form onSubmit={onSubmitForm}>
			<Input
				type="search"
				name="search"
				id="search"
				placeholder="Search Github username.."
				autoComplete="off"
				onChange={(e) => setSearchValue(e.target.value)}
			/>
		</form>
	);
}

export default SearchWrapper;
