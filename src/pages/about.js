import React from 'react';
import SocialIcons from '../components/SocialIcons';

const AboutPage = () => (
  <main>
    <SocialIcons />

    <h1>About</h1>

    <h3>Liable according to § 5 TMG</h3>
    <p>
      Max Mustermann<br />
      Musterstraße 9<br />
      04107 Leipzig
    </p>

    <h3>Contact</h3>
    <p>
      <a href="mailto:hi@hound-band.com">hi@hound-band.com</a>
    </p>

    <p>
      Website by <a href="https://grubersjoe.de">@grubersjoe</a>
    </p>
  </main>
);

export default AboutPage;
