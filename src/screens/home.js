import React from 'react';
import HomeComponent from '../components/home';

const userName = 'admin';
const incidentsData = Array(30)
  .fill()
  .map((_item, index) => ({
    id: `${index + 1}`,
    type: { value: `3. DEMO TYPE ${index + 1}` },
    subtype: { value: `3. DEMO SUB-TYPE ${index + 1}` },
    status: 'Pending',
  }));

const Home = () => (
  <HomeComponent userName={userName} incidents={incidentsData} />
);

export default Home;
