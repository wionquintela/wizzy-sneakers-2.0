export default function Button({ properties, buttonText, link }) {
  return (
    <>
      <button
        className={`border p-3 text-sm buttonLinks text-black ${properties}`}
      >
        <a href={link}>{buttonText}</a>
      </button>
    </>
  );
}
