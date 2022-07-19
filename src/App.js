import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import {Box} from '@mui/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {ThemeProvider} from '@mui/material';

import Navbar from './components/Navbar';
import MovieList from './containers/MovieList';
import About from './containers/About';
import Indonesian from './containers/Indonesian';
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';
import theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="*" element={
            <Box sx={{
              display: 'flex',
              m: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
                alt="404"
              />
              <p>You have reach the edge of universe</p>
              <Link to="/">Take me home!</Link>
            </Box>
          }/>
          <Route path="about" element={<About />}>
            <Route path="description" element={<Box sx={{ m: 5 }}>Provides movies in your hand.</Box>} />
            <Route path="services" element={<Box sx={{ m: 5 }}>Streaming Movies, Indonesian Film, and Film Review.</Box>} />
          </Route>
          <Route path="indonesian" element={<Indonesian />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="subscribed/:plan" element={<Subscribed />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
