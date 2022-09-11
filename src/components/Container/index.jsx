import styled from 'styled-components';

export const ContainerBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	color: white;
	height: 100vh;
	padding-top: 100px;

	@media screen and (max-width: 480px) {
		margin-bottom: 70px;
	}
`;

export const ContainerData = styled.div`
	width: 500px;

	@media screen and (max-width: 750px) {
		width: 90%;
	}
`;
