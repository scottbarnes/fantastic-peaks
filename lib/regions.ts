// Tools for working with regions.

// import fs from 'fs';
// import path from 'path';
import { PassProps } from '../components/passItem';
import { PeakProps } from '../components/peakItem';

export type RegionProps = {
  slug: string;
  name: string;
  passes: PassProps[];
  peaks: PeakProps[];
};

// const dataDirectory = path.join(process.cwd(), 'dataFiles');
// const dataBuffer = fs.readFileSync(
//   `${dataDirectory}/${process.env.REGION_FILE || 'error reading file'}`,
// );
// const regions = JSON.parse(dataBuffer.toString()) as RegionProps[];
//
export const regionsData = async () => {
  const response = await fetch(
    `${process.env.REGIONS_API || 'error reading file'}`,
  );
  const json = (await response.json()) as Promise<RegionProps[]>;
  return json;
};

// getAllregions returns an array of all regions, though in truth exporting the
// constant would have worked. getStaticProps needs this.
// export const getAllRegions = () => regionsData();

// getAllRegionIds gets the slugs for all possible regions and returns them as:
// params: { id: region.slug }
export const getAllRegionIds = async () => {
  const regionData = await regionsData();
  return regionData.map((region) => ({
    params: {
      id: region.slug,
    },
  }));
};

// getRegiondata returns the region object matching the id/slug.
export const getRegionData = async (id: string) => {
  const regions = await regionsData();
  const region = regions.filter((r) => r.slug === id);
  return {
    ...region[0],
  };
};
