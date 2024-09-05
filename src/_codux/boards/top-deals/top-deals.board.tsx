import { createBoard } from '@wixc3/react-board';
import { TopDeals } from '../../../components/top-deals/top-deals';

export default createBoard({
    name: 'TopDeals',
    Board: () => <TopDeals />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 640,
        windowWidth: 1870,
        windowBackgroundColor: '#d6d6d6',
    },
});
