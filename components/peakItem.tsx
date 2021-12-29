// An individual peak item as displayed in /regions/<slug>

import Link from 'next/link'

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react
// for help with the interfaces

export interface PeakProps {
  name: string,
  elevations: string[],
  description?: string,
  slug: string
}

const PeakItem: React.FC<PeakProps> = ({ name, elevations, slug }) => (
  <div>
    <p>
      <Link href={`/peaks/${encodeURIComponent(slug)}`}>
        <a className="text-blue-700 hover:text-blue-900">{name}</a>
      </Link>
    </p>
    <p>Elevation(s): {elevations.join(' ft.; ') + ' ft.'}</p>
  </div>
)

export default PeakItem
