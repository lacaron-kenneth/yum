import classNames from 'classnames';
import styles from './card.module.scss';
import UpscaledPng from '../../assets/8_upscaled.png';

export interface CardProps {
    className?: string;
    imageUrl?: string;
    children?: React.ReactNode;
}

export const Card = ({ imageUrl = UpscaledPng, children ="Hatsune Miku", className }: CardProps) => {
    return (
        <div className={styles.root}>
            <img src={imageUrl} alt="" className={styles.image} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
