// Template for individual pass pages.
import Head from "next/head";

import BreadCrumbs from "../../components/breadcrumbs";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getAllPassIds, getPassData } from "../../lib/passes";
import metaDescriptionMaker from "../../lib/metaDescriptionMaker";
import { PassProps } from "../../components/passItem";

interface Props {
  id: string;
}

// Pass returns the Pass template page with data filled in via getStaticProps
// and the Next.js dynamic routing.
// export default function Pass({ passData }: { passData: Pass }) {
const PassPage = ({
  name,
  region,
  region_slug,
  description,
  class_rating,
  elevations,
}: PassProps) => {
  const metaDesc = metaDescriptionMaker(name, description);

  return (
    <Layout metaDescription={metaDesc}>
      <Head>
        <title>FP: {name}</title>
      </Head>
      <Container>
        <Header />
        <BreadCrumbs
          crumbs={[
            { name: "Regions", link: "/regions", isLast: false },
            { name: region, link: "/regions/" + region_slug, isLast: false },
            { name: name, link: "/", isLast: true },
          ]}
        />

        <p className="font-semibold text-2xl mt-2 text-center">
          {name} ({class_rating}) ({elevations.join(" ft.; ") + " ft."})
        </p>
        <div className="m:max-w-m justify-center flex">
          <p className="mt-2 max-w-prose">{description}</p>
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPassIds();
  return {
    paths,
    fallback: false,
  };
}

// See https://github.com/microsoft/TypeScript/issues/9657 for help with the types.
// getStaticProps gets the pass data and passes it via props to the page function.
export async function getStaticProps({ params }: { params: Props }) {
  const passData = getPassData(params.id);
  return {
    props: {
      ...passData,
    },
  };
}

export default PassPage;
