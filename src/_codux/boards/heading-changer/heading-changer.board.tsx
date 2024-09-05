import { createBoard } from '@wixc3/react-board';
import { HeadingChanger } from '../../../components/heading-changer/heading-changer';

export default createBoard({
    name: 'HeadingChanger',
    Board: () => <HeadingChanger />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1342,
    },
});
