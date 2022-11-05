import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MessageCounter } from '../components/MessageCounter';

export default function Home() {
  const testData = {
    stressValues: [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Stress Alert dashboard" />
      </Head>

      <main>
        <MessageCounter values={testData.stressValues} />
      </main>
    </div>
  );
}
