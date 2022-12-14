import { Card } from 'antd';
import Head from 'next/head';
import Histogram from '../components/Histogram';
import Navbar from '../components/Navbar';
import PieChart from '../components/Pie';
import MessageCounter from '../components/MessageCounter';
import GaugeChart from '../components/Gauge';

const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://stress-alert.ew.r.appspot.com',
  timeout: 5000
});

export async function getStaticProps() {
  const { data } = await instance.get('/stress-values');
  return {
    props: { values: data, revalidate: 30 }
  };
}

export default function Home({ values }: { values: any }) {
  return (
    <div>
      <Head>
        <title>Stress Alert Dashboard</title>
        <meta name="description" content="Stress Alert dashboard" />
      </Head>
      <main>
        <Navbar></Navbar>
        <div className="mx-auto max-w-[1440px] px-4 w-full py-10">
          <div className="md:grid grid-cols-2 gap-4">
            <Card>
              <GaugeChart className={'col-span-2'} values={values} />
              <MessageCounter values={values} />
            </Card>
            <Card title="Stressful messages by channels">
              <PieChart values={values} />
            </Card>
            <Card className="col-span-2" title="Stressflow">
              <Histogram values={values} />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
