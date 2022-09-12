import styled from 'styled-components';

export const UserWrapperBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;

	box-shadow: 1px 1px 50px #00000060;
	margin-top: 15px;
	background: #1f2a48;
	width: 100%;
	border-radius: 10px;
	padding: 15px;
	height: auto;

	@media screen and (max-width: 480px) {
		flex-direction: column;
		align-items: center;
		height: 90%;
	}
`;

export const ErrorMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	font-size: 20px;
	font-weight: 400;
`

export const GithubImg = styled.img`
	width: 100px;
	height: 100px;
`;

export const UserInformation = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	width: 100%;
	padding-right: 20px;
	column-span: all;
`;

export const UserHeader = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	width: 100%;
`;

export const UserName = styled.h1`
	font-size: 20px;
	font-weight: 700;
`;

export const SignInDate = styled.p`
	color: #798097;
	font-weight: 300;
`;

export const BioText = styled.p`
	color: #6c7284;
	font-size: 14px;
	margin-top: 2px;
	font-weight: medium;
	width: 100%;
`;

export const InfoWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border-radius: 5px;

	background: #141c2f;
	padding: 10px;
	padding-left: 20px;
	width: 100%;
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FooterLink = styled.a`
	text-decoration: underline;
	color: white;
`;

export const FooterText = styled.p`
	font-weight: 300;
	display: flex;
	align-items: center;
	gap: 6px;
`;

export const Icon = styled.img`
	width: 25px;
`;
