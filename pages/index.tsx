import Head from "next/head";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Go Cars</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
        />
      </Head>

      <img
        className="w-full h-full object-cover absolute inset-0"
        src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1637120985/gocars/54848_h0cxfx.png"
      />
      <nav
        id="nav"
        className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
      >
        <div className="p-4">
          <div className="font-extrabold tracking-widest text-xl">
            <a
              href="#"
              className="transition duration-500 hover:text-green-500"
            >
              Go Cars
            </a>
          </div>
        </div>

        <div className="p-4 flex flex-row justify-between font-bold">
          <a
            id="hide-after-click"
            href="https://www.facebook.com/GoCarsMn"
            className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500"
          >
            Facebook
          </a>
        </div>
      </nav>

      <header
        id="up"
        className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative"
      >
        <div className="h-screen flex items-center justify-center">
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              Авто Сэлбэг
            </h1>
            <h2 className="text-gray-200 font-semibold text-lg leading-tight">
              Янз бүрийн автомашины янз бүрийн сэлбэгүүдийг дэлхийн хаанаас ч
              нийлүүлнэ.
            </h2>
            <div className="center">
              <Link href="/order">
                <button className="px-5 py-3 my-5 mx-2 bg-green-700 hover:bg-green-800 font-bold text-white rounded border-2 border-transparent hover:border-green-800 shadow-md transition duration-500 md:text-xl">
                  Захиалга өгөх
                </button>
              </Link>
            </div>
            <div className="inline-flex mt-10">
              <p className="text-green-400 w-3/5 mx-auto">
                Манай цахим худалдаа болон захиалгын веб сайт хийгдэж байгаа тул
                та бараа худалдан авах болон захиалах бол
                https://www.facebook.com/GoCarsMn линкээр орж мессенжерээр
                чатлах болон 95283779, 99115892 дугаарын утсаар холбогдохыг
                хүсье.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}