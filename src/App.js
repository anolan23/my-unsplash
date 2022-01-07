import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';

import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    getImages();
    async function getImages() {
      const response = await axios.get('/api/images');
      setState({ images: response.data });
    }
  }, []);

  console.log(state);
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div className="header__logo__shapes">
            <div className="header__logo__shapes--1"></div>
            <div className="header__logo__shapes--2"></div>
          </div>
          <div className="header__logo__text">
            <h1 className="header__logo__text__main">My Unsplash</h1>
            <span className="header__logo__text__sub">devchallenges.io</span>
          </div>
        </div>
        <Input name="search" />
        <div className="header__action">
          <Button>Add a photo</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
