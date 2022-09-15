import React from 'react';
import { FooterItem, FooterLink, Icon } from './styles';

function FooterText({ icon, text, isLink, link }) {
	return (
		<FooterItem>
			<Icon src={icon} alt="" />{' '}
			{isLink ? <FooterLink href={link}>{text}</FooterLink> : text}
		</FooterItem>
	);
}

export default FooterText;
