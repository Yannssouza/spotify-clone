import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading Songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="sm:flex-flow mt-4 mb-10 flex w-full flex-col items-center justify-between">
        <h2 className="text-left text-3xl font-bold text-white">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="mt-5 rounded-lg bg-black p-3 text-sm text-gray-300 outline-none sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data?.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
