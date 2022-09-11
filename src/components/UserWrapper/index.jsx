import React from 'react';
import { useSelector } from 'react-redux';
import {
	BioText,
	ErrorMessage,
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
import TwitterIcon from 'src/assets/twitter_icon.svg';

function UserWrapper() {
	const search = useSelector((state) => state.search);
	const altText = 'Not Available';

	if (search.loading) {
		return (
			<UserWrapperBox>
				<div></div>
				<ErrorMessage>Loading...</ErrorMessage>
				<div></div>
			</UserWrapperBox>
		);
	}

	return (
		<UserWrapperBox>
			{search.notfound ? (
				<>
					<div></div>
					<ErrorMessage>Not Found</ErrorMessage>
					<div></div>
				</>
			) : (
				<>
					<GithubImg src={GithubIcon} />
					<UserInformation>
						<UserHeader>
							<UserName>{search.user.name || 'Username'}</UserName>
							<SignInDate>{search.user.created_at || '00/00/00'}</SignInDate>
							<BioText>{search.user.bio || 'This profile has no bio'} </BioText>
						</UserHeader>
						<InfoWrapper>
							<InformationBox
								title={'Repos:'}
								value={search.user.public_repos || 0}
							/>
							<InformationBox
								title={'Followers:'}
								value={search.user.followers || 0}
							/>
							<InformationBox
								title={'Follwing:'}
								value={search.user.following || 0}
							/>
						</InfoWrapper>
						<Footer>
							<FooterText>
								<Icon src={LocationIcon} alt="" />{' '}
								{search.user.location || altText}
							</FooterText>
							<FooterText>
								<Icon src={LinkIcon} alt="" />{' '}
								<FooterLink href={search.user.html_url || '/'}>
									{search.user.html_url || altText}
								</FooterLink>
							</FooterText>
							<FooterText>
								<Icon src={TwitterIcon} alt="" />{' '}
								{search.user.twitter_username
									? `@${search.user.twitter_username}`
									: altText}
							</FooterText>
						</Footer>
					</UserInformation>
				</>
			)}
		</UserWrapperBox>
	);
}

export default UserWrapper;
