// Template for indivdual region pages.
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'

import { readFile } from 'fs'
import path from 'path'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import BreadCrumbs from '../../components/breadcrumbs'
import { getRegionData, getAllRegionIds, Region} from '../../lib/regions'


// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react for help with the interfaces.


interface RegionProps {
  passes: Region[],
}

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



const PassItem: React.FC<Pass> = ({ name, elevations, class_rating, description, slug }) => (
  <div>
    <p>
      <Link href={`/passes/${encodeURIComponent(slug)}`}>
        <a className="text-blue-700 hover:text-blue-900">{name}</a>
      </Link>
    </p>
    <p>Elevation(s): {elevations.join(' ft.; ') + ' ft.'}</p>
    <p>Class: {class_rating}</p>
  </div>
)

const PassOverview: React.FC<PassProps> = ({ passes }: PassProps) => (
  <>
    {passes.map((p) =>
    <PassItem
      key={p.slug}
      name={p.name}
      elevations={p.elevations}
      class_rating={p.class_rating}
      description={p.description}
      slug={p.slug}
    />
               )}
  </>
)

const PeakItem: React.FC<Peak> = ({ name, elevations, slug }) => (
  <div>
    <p>
      <Link href={`/peaks/${encodeURIComponent(slug)}`}>
        <a className="text-blue-700 hover:text-blue-900">{name}</a>
      </Link>
    </p>
    <p>Elevation(s): {elevations.join(' ft.; ') + ' ft.'}</p>
  </div>
)

const PeakOverview: React.FC<PeakProps> = ({ peaks }) => (
  <>
    {peaks.map((p) =>
    <PeakItem
      key={p.slug}
      name={p.name}
      elevations={p.elevations}
      slug={p.slug}
    />
              )}
  </>
)

const Region = ({ regionData }: RegionProps) => {
  console.log(regionData.passes)
  const breadCrumbs = [
    {name: 'Regions', link: '/regions', id: 3, isLast: false},
    {name: regionData.name, link: 't3', id: '5', isLast: true},
]

  return (
    <Layout>
      <Head>
        <title>FP: {regionData.name}</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs crumbs={breadCrumbs} />
        <p className="font-semibold text-2xl mt-2">{regionData.Name}</p>
        <p className="font-semibold text-xl mb-1 text-center">Passes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-start">
          <PassOverview passes={regionData.passes} />
        </div>
        <p className="font-semibold text-xl mb-1 text-center">Peaks</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-start">
          <PeakOverview peaks={regionData.peaks} />
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
  // const regionData = require('../dataFiles/output-passes.json')
  const regionData = getRegionData(params.id)

  if (!regionData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      regionData,
    },
  }
}

export default Region
