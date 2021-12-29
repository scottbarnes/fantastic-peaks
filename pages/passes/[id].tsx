// Template for individual pass pages.
import Head from 'next/head'
import Link from 'next/link'
// import { GetStaticProps } from 'next'

import BreadCrumbs from '../../components/breadcrumbs'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getAllPassIds, getPassData } from '../../lib/passes'

interface Pass {
  class_rating: string,
  description: string,
  elevations: string[],
  name: string,
  region: string,
  region_slug: string,
  slug: string,
}

interface Props {
  id: string
}

// Pass returns the Pass template page with data filled in via getStaticProps
// and the Next.js dynamic routing.
export default function Pass({ passData }: { passData: Pass }) {
  return (
    <Layout>
      <Head>
        <title>FP: {passData.name}</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs crumbs={[
          {name: 'Regions', link: '/regions', isLast: false },
          {name: passData.region, link: "/regions/" + passData.region_slug, isLast: false },
          {name: passData.name, link: '/', isLast: true },
        ]} />
        <p className="font-semibold text-2xl mt-2 text-center">{passData.name} ({passData.class_rating})</p>
        <div className="m:max-w-m justify-center flex">
          <p className="mt-2 max-w-prose">{passData.description}</p>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPassIds()
  return {
    paths,
    fallback: false
  }
}

// See https://github.com/microsoft/TypeScript/issues/9657 for help with the types.
// getStaticProps gets the pass data and passes it via props to the page function.
export async function getStaticProps({ params }: { params: Props }) {
  const passData = getPassData(params.id)
  return {
    props: {
      passData
    }
  }
}

