// The routes list as displayed on /peaks/<slug>

import RouteItem, { RouteProps } from './routeItem';

type RouteItemProps = {
  routes: RouteProps[];
};

const RoutesList = ({ routes }: RouteItemProps): JSX.Element => (
  <>
    {routes.map((route) => (
      <RouteItem
        key={route.slug}
        name={route.name}
        class_rating={route.class_rating}
        description={route.description}
        slug={route.slug}
        aka={route.aka}
      />
    ))}
  </>
);

export default RoutesList;
