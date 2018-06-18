import { api } from '../utils/constants';

export function getYouTubeId() {
  return fetch(`${api.base}regions/data/youtube?token=${api.token}`)
    .then(data => data.json())
    .then(data => data.videoId);
}
