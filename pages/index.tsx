import Head from 'next/head';
import MessageCounter from '../components/MessageCounter';
import Navbar from '../components/Navbar';
import Histogram from '../components/Histogram';
import { ContentWrapper } from './styles';

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/values');
  return {
    props: { values: await response.json() }
  };
}

export default function Home({ values }: { values: any }) {
  const testData = values[0].stressValues;
  return (
    <div>
      <Head>
        <title>Stress Alert | Dashboard</title>
        <meta name="description" content="Stress Alert dashboard" />
      </Head>
      <main>
        <Navbar />
        <ContentWrapper>
          <MessageCounter
            stressMessageAmount={testData.stressMessages}
            totalMessageAmount={testData.messageCount}
          />
          <Histogram values={values} />
        </ContentWrapper>
      </main>
    </div>
  );
}
