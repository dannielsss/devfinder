import React from 'react';

import { ContainerData, ContainerBox } from 'src/components/Container';
import SearchWrapper from 'src/components/SearchWrapper';
import UserWrapper from 'src/components/UserWrapper';
import Header from 'src/components/Header';

function App() {
	return (
		<ContainerBox>
			<Header />
			<ContainerData>
				<SearchWrapper />
				<UserWrapper />
			</ContainerData>
		</ContainerBox>
	);
}

export default App;
