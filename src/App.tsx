import useViewportSize from './custom-hooks/useViewportSize'
import './App.css'

function App() {
	const { height, width } = useViewportSize()

	return (
		<>
			Width: {width}, height: {height}
		</>
	)
}

export default App
