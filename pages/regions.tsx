// regions.tsx displays and links to all regions.
import Head from 'next/head'
import Link from 'next/link'
import BreadCrumbs, { BreadCrumb } from '../../components/breadcrumbs'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { Region } from '../lib/regions'
import { getAllRegions } from '../lib/regions'
import { GetStaticProps } from 'next'

interface Props {
  regionData: Region[],
}

const Regions = ({ regionData }: Props) => {
  return (
  <Layout>
    <Head>
      <title>FP: Regions</title>
    </Head>
    <Container>
      <Header />
        <p className="font-semibold text-2xl my-2">Regions</p>
  <div className="grid grid-cols-2 gap-4">
    {regionData.map((region) => {
      return (
        <Link key={region.slug} href={`/regions/${encodeURIComponent(region.slug)}`}>
          <a className="text-blue-700 hover:text-blue-900 hover:underline">{region.name}</a>
        </Link>
      )
    })}
  </div>
    </Container>
  </Layout>
  )
}


// getStaticProps pre-renders the page at build time (it must be exported)
// to do so. Here it loads the region data and passes it as Props to
// Regions.
export const getStaticProps: GetStaticProps = async () => {
  const regionData: Region[] = getAllRegions()

  if (!regionData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      regionData
    }
  }
}

export default Regions
