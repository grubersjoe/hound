/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from 'color';
import dayjs from 'dayjs';
import { getEvents, getFutureEvents, getPastEvents } from '../services/events';
import { colors, dateFormat, timeFormat } from '../utils/constants';

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

    const BubbleLink = styled.a`
      border-bottom: 1px solid ${colors.primary};
      
      @media (min-width: 768px) {
        padding: 0.3rem 0.4rem 0.15rem 0.4rem;
        border-radius: 0.15rem;
        background-color: ${color(colors.secondary).fade(0.9).string()};
        transition: 0.2s background-color ease-in-out;
        border-bottom: none;
  
        &:hover {
          background-color: ${color(colors.secondary).fade(0.85).string()};
        },
      }      
    `;

    return (
      <Table>
        <tbody>
          {
            this.state.events.map((event) => {
              // Safari has problems to parse `${event.date} ${event.time}` directly
              const time = event.time.split(':');
              const eventDate = dayjs(event.date).set('hour', time[0]).set('minute', time[1]);

              const eventName = event.link ? (
                <BubbleLink
                  href={event.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="External link to event"
                >
                  {event.name}
                </BubbleLink>
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
