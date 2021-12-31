// An individual pass item as displayed in /regions/<slug>

import Link from "next/link";

// Thanks to https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react
// for help with the interfaces

export type PassProps = {
  name: string;
  elevations: string[];
  class_rating: string;
  description: string;
  slug: string;
  region: string;
  region_slug: string;
};

const PassItem: React.FC<PassProps> = ({
  name,
  elevations,
  class_rating,
  slug,
}) => (
  <div>
    <p>
      <Link href={`/passes/${encodeURIComponent(slug)}`}>
        <a className="text-blue-700 hover:text-blue-900">{name}</a>
      </Link>
    </p>
    <p>Elevation(s): {elevations.join(" ft.; ") + " ft."}</p>
    <p>Class: {class_rating}</p>
  </div>
);

export default PassItem;
