import { memo } from 'react';
import { STitle } from '../assets/styles/title.styles';

interface ITitle {
    title: string;
}

const Title: React.FC<ITitle> = memo(({ title }) => <STitle>{title}</STitle>);

export default Title;
