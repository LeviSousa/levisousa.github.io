import { useState } from 'react';
import { SoundtrackList, SoundtrackPlayer } from './sections';

export const VideogameSoundtracks = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string>();

  return (
    <>
      {playingVideoId
      && <SoundtrackPlayer playingVideoId={playingVideoId} />}
      <SoundtrackList setPlayingVideoId={setPlayingVideoId} />
    </>
  );
};
