// Template for indivdual region pages.
import Link from 'next/link'
import Head from 'next/head'

import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
// import { GetStaticProps } from 'next'
import BreadCrumbs from '../../components/breadcrumbs'
import { getRegionData, getAllRegionIds, RegionProps} from '../../lib/regions'
import PassesList from '../../components/passesList'
import PeaksList from '../../components/peaksList'

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react
// for help with the interfaces.

interface Peak {
  name: string,
  elevations: string[];
  slug: string,
}

interface PeakProps {
  peaks: Peak[],
}

interface Props {
  id: string,
}

const Region = ({ name, passes, peaks }: RegionProps) => {
  const breadCrumbs = [
    {name: 'Regions', link: '/regions', id: 3, isLast: false},
    {name: name, link: 't3', id: '5', isLast: true},
  ]

  console.log(`Passes are: {passes}`)


  return (
    <Layout>
      <Head>
        <title>FP: {name}</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs crumbs={breadCrumbs} />
        <p className="font-semibold text-2xl mt-2">{name}</p>
        <p className="font-semibold text-xl mb-1 text-center">Passes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-start">
          <PassesList passes={passes} />
        </div>
        <p className="font-semibold text-xl mb-1 text-center">Peaks</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-start">
          <PeaksList peaks={peaks} />
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllRegionIds()
  return {
    paths,
    fallback: false
  }
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
export async function getStaticProps({ params }: { params: Props }) {
  const regionData = getRegionData(params.id)

  if (!regionData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...regionData,
    },
  }
}

export default Region
