// Display a list of <PassItem>

// import Link from 'next/link';
import PassItem, { PassProps } from "./passItem";

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react for help with the interfaces

type PassItemListProps = {
  passes: PassProps[];
};

const PassItemList = ({ passes }: PassItemListProps): JSX.Element => (
  <>
    {passes.map((p) => (
      <PassItem
        key={p.slug}
        name={p.name}
        elevations={p.elevations}
        class_rating={p.class_rating}
        description={p.description}
        slug={p.slug}
        region={p.region}
        region_slug={p.region_slug}
      />
    ))}
  </>
);

export default PassItemList;
