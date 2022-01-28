// An individual peak item as displayed in /regions/<slug>

import Link from "next/link";
import { RouteProps } from "./routeItem";

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react
// for help with the interfaces

export type PeakProps = {
  name: string;
  elevations: string[];
  description: string;
  slug: string;
  region: string;
  region_slug: string;
  routes: RouteProps[];
};

const PeakItem = ({ name, elevations, slug }: PeakProps): JSX.Element => (
  <div>
    <p>
      <Link href={`/peaks/${encodeURIComponent(slug)}`}>
        <a className="text-blue-700 hover:text-blue-900">{name}</a>
      </Link>
    </p>
    <p>{`Elevation(s): ${elevations.join(" ft.; ")} ft.`}</p>
  </div>
);

export default PeakItem;
