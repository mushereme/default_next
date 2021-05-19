import EditorBody from "components/Editor/EditorBody";

export default function NewsDetail({ item }) {
  return (
    <div className="w-full">
      <div
        className="w-full h-48 md:h-64 lg:h-72 xl:h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${item.imagemain || ""})`,
        }}
      ></div>
      <div className="max-w-screen-sm mx-auto w-full pt-16 px-4">
        <div className="font-bold text-2xl">{item.title}</div>
        <div className="leading-6 mt-12 text-gray-700">
          <EditorBody myBody={item.body} />
        </div>
      </div>
      <div className="max-w-screen-sm mx-auto w-full bg-yellow-50 rounded-lg p-12">
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </div>
    </div>
  );
}
