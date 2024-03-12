import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card
        title="Surendhar"
        content="Master of Computer Application"
      />
      <Card
        title="Anand"
        content="Master of Computer Science"
      />
      <Card
        title="Mukesh"
        content="Master of Physics"
      />
    </div>
  );
};

export default App;
