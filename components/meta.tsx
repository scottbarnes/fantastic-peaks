import Head from 'next/head';

type Props = {
  description: string;
};

// Meta defines the meta description as taken from the page that calls
// <Layout />
const Meta = ({ description }: Props) => (
  <Head>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Meta;
