import React from 'react';
import {
	BioText,
	Footer,
	FooterLink,
	FooterText,
	GithubImg,
	Icon,
	InfoWrapper,
	SignInDate,
	UserHeader,
	UserInformation,
	UserName,
	UserWrapperBox,
} from './UserWrapperElements';
import InformationBox from '../InformationBox';

import GithubIcon from 'src/assets/github_icon.png';
import LocationIcon from 'src/assets/location_icon.svg';
import LinkIcon from 'src/assets/link_icon.svg';

function UserWrapper() {
	return (
		<UserWrapperBox>
			<GithubImg src={GithubIcon} />
			<UserInformation>
				<UserHeader>
					<UserName>The Regalk</UserName>
					<SignInDate>Joined 25 Jan 2011</SignInDate>
					<BioText>This profile has no bio</BioText>
				</UserHeader>
				<InfoWrapper>
					<InformationBox title={'Repos:'} value="0" />
					<InformationBox title={'Followers:'} value="0" />
					<InformationBox title={'Follwing:'} value="0" />
				</InfoWrapper>
				<Footer>
					<FooterText><Icon src={LocationIcon} alt="" /> Not Available</FooterText>
					<FooterText>
					<Icon src={LinkIcon} alt="" /> <FooterLink href="/">https://github.com/regalk</FooterLink>
					</FooterText>
				</Footer>
			</UserInformation>
		</UserWrapperBox>
	);
}

export default UserWrapper;
