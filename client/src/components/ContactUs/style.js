import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: #420d1f;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	border-radius: 15px;
	margin: 15px 10px;
	padding-top: 15px;

	.messageInput {
		height: 100px;
		width: 400px;
	}
	.inputs {
		width: 400px;
	}

	.contactBtn {
		padding: 5px 10px;
		margin-bottom: 5px;
	}
`;

export default StyledDiv;
