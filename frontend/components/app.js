import React from 'react';
import { Route } from 'react-router-dom';
import PostIndexContainer from './post/post_index_container';

const App = () => (
  <div>
    <h1>Assessment 06 - by Janice</h1>
    <Route path="/" component={PostIndexContainer} />
  </div>
);

export default App;
