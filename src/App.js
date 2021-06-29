import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  React.useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <div>
      <h1>My App</h1>
    </div>
  );
};

export default App;
