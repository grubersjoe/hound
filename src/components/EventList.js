/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getEvents, getFutureEvents, getPastEvents } from '../services/events';

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
    const List = styled.ul`
      list-style: none;
      margin: 0 0 2rem 0;
    `;

    return (
      <List>
        {this.state.events.map(event =>
          <li key={event._id}>{event.date} {event.time} - {event.name}</li>
        )}
      </List>
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
