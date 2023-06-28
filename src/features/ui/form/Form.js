import { StyledForm } from "./Form.styled";

const Form = ({ handleSubmit, children }) => {
	return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
