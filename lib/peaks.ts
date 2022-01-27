// Tolls for working witht peaks, specifically to get their Ids and data for
// getStaticPaths and getStaticProps

// introduced to force a linting failure.
// import fs from "fs";
// import path from 'path';
import { PeakProps } from "../components/peakItem";

// const dataDirectory = path.join(process.cwd(), 'dataFiles');
// const dataBuffer = fs.readFileSync(
// `${dataDirectory}/${process.env.PEAK_FILE || 'error reading file'}`
// );
// const peaks: PeakProps[] = JSON.parse(dataBuffer.toString()) as PeakProps[];

const peaksData = async () => {
  // const response = await fetch('http://localhost:8080/v1/peaks');
  const response = await fetch(
    `${process.env.PEAKS_API || "error reading file"}`
  );
  const json = (await response.json()) as Promise<PeakProps[]>;
  return json;
};

// getAllPeakIds returns an array of all possible peak objects and of their
// slugs as Ids.
export const getAllPeakIds = async () => {
  const peakData = await peaksData();
  return peakData.map((peak) => ({
    params: {
      id: peak.slug,
    },
  }));
};

// getPeakData returns the object matching the id/slug.
export const getPeakData = async (id: string): PeakProps => {
  const peaks = await peaksData();
  const peak = peaks.filter((p) => p.slug === id);
  return {
    ...peak[0],
  };
};
