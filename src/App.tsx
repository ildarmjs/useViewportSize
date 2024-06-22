import useViewportSize from './custom-hooks/useViewportSize'
import './App.css'

function App() {
	const { height, width } = useViewportSize()

	return (
		<>
			Width: {width}, Height: {height}
		</>
	)
}

export default App
