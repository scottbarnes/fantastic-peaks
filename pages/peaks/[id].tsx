// Template for individual peak pages.

import Head from 'next/head'
import BreadCrumbs  from '../../components/breadcrumbs'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout  from '../../components/layout'
import { getAllPeakIds, getPeakData } from '../../lib/peaks'
import metaDescriptionMaker from '../../lib/metaDescriptionMaker'
import { PeakProps } from '../../components/peakItem'
import RoutesList from '../../components/routesList'

type Props = {
  id: string,
}

const PeakPage = ({name, description, region, region_slug, elevations, routes}: PeakProps) => {
  const metaDisc = metaDescriptionMaker(name, description)

  return (
    <Layout metaDescription={metaDisc}>
      <Head>
        <title>FP: {name}</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs crumbs={[
          {name: 'Regions', link: '/regions', isLast: false },
          {name: region, link: '/regions/' + region_slug, isLast: false },
          {name: name, link: '/', isLast: true },
        ]} />

        <p className="font-semibold text-2xl m:text-3xl mt-2 text-center">{name} ({elevations.join(' ft.; ') + ' ft.'})</p>
        <div className="m:max-w-m justify-center flex">
          <p className="mt-2 max-w-prose">{description}</p>
        </div>
        <div className="justify-items-center grid">
          <div className="justify-items-left">
          <RoutesList routes={routes} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPeakIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: Props }) {
  const peakData = getPeakData(params.id)
  return {
    props: {
      ...peakData,
    }
  }
}

export default PeakPage
