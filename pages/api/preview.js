import { getAllPosts, getPaginatedPosts } from "lib/api";

export default async (req, res) => {

  res.setPreviewData({ data: "test data" });

  res.writeHead(307, { Location: encodeURI(`/${req.query.slug}`) });
  res.end("Preview mode enabled");
};
