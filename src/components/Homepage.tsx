import { memo } from 'react';
import { Link } from 'react-router-dom';
import { SHeader } from '../assets/styles/nav.styles';

const Homepage = () => (
    <SHeader>
        <Link to='/timer'>Timer</Link>
        <Link to='/countdown'>Countdown</Link>
    </SHeader>
);
export default memo(Homepage);
