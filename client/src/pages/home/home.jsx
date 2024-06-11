import React from 'react';
import styles from './home.module.css';


const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.subTitle}>
        <h1>Welcome to Investment Insights</h1>
        <p>Unlocking the potential of your investments</p>
      </div>
      <section className={styles.mainContent}>
        <div className={styles.card}>
          <h2>Investment Insights</h2>
          <p>
            Providing in-depth insights and analysis on subscriber investment portfolios.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Personalized Support</h2>
          <p>
            Tailored guidance and support to help subscribers make informed investment decisions.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Market Trends</h2>
          <p>
            Keeping subscribers informed with the latest market trends and opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
