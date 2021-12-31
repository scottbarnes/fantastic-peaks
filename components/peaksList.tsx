// The peak list as displayed in /regions/<slug>
// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react
// for help with the interfaces

import PeakItem, { PeakProps } from "./peakItem";

interface PeakItemProps {
  peaks: PeakProps[];
}

const PeaksList: React.FC<PeakItemProps> = ({ peaks }) => (
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
