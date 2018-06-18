import dayjs from 'dayjs';
import { api } from '../utils/constants';

const eventsEndpoint = `${api.base}/collections/get/events?token=${api.token}`;

/**
 * Fetches all events
 * @param filter
 * @returns {Promise<Response>}
 */
export function getEvents(filter = null) {
  const init = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filter,
      sort: { date: -1 },
    }),
  };

  return fetch(eventsEndpoint, init)
    .then(data => data.json())
    .then(data => data.entries);
}

export function getFutureEvents() {
  return getEvents({
    date: { $gt: dayjs().subtract(1, 'day').format('YYYY-MM-DD') },
  });
}

export function getPastEvents() {
  return getEvents({
    date: { $lt: dayjs().format('YYYY-MM-DD') },
  });
}
