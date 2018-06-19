import React from 'react';
import SocialIcons from '../components/SocialIcons';
import YouTubeVideo from '../components/YouTubeVideo';
import EventList from '../components/EventList';

const IndexPage = () => (
  <div>
    <YouTubeVideo />
    <SocialIcons />

    <h2>Upcoming Gigs</h2>
    <EventList type="future" />

    <h2>Past Gigs</h2>
    <EventList type="past" />
  </div>
);

export default IndexPage;
