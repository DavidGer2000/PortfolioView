import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './notFoundPage.module.css';

const NotFoundPage = () => {
    const nav = useNavigate();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading1}>404</h1>
            <h3 className={styles.heading3}>
                LOST IN <span className={styles.span}>SPACE</span> App-Name? Hmm, looks like that page doesn't exist.
            </h3>
            <button
                className={styles.button}
                onClick={() => { nav('/'); }}
            >
                Go Home
            </button>
        </div>
    );
};

export default NotFoundPage;
