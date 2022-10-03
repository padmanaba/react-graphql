import React from 'react';
import './style.css';
import { useQuery, gql } from '@apollo/client';

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 20) {
      id
      mission_name
      launch_date_local
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.launch_date_local}</li>
        ))}
      </ul>
    </div>
  );
}
