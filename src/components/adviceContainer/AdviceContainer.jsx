import { useState, useEffect, useCallback } from 'react';
import {
	StyledButton,
	StyledContainer,
	StyledText,
	StyledTitle
} from './advicecontainer.styles';

const AdviceContainer = () => {
	const [advice, setAdvice] = useState('');
	const [adviceNumber, setAdviceNumber] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchAdvice = async randomNumber => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				`https://api.adviceslip.com/advice/${randomNumber}`
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			setAdvice(data.slip.advice);
			setAdviceNumber(data.slip.id);
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const getRandomAdvice = useCallback(() => {
		const randomNumber = Math.floor(Math.random() * 100);
		console.log(randomNumber);
		fetchAdvice(randomNumber);
	}, []); // No hay dependencias porque no dependemos de valores que cambian

	useEffect(() => {
		getRandomAdvice();
	}, [getRandomAdvice]); // Incluimos getRandomAdvice en las dependencias

	if (loading)
		return (
			<StyledContainer>
				<StyledText>Loading...</StyledText>
			</StyledContainer>
		);
	if (error)
		return (
			<StyledContainer>
				<StyledText>Error: {error.message}</StyledText>
			</StyledContainer>
		);

	return (
		<StyledContainer>
			<StyledText>ADVICE #{adviceNumber}</StyledText>
			<StyledTitle>{advice}</StyledTitle>
			<img src='pattern-divider-desktop.svg' alt='Pattern Divider' />
			<StyledButton onClick={getRandomAdvice}>
				<img src='icon-dice.svg' alt='Get new advice' />
			</StyledButton>
		</StyledContainer>
	);
};

export default AdviceContainer;
