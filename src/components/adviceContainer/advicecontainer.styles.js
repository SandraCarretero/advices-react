import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 540px;
	height: 332px;
	background-color: #313a48;
	position: relative;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	padding: 0 40px;
	@media (max-width: 425px) {
		width: 343px;
		height: auto;
		padding-bottom: 70px;
	}
`;
const StyledText = styled.p`
	margin: 0;
	color: #53ffaa;
	text-align: center;
	font-size: 13px;
	padding-top: 48px;

	@media (max-width: 425px) {
		margin: 0;
		color: #53ffaa;
		text-align: center;
		font-size: 11px;
		padding-top: 48px;
	}
`;
const StyledTitle = styled.h1`
	color: #cee3e9;
	padding-top: 24px;
	text-align: center;
	font-size: 28px;

	@media (max-width: 425px) {
		color: #cee3e9;
		padding: 24px 48px 0px 48px;
		text-align: center;
		font-size: 24px;
	}
`;
const StyledButton = styled.button`
	background-color: #53ffaa;
	border: none;
	padding: 20px;
	border-radius: 50%;
	margin: 0 auto;
	position: absolute;
	bottom: -32px;
	left: 50%;
	transform: translateX(-50%);
	cursor: pointer;
	transition: all.5s ease;

	@media (hover: hover) {
		&:hover {
			box-shadow: 0 0 15px 11px #53ffaa94;
		}
	}
`;

export { StyledContainer, StyledText, StyledTitle, StyledButton };
