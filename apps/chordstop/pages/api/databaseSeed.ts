import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { prismaClient } from "../../prisma/prismaClient";
import chords from "../../chords.json";
// import artists from "../../artists.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const artistData = artists.map(({ id, ...rest }) => {
  //   return {
  //     ...rest,
  //     numericId: id,
  //   };
  // });

  const artists = await prismaClient.artist.findMany({});

  const chordData = await chords.map(async ({ id, artistId, ...rest }) => {
    return {
      ...rest,
      numericId: id,
      artistId: artists.filter(({ numericId }) => numericId === artistId)[0].id,
    };
  });
  console.log(chordData);

  // await prismaClient.artist.createMany({ data: artistData });
  await prismaClient.chord.createMany({
    data: chordData,
  });

  res.json({ done: true });
}
