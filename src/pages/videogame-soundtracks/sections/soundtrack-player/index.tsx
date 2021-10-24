import { YoutubePlayer } from '../../../../components/youtube-player';

type SoundtrackPlayerProps = {
  playingVideoId: string;
}

export const SoundtrackPlayer = ({ playingVideoId }: SoundtrackPlayerProps) => (
  <YoutubePlayer videoId={playingVideoId} />
);
