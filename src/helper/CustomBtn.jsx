export default function CustomBtn({ children, onClick, type, loading, className }) {
  return (
    <button
      type={type ? type : "submit"}
      className={`flex justify-center ${className} ${loading ? "opacity-80 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
      onClick={!loading && onClick}
    >
      {loading ? (
        <div className="spinner w-[24px] h-[24px]">
          <img src="/logo.webp" className="logo w-[24px] h-[24px] object-cover" alt="Art Coin Logo" />
          <div className="circle  w-[24px] h-[25px]"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
