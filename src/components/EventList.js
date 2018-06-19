/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { getEvents, getFutureEvents, getPastEvents } from '../services/events';
import { dateFormat, timeFormat } from '../utils/constants';

class EventList extends React.Component {
  state = {
    events: [],
  };

  componentDidMount() {
    const { type } = this.props;
    if (type === 'future') {
      getFutureEvents().then(events => this.setState({ events }));
    } else if (type === 'past') {
      getPastEvents().then(events => this.setState({ events }));
    } else {
      getEvents().then(events => this.setState({ events }));
    }
  }

  render() {
    const Table = styled.table`
      margin: 0 0 2rem 0;
    `;

    return (
      <Table>
        <tbody>
          {
            this.state.events.map((event) => {
              const eventDate = dayjs(`${event.date} ${event.time}`);
              const eventName = event.link ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="External link to event"
                >
                  {event.name}
                </a>
              ) : event.name;

              return (
                <tr key={event._id}>
                  <td style={{ whiteSpace: 'nowrap' }}>{eventDate.format(dateFormat)}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{eventDate.format(timeFormat)}</td>
                  <td style={{ width: '100%' }}>{eventName}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    );
  }
}

EventList.propTypes = {
  type: PropTypes.string,
};

EventList.defaultProps = {
  type: 'all',
};

export default EventList;
