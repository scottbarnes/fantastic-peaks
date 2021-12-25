// Template for individual pass pages.

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

// Pass returns the Pass template page with data filled in via getStaticProps
// and the Next.js dynamic routing.
export default function Pass({ passData }: { passData: Pass }) {
  return (
    <div>
      <p>{passData.name}</p>
      <p>{passData.class_rating}</p>
      <p>{passData.description}</p>
    </div>
  )
}



{/* const PassItem: React.FC<Pass> = ({ name, elevations, class_rating, description, slug }) => ( */}
{/*   <div> */}
{/*     <p> */}
{/*       <Link href={`/passes/${encodeURIComponent(slug)}`}> */}
{/*         <a className="text-blue-700 hover:text-blue-900">{name}</a> */}
{/*       </Link> */}
{/*     </p> */}
{/*     <p>Elevation(s): {elevations.join(' ft.; ') + ' ft.'}</p> */}
{/*     <p>Class: {class_rating}</p> */}
{/*   </div> */}


{/*   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-start"> */}
{/*     <PassOverview passes={passData} /> */}
{/*   </div> */}
