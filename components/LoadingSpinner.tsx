import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    fullScreen?: boolean;
    message?: string;
}

export default function LoadingSpinner({
                                           size = 'medium',
                                           fullScreen = false,
                                           message
                                       }: LoadingSpinnerProps) {

    const spinnerContent = (
        <div className={styles.spinnerContainer}>
            <div className={`${styles.spinner} ${styles[size]}`}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className={styles.fullScreenOverlay}>
                {spinnerContent}
            </div>
        );
    }

    return spinnerContent;
}