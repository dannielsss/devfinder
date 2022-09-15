import React from 'react';

import { ContainerData, ContainerBox } from 'src/components/Container';
import SearchWrapper from 'src/components/SearchWrapper';
import CardUser from 'src/components/CardUser';
import Header from 'src/components/Header';
import GlobalAlert from 'src/components/GlobalAlert';

function App() {
	return (
		<ContainerBox>
			<Header />
			<ContainerData>
				<GlobalAlert />
				<SearchWrapper />
				<CardUser />
			</ContainerData>
		</ContainerBox>
	);
}

export default App;
