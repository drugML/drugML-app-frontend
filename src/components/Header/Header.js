import { Center, VStack } from '@chakra-ui/react';
import Divider from '../UI/Divider/Divider';

import classes from './Header.module.css';

const Header = () => (
	<VStack spacing={4} className={classes.header}>
		<Center>Drug ML</Center>
		<Center>
			<Divider />
		</Center>
	</VStack>
);

export default Header;
