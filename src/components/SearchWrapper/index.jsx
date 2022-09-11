import React from 'react';

import { Input } from './SearchWrapperElements';

function SearchWrapper() {
	return (
		<form>
			<Input
				type="search"
				name="search"
				id="search"
				placeholder="Search Github username.."
				autoComplete="off"
			/>
		</form>
	);
}

export default SearchWrapper;
