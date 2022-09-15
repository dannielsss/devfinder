import React, { useState } from 'react';

import { Input } from './styles';
import { useUser } from 'src/hooks/useUser';

function SearchWrapper() {
	const [searchValue, setSearchValue] = useState('');
	const { findUser } = useUser();

	const onSubmitForm = async (e) => {
		e.preventDefault();
		findUser(searchValue);
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
