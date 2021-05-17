import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
// importing components
import Form from './components/Form';

function App() {
	return (
		<div className="App">
			<ChakraProvider>
				<h2>Drug ML</h2>
			</ChakraProvider>
		</div>
	);
}

export default App;
