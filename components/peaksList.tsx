// The peak list as displayed in /regions/<slug>
// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react
// for help with the interfaces

import PeakItem from './peakItem';

type PeakProps = {
  // peaks: PeakProps[];
  slug: string;
  name: string;
  elevations: string[];
};

type PeakListProps = {
  peaks: PeakProps[];
};

const PeaksList = ({ peaks }: PeakListProps): JSX.Element => (
  <>
    {peaks.map((p) => (
      <PeakItem
        key={p.slug}
        name={p.name}
        elevations={p.elevations}
        slug={p.slug}
      />
    ))}
  </>
);

export default PeaksList;
