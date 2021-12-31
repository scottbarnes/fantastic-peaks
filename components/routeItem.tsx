// An individual route item as displayed in /peaks/<slug>

export type RouteProps = {
  name: string;
  aka: string;
  class_rating: string;
  description: string;
  slug: string;
};

const RouteItem: React.FC<RouteProps> = ({
  name,
  slug,
  class_rating,
  description,
}) => (
  <div className="">
    <p className="max-w-prose mt-4 font-semi-bold text-xl">
      {name}. ({class_rating})
    </p>
    <p className="max-w-prose">{description}</p>
  </div>
);

export default RouteItem;
