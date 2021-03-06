// Template for individual peak pages.

import Head from 'next/head';
import BreadCrumbs from '../../components/breadcrumbs';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { getAllPeakIds, getPeakData } from '../../lib/peaks';
import metaDescriptionMaker from '../../lib/metaDescriptionMaker';
import { PeakProps } from '../../components/peakItem';
import RoutesList from '../../components/routesList';

type Props = {
  id: string;
};

const PeakPage = ({
  name,
  description,
  region,
  region_slug,
  elevations,
  routes,
}: PeakProps) => {
  const metaDisc = metaDescriptionMaker(
    name,
    description || 'error finding description',
  );
  const regionWithDefault = region ?? 'error finding region'; // Because region is optional.

  return (
    <Layout metaDescription={metaDisc}>
      <Head>
        <title>{`FP: ${name}`}</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs
          crumbs={[
            { name: 'Regions', link: '/regions', isLast: false },
            {
              name: regionWithDefault,
              link: `/regions/${region_slug}`,
              isLast: false,
            },
            { name, link: '/', isLast: true },
          ]}
        />

        <p className="font-semibold text-2xl m:text-3xl mt-2 text-center">
          {`${name} (${elevations.join(' ft.; ')} ft.)`}
        </p>
        <div className="m:max-w-m justify-center flex">
          <p className="mt-2 max-w-prose">{description}</p>
        </div>
        <div className="justify-items-center grid">
          <div className="justify-items-left">
            <RoutesList routes={routes} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

// replace "async" when calling from API.
export async function getStaticPaths() {
  const paths = await getAllPeakIds();
  return {
    paths,
    fallback: false,
  };
}

// replace "async" when calling from API.
export async function getStaticProps({ params }: { params: Props }) {
  const peakData = await getPeakData(params.id);
  return {
    props: {
      ...peakData,
    },
  };
}

export default PeakPage;
