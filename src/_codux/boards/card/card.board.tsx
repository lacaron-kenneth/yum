import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#d4d4d4',
        windowWidth: 1024,
        windowHeight: 768,
    },
});
