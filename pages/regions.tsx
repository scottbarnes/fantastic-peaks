// regions.tsx displays and links to all regions.
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import BreadCrumbs from "../components/breadcrumbs";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
// import { Region } from '../lib/regions';
import { regionsData, RegionProps } from "../lib/regions";

interface Props {
  regionData: RegionProps[];
}

const Regions = ({ regionData }: Props) => {
  const breadCrumbs = [
    {
      name: "Regions",
      link: "/regions",
      id: 3,
      isLast: true,
    },
  ];

  return (
    <Layout metaDescription="Select a region to see its peaks and passes">
      <Head>
        <title>FP: Regions</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs crumbs={breadCrumbs} />
        <p className="font-semibold text-2xl my-2">Regions</p>
        <div className="grid grid-cols-2 gap-4">
          {regionData.map((region) => (
            <Link
              key={region.slug}
              href={`/regions/${encodeURIComponent(region.slug)}`}
            >
              <a className="text-blue-700 hover:text-blue-900 hover:underline">
                {region.name}
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

// getStaticProps pre-renders the page at build time (it must be exported)
// to do so. Here it loads the region data and passes it as Props to
// Regions.
// "async" can go back in when this pulls from an API.
export const getStaticProps: GetStaticProps = async () => {
  // const regionData: RegionProps[] = getAllRegions();
  const regionData = await regionsData();

  if (!regionData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      regionData,
    },
  };
};

export default Regions;
