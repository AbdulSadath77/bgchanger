export default function Button({ changeColor, tc = "black", bgc }) {
  return (
    <>
      <button
        className="w-40 rounded-full outline-none px-4 py-2 shadow-lg text-white font-semibold"
        style={{ color: tc, backgroundColor: bgc }}
        onClick={() => changeColor(bgc)}
      >
        {bgc}
      </button>
    </>
  );
}
