import classNames from 'classnames';
import styles from './heading-changer.module.scss';

export interface HeadingChangerProps {
    className?: string;
}

export const HeadingChanger = ({ className }: HeadingChangerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.div1}>
                <h1 className={styles['main-header']}>Heading 1</h1>
                <p className={styles['text-primary']}>This is a paragraph.</p>
                <div className={styles.flex}>
                    <button>Download</button>
                    <button>What&apos;s New</button>
                </div>
                <div className={styles.flex}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['card-img']}
                    />
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['card-img']}
                    />
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['card-img']}
                    />
                </div>
            </div>
        </div>
    );
};
