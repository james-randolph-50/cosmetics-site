import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';

class App extends React.Component {
  /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
    */
  render () {
    return (
      <div className='App'>
        <Menu />
        <Home />
      </div>
    );
  }
}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
