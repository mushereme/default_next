export default function My404() {
  return (
    <div
      className="w-screen h-screen bg-center bg-no-repeat bg-cover flex items-center"
      style={{
        backgroundImage: `url(https://pbs.twimg.com/media/BUxylabCcAAdLMg.jpg:large)`,
      }}
    >
      <div className="w-2/5 mx-auto text-white text-2xl text-center font-normal">
        <div className="text-4xl font-bold mb-8">404</div>
        Уучлаарай, таны хүссэн хуудас олдсонгүй.
      </div>
    </div>
  );
}
