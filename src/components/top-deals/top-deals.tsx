import classNames from 'classnames';
import styles from './top-deals.module.scss';
import { Card } from '../card/card';
import Jpg from '../../assets/15.jpg';
import IdolThumnail331Png from '../../assets/idol thumnail_3.3.1.png';
import Png from '../../assets/11.png';
import TetorinPng from '../../assets/tetorin.png';

export interface TopDealsProps {
    className?: string;
}

export const TopDeals = ({ className }: TopDealsProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>Todays Top Deals </h2>
                <div className={styles.cards}>
                    <Card className={styles.card} imageUrl={Jpg}>
                        Scary Miku
                    </Card>
                    <Card />
                    <Card imageUrl={IdolThumnail331Png}>Kagamine Rin</Card>
                    <Card imageUrl={Png}>Miku Miku</Card>
                    <Card imageUrl={TetorinPng}>Teto Rin</Card>
                </div>
            </div>
        </div>
    );
};
