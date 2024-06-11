import React, { useState, useEffect } from 'react';
import { BASE_URL, apiGet } from '../utils/apiService'
import styles from './indice.module.css';

const Indice = ({ indice, name }) => {
    const [lastIndexRate, setLastIndexRate] = useState(null);
    const [change, setChange] = useState(null);
    const [lastSaleTime, setLastSaleTime] = useState(null);

    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        try {
            const url = `${BASE_URL}/api/indice-data?indexId=${indice}`;
            let data = await apiGet(url);
            data = data.getIndexTradingDataIntraDay;

            setLastIndexRate(data.lastIndexRate);
            setChange(data.change);
            setLastSaleTime(data.lastSaleTime);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {lastIndexRate && <div className={`${styles.col} col border border-primary ${change >= 0 ? styles.positiveChange : styles.negativeChange}`}>
                <div className='row d-flex justify-content-between'>
                    <div className={`${styles.indexName} col`}>{name}</div>
                    <div className='col'>
                        <p className={styles.textBody}>{lastIndexRate}</p>
                        <p className={styles.textBody}>{change >= 0 ? <span className='me-1'>▲</span> : <span className='me-1'>▼</span>}{change}</p>
                        <p className={styles.textBody}>{lastSaleTime}</p>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Indice;

