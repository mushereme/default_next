import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { findIndex, isEmpty } from "lodash";

export default function WidgetHeadMain({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;
  const router = useRouter();

  console.log("HeadMain mainConfig", mainConfig);
  console.log("HeadMain header", header);
  console.log("HeadMain rows", rows);
  console.log("HeadMain router", router);

  // console.log("myMenuIndex", myMenuIndex);

  return (
    <>
      <Head>
        <title>{mainConfig?.title?.value || "KT - Landing Page System"}</title>
        <link rel="icon" href={mainConfig?.favicon?.value || "/favicon.ico"} />
        {mainConfig?.color?.value}
        {mainConfig?.background?.value}
        {mainConfig?.font?.value}

        {/* <meta name="keywords" content="your, tags" />
        <meta name="description" content="150 words" />
        <meta property="fb:app_id" content="186294318100220" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Нийтлэл, мэдээ" />
        <meta
          property="og:description"
          content="Авто ертөнцийн сонин сайхнаас"
        />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="mn_MN" /> */}

        {/* <OGMeta />
        <StandardMeta /> */}
      </Head>
    </>
  );

  const OGMeta = () => {
    return (
      <>
        <meta name="og:title" content="The Rock" />
        <meta name="og:type" content="movie" />
        <meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
        <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
        <meta name="og:site_name" content="IMDb" />
        <meta
          name="og:description"
          content="A group of U.S. Marines, under command of..."
        />

        <meta name="fb:page_id" content="43929265776" />

        <meta name="og:email" content="me@example.com" />
        <meta name="og:phone_number" content="650-123-4567" />
        <meta name="og:fax_number" content="+1-415-123-4567" />

        <meta name="og:latitude" content="37.416343" />
        <meta name="og:longitude" content="-122.153013" />
        <meta name="og:street-address" content="1601 S California Ave" />
        <meta name="og:locality" content="Palo Alto" />
        <meta name="og:region" content="CA" />
        <meta name="og:postal-code" content="94304" />
        <meta name="og:country-name" content="USA" />

        <meta property="og:type" content="game.achievement" />
        <meta property="og:points" content="POINTS_FOR_ACHIEVEMENT" />

        <meta property="og:video" content="http://example.com/awesome.swf" />
        <meta property="og:video:height" content="640" />
        <meta property="og:video:width" content="385" />
        <meta
          property="og:video:type"
          content="application/x-shockwave-flash"
        />
        <meta property="og:video" content="http://example.com/html5.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video" content="http://example.com/fallback.vid" />
        <meta property="og:video:type" content="text/html" />

        <meta property="og:audio" content="http://example.com/amazing.mp3" />
        <meta property="og:audio:title" content="Amazing Song" />
        <meta property="og:audio:artist" content="Amazing Band" />
        <meta property="og:audio:album" content="Amazing Album" />
        <meta property="og:audio:type" content="application/mp3" />
      </>
    );
  };

  const StandardMeta = () => {
    return (
      <>
        <meta name="subject" content="KT Widget" />
        <meta name="copyright" content="Copyright KT.mn" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        <meta name="revised" content="Sunday, July 18th, 2021, 5:15 pm" />
        <meta name="abstract" content="" />
        <meta name="topic" content="" />
        <meta name="summary" content="" />
        <meta name="Classification" content="Business" />
        <meta name="author" content="Jargal, jargal@kt.mn" />
        <meta name="designer" content="" />
        <meta name="copyright" content="Copyright 2021" />
        <meta name="reply-to" content="jargal@kt.mn" />
        <meta name="owner" content="Jargal" />
        <meta name="url" content="https://www.kt.mn" />
        <meta name="identifier-URL" content="https://www.kt.mn" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Content" />
        <meta name="coverage" content="Worldwide, Mongolia" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Cache-Control" content="no-cache" />
      </>
    );
  };
}
