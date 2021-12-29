// Display a list of <PassItem>

import Link from 'next/link'
import PassItem from './passItem'
import PassProps from './passItem'

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react for help with the interfaces

interface PassItemListProps {
  passes: PassProps[],
}

const PassItemList: React.FC<PassItemListProps> = ({ passes }: PassItemListProps) => (
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

export default PassItemList
