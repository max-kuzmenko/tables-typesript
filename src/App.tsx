import React from 'react';
import AppLayout from 'components/AppLayout';

import Editor from 'pages/Editor';

const App = () => (
  <AppLayout header="Header" sidebar="Sidebar" content={<Editor />} />
);

export default App;
