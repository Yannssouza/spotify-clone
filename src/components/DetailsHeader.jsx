import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative flex w-full flex-col">
      <div className="h-28 w-full bg-gradient-to-l from-transparent to-black sm:h-48" />
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={
            artistId
              ? artist?.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          className="h-28 w-28 rounded-full border-2 object-cover shadow-xl shadow-black sm:h-48 sm:w-48"
        />
        <div className="ml-5">
          <p className="text-xl font-bold text-white sm:text-3xl">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to="">
              <p className="mt-2 text-base text-gray-400">
                {songData?.subtitle}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
