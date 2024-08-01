export default function CustomBtn({ children, onClick, type, loading }) {
  return (
    <button
      type={type ? type : "submit"}
      className={`flex justify-center w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary ${
        loading ? "opacity-80 cursor-not-allowed" : "opacity-100 cursor-pointer"
      }`}
      onClick={!loading && onClick}
    >
      {loading ? (
        <div className="spinner w-[30px] h-[30px]">
          <img src="/logo.webp" className="logo w-[30px] h-[30px] object-cover" alt="Art Coin Logo" />
          <div className="circle  w-[30px] h-[30px]"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
