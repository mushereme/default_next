// import client, { previewClient } from "lib/sanity";

export const urlFor = (source) => {
  return null;
};

// 1= 0..3
// 2= 3..6
// 3= 6..9

export const getPaginatedPosts = async (page = 1, limit = 3) => {
  // const posts = await client.fetch(
  //   `*[_type=="post"]{_createdAt, title, subtitle, date, 'image':cover_image.asset->url,'slug':slug.current, "publisher":publisher->{title, "picture":picture.asset->url}} | order(date desc)[${
  //     page * limit
  //   }...${(page + 1) * limit}]`
  // );

  const posts = [];

  return posts;
};

export const getAllPosts = async () => {
  const posts = {};

  return posts;
};
