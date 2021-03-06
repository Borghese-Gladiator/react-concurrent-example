import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { UserCard } from 'react-ui-cards';
import LoadingGIF from './images/loading.gif';
import './App.css';

const UsersList = lazy(() => import("./components/UsersList"));
const Loader = () => <img src={LoadingGIF} alt="Loading" />

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>React Concurrent Example</h1>
      <p>The cards below are static imports, but the following list is lazily loaded.</p>
      <h2>
        User cards
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <UserCard
          float
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          name='Justin Case'
          positionName='Software Developer'
          stats={[
            {
              name: 'followers',
              value: 21
            },
            {
              name: 'following',
              value: 37
            },
            {
              name: 'posts',
              value: 117
            }
          ]}
        />
        <UserCard
          float
          href='https://github.com/nukeop'
          header='https://i.imgur.com/vRAtM3i.jpg'
          avatar='https://i.imgur.com/XJxqvsU.jpg'
          name='Frank Hepsfield'
          positionName='Software Engineering Manager'
        />
        <UserCard
          float
          href='https://github.com/nukeop'
          header='https://i.imgur.com/p5yXGQk.jpg'
          avatar='https://i.imgur.com/kFkyYkZ.jpg'
          name='Joseph Cheps'
          positionName='Firmware Engineer'
          stats={[
            {
              name: 'commits',
              value: 365
            },
            {
              name: 'stars',
              value: 110
            },
            {
              name: 'repositories',
              value: 54
            }
          ]}
        />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <UsersList />
        </Suspense>
      </ErrorBoundary>
      <div>
        <p>During fetch request for the above list, the following loader was displayed:</p>
        <Loader />
      </div>
    </div>
  );
}

export default App;
