import React from 'react';

import Icon from 'src/assets/icon.svg';
import styled from 'styled-components';

function Header() {
	return (
		<HeaderWrapper>
			<img src={Icon} alt="" /> <h1>devfinder</h1>
		</HeaderWrapper>
	);
}

const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	margin-bottom: 50px;
`

export default Header;
