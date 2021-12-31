// Display a list of <PassItem>

import PassItem, { PassProps } from './passItem';

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react for help with the interfaces

interface PassesListProps {
  passes: PassProps[];
}

const PassesList = ({ passes }: PassesListProps): JSX.Element => (
  <>
    {passes.map((p) => (
      <PassItem
        key={p.slug}
        name={p.name}
        elevations={p.elevations}
        class_rating={p.class_rating}
        description={p.description}
        slug={p.slug}
      />
    ))}
  </>
);

export default PassesList;
