import Head from 'next/head';
import MessageCounter from '../components/MessageCounter';
import Navbar from '../components/Navbar';
import Histogram from '../components/Histogram';

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/values');
  return {
    props: { values: await response.json() }
  };
}

export default function Home({ values }: { values: any }) {
  return (
    <div>
      <Head>
        <title>Stress Alert | Dashboard</title>
        <meta name="description" content="Stress Alert dashboard" />
      </Head>
      <main>
        <Navbar />
        <div className="mx-auto max-w-[1440px] px-4 w-full py-10">
          <div className="flex flex-row">
            <Histogram className="flex-1" values={values} />
          </div>
        </div>
      </main>
    </div>
  );
}
