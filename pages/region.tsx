import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'

import { readFile } from 'fs'
import path from 'path'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import BreadCrumbs from '../components/breadcrumbs'
// import jsonParser from '../lib/jsonParser'

const regionName = "The Palisades Region"
const regionId = "the-palisades-region-4efc4e302f4c"
// const passData = [
// {name: 'Pass 1', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 1', slug: 'slug-1'},
// {name: 'Pass 2', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 2', slug: 'slug-2'},
// {name: 'Pass 3', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 3', slug: 'slug-3'},
// {name: 'Pass 4', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 4', slug: 'slug-4'},
// {name: 'Pass 5', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 5', slug: 'slug-5'},
// {name: 'Pass 6', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 6', slug: 'slug-6'},
// {name: 'Pass 7', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 7', slug: 'slug-7'},
// {name: 'Pass 8', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 8', slug: 'slug-8'},
// {name: 'Pass 9', elevations: [ '1234', '2342', ], class_rating: '1', description: 'this is pass 9', slug: 'slug-9'},
// ]

const peakData = [
  {name: 'Peak 1', elevations: ['1234', '2542',], slug: 'slug 1'},
  {name: 'Peak 2', elevations: ['1234', '2542',], slug: 'slug 2'},
  {name: 'Peak 3', elevations: ['1234', '2542',], slug: 'slug 3'},
  {name: 'Peak 4', elevations: ['1234', '2542',], slug: 'slug 4'},
  {name: 'Peak 5', elevations: ['1234', '2542',], slug: 'slug 5'},
  {name: 'Peak 6', elevations: ['1234', '2542',], slug: 'slug 6'},
  {name: 'Peak 7', elevations: ['1234', '2542',], slug: 'slug 7'},
  {name: 'Peak 8', elevations: ['1234', '2542',], slug: 'slug 8'},
  {name: 'Peak 9', elevations: ['1234', '2542',], slug: 'slug 9'},
]

const breadCrumbs = [
  {name: 'Regions', link: 't2', id: '3', isLast: false},
  {name: regionName, link: 't3', id: '5', isLast: true},
]

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react for help with the interfaces.

interface Pass {
  name: string,
  elevations: string[],
  class_rating: string,
  description: string,
  slug: string,
}

interface PassProps {
  passes: Pass[],
}

interface Peak {
  name: string,
  elevations: string[];
  slug: string,
}

interface PeakProps {
  peaks: Peak[],
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

const Range = ({ passData }: PassProps) => {
  return (
    <Layout>
      <Head>
        <title>FP: {regionName}</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs crumbs={breadCrumbs} />
        <p className="font-semibold text-2xl mt-2">{regionName}</p>
        <p className="font-semibold text-xl mb-1">Passes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-start">
          <PassOverview passes={passData} />
        </div>
        <p className="font-semibold text-xl mb-1">Peaks</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-center">
          <PeakOverview peaks={peakData} />
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const passData = require('../dataFiles/output-passes.json')

  if (!passData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      passData,
    },
  }
}

export default Range
