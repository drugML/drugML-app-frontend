import { ChakraProvider, VStack } from '@chakra-ui/react';

import './App.css';

// importing components
import Header from './components/Header/Header';
import Tagline from './components/Tagline/Tagline';
import Input from './components/UI/Input/Input';

function App() {
	return (
		<ChakraProvider>
			<VStack align="center" spacing={10}>
				<Header />
				<Tagline />
				<Input />
			</VStack>
		</ChakraProvider>
	);
}

export default App;
