// Tools for working with passes, specifically to get their Ids and data for
// getStaticPaths and getStaticProps.

// import fs from 'fs';
// import path from 'path';
import { PassProps } from "../components/passItem";

// const dataDirectory = path.join(process.cwd(), 'dataFiles');
// const dataBuffer = fs.readFileSync(
// `${dataDirectory}/${process.env.PASS_FILE || 'error reading file'}`
// );
// const passes = JSON.parse(dataBuffer.toString()) as PassProps[];

const passesData = async () => {
  const response = await fetch(
    `${process.env.PASSES_API || "error reading file"}`
  );
  const json = (await response.json()) as Promise<PassProps[]>;
  return json;
};

export const getAllPassIds = async () => {
  // const passes = await passesData;
  const passData = await passesData();
  return passData.map((p) => ({
    params: {
      id: p.slug,
    },
  }));
};

// getPassData returns the pass object matching the id/slug.
export const getPassData = async (id: string): PassProps => {
  const passes = await passesData();
  const pass = passes.filter((p) => p.slug === id);
  return {
    ...pass[0],
  };
};
