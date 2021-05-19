// import { Image as ImageCloudinary } from "cloudinary-react";
import { isEmpty } from "lodash";
// import Image from "next/image";
import { buildUrl, extractPublicId } from "cloudinary-build-url";

export default function GoogleCloudinaryImage({
  image = "",
  width = "500",
  className = "",
  style,
}) {
  // https://res.cloudinary.com/dzih5nqhg/image/upload/v1617185235/newcar/kia/k5/2021/Kia-K5-2021-1600-03_qbmmai.jpg

  const src = image.value || "";
  const myCloudName = src.slice(
    src.indexOf("cloudinary.com/") + 15,
    src.indexOf("/image/upload")
  );

  if (isEmpty(src)) return null;

  const publicId = extractPublicId(src);

  const url =
    src.indexOf("cloudinary.com/") == -1
      ? src
      : buildUrl(publicId, {
          cloud: {
            cloudName: myCloudName,
          },
          transformations: {
            gravity: "face",
            quality: "auto",
            resize: {
              type: "fill",
              width: width,
            },
          },
        });

  return (
    <img
      src={url}
      alt={src}
      className={`rounded-md ${className}`}
      style={{
        ...style,
        ...JSON.parse(image.note || "{}"),
      }}
    />
  );
}
