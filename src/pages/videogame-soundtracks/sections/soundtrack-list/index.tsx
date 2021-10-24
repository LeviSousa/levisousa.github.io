import { SOUNDTRACKS } from '../../assets/soundtracks';

type SoundtrackListProps = {
  setPlayingVideoId: (videoId: string) => void;
}

export const SoundtrackList = ({ setPlayingVideoId }: SoundtrackListProps) => (
  <ul>
    {Object.values(SOUNDTRACKS).map((soundtrack) => (
      <li key={soundtrack.youtubeId}>
        <button
          type="button"
          onClick={() => setPlayingVideoId(soundtrack.youtubeId)}
        >
          {soundtrack.name}
        </button>
      </li>
    ))}
  </ul>
);
