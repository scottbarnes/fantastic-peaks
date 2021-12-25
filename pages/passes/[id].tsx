// Template for individual pass pages.
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import BreadCrumbs, { BreadCrumb } from '../../components/breadcrumbs'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getAllPassIds, getPassData } from '../../lib/passes'

interface Pass {
  name: string,
  elevations: string[],
  class_rating: string,
  description: string,
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
          {name: 'Passes', link: '/', isLast: false },
          {name: 'Regions', link: '/', isLast: false },
          {name: passData.name, link: '/', isLast: true },
        ]} />
        <p className="font-semibold text-2xl mt-2">{passData.name} ({passData.class_rating})</p>
        <p className="mt-2">{passData.description}</p>
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

