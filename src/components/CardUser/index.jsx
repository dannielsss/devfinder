import React from 'react';
import { useSelector } from 'react-redux';
import {
	BioText,
	ErrorMessage,
	Footer,
	GithubImg,
	InfoBox,
	SignInDate,
	CardHeader,
	CardInformation,
	UserName,
	CardUserBox,
} from './styles';

import CardInformationItem from 'src/components/CardInformationItem';
import FooterText from 'src/components/FooterText';

import GithubIcon from 'src/assets/github_icon.png';
import LocationIcon from 'src/assets/location_icon.svg';
import LinkIcon from 'src/assets/link_icon.svg';
import TwitterIcon from 'src/assets/twitter_icon.svg';

function CardUser() {
	const search = useSelector((state) => state.search);
	const altText = 'Not Available';

	if (search.loading) {
		return (
			<CardUserBox loading={'true'}>
				<div></div>
				<ErrorMessage>Loading...</ErrorMessage>
				<div></div>
			</CardUserBox>
		);
	}

	return (
		<CardUserBox>
			{search.notfound ? (
				<>
					<div></div>
					<ErrorMessage>Not Found</ErrorMessage>
					<div></div>
				</>
			) : (
				<>
					<GithubImg src={GithubIcon} />
					<CardInformation>
						<CardHeader>
							<UserName>{search.user.name || 'Username'}</UserName>
							<SignInDate>{search.user.created_at || '00/00/00'}</SignInDate>
							<BioText>{search.user.bio || 'This profile has no bio'} </BioText>
						</CardHeader>
						<InfoBox>
							<CardInformationItem
								title={'Repos:'}
								value={search.user.public_repos || 0}
							/>
							<CardInformationItem
								title={'Followers:'}
								value={search.user.followers || 0}
							/>
							<CardInformationItem
								title={'Follwing:'}
								value={search.user.following || 0}
							/>
						</InfoBox>
						<Footer>
							{/* <FooterText>
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
							</FooterText> */}
							<FooterText
								icon={LocationIcon}
								text={search.user.location || altText}
							/>
							<FooterText
								icon={LinkIcon}
								text={search.user.html_url || altText}
								isLink={true}
								link={search.user.html_url || '/'}
							/>
							<FooterText
								icon={TwitterIcon}
								text={
									search.user.twitter_username
										? `@${search.user.twitter_username}`
										: altText
								}
							/>
						</Footer>
					</CardInformation>
				</>
			)}
		</CardUserBox>
	);
}

export default CardUser;
