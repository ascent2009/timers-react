import { memo } from 'react';
import { Link } from 'react-router-dom';
import { SMain } from '../assets/styles/timer.styles';
import { SPageNav } from '../assets/styles/nav.styles';
import Title from './Title';
import DisplayTimer from './DisplayTimer';

const Timer: React.FC = memo(() => {
    return (
        <SMain>
            <SPageNav>
                <Link to='/'>На главную</Link>
                <Link to='/countdown'>Countdown</Link>
            </SPageNav>

            <Title title='Timer' />
            <DisplayTimer />
        </SMain>
    );
});

export default Timer;
