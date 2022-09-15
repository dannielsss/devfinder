import React from 'react';

import Icon from 'src/assets/icon.svg';
import { HeaderWrapper } from './styles';

function Header() {
	return (
		<HeaderWrapper>
			<img src={Icon} alt="" /> <h1>devfinder</h1>
		</HeaderWrapper>
	);
}


export default Header;
