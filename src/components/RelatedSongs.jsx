import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="text-3xl font-bold text-white">Related Songs:</h1>
    <div className="mt-6 flex w-full flex-col">
      {data?.tracks ? (
        data?.tracks?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))
      ) : (
        <p className="my-1 text-base text-gray-400">Sorry, no related songs</p>
      )}
    </div>
  </div>
);

export default RelatedSongs;
