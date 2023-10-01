import { StyledHeading } from './style'
// import { StyledHead } from './style'

interface IProps {
	title: string
}

function Heading({ title }: IProps) {
	return (
		<StyledHeading bg="red">
			<h1>{title.toUpperCase()}</h1>
		</StyledHeading>
	)
}

// PascalCase used in 1. Components 2. Styled-components 3. interface name

export default Heading
