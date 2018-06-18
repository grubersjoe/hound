import { api } from '../utils/constants';

export function getEvents() {
  return fetch(`${api.base}collections/get/events?token=${api.token}`)
    .then(data => data.json());
}
