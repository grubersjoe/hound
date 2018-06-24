import React from 'react';
import SocialIcons from '../components/SocialIcons';
import YouTubeVideo from '../components/YouTubeVideo';
import EventList from '../components/EventList';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <main>
      <YouTubeVideo />
      <SocialIcons />

      <h2>Upcoming Gigs</h2>
      <EventList type="future" />

      <h2>Past Gigs</h2>
      <EventList type="past" />
    </main>
    <Footer />
  </div>
);

export default IndexPage;
