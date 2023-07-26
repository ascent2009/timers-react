import { Link } from 'react-router-dom';
import { memo } from 'react';
import { SMain } from '../../assets/styles/timer.styles';
import { SPageNav } from '../../assets/styles/nav.styles';
import Title from '../Title';
import Container from './Container';

const Countdown: React.FC = memo(() => {
    return (
        <SMain>
            <SPageNav>
                <Link to='/'>На главную</Link>
                <Link to='/timer'>Timer</Link>
            </SPageNav>

            <Title title='Countdown' />
            <Container />
        </SMain>
    );
});

export default Countdown;
