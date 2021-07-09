import { useContext } from 'react';
import { ThemeContext } from './Main.tsx'
const ContextExample = () => {
	const { lens, lensUpdate } = useContext(ThemeContext);
	return (
		<div>
			<h1>{lens}</h1>
			<h1>{lensUpdate}</h1>
		</div>
	)
}
export default ContextExample