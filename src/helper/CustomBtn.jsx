import ArtLoading from "../components/ArtLoading";

export default function CustomBtn({ children, onClick, type, loading, className, disable }) {
  return (
    <button
      type={type ? type : "submit"}
      className={`flex justify-center ${className} ${loading || !disable ? "opacity-60 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
      onClick={!loading && disable ? onClick : ""}
    >
      {loading ? <ArtLoading /> : <>{children}</>}
    </button>
  );
}
