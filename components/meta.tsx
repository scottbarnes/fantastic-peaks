import Head from 'next/head'

type Props = {
  description: string
}

const Meta = ({ description }: Props) => (
  <Head>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

export default Meta
