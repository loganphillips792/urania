import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { faHome, faMusic, faMapLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeScreen from './components/screens/HomeScreen';
import MusicScreen from './components/screens/MusicScreen';
import MapScreen from './components/screens/MapScreen';
import CameraScreen from './components/screens/CameraScreen';


const Container = styled.div``;

const GlobalStyle = createGlobalStyle`
  ${variables}

  body {
    background-color: var(--dark-color);
  }
`;

const Navigation = styled.nav`
  display: flex;
`;

// https://fontawesome.com/v5/docs/web/use-with/react
const Icon = styled(FontAwesomeIcon)`
  height: 5em;
  flex-grow: 1;
`;

const HomeIcon = styled(Icon)`

`;

const MusicIcon = styled(Icon)`

`;

const MapIcon = styled(Icon)`

`;

const CameraIcon = styled(Icon)`

`;

const PageContainer = styled.div`
  border: 2px solid blue;

`;


function App() {
  const [screen, setScreen] = useState();

  const getScreenToShow = () => {
    switch(screen) {
      case 'HOME':
        return <HomeScreen />
      case 'MUSIC':
        return <MusicScreen />
      case 'MAP':
        return <MapScreen />
      case 'CAMERA':
        return <CameraScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <Container>
      <GlobalStyle />

      <Navigation>
        <HomeIcon icon={faHome} onClick={() => setScreen('HOME')}/>
        <MusicIcon icon={faMusic} onClick={() => setScreen('MUSIC')} />
        <MapIcon icon={faMapLocationDot}  onClick={() => setScreen('MAP')}/>
        <CameraIcon icon={faCamera} onClick={() => setScreen('CAMERA')} />
      </Navigation>
      
      <PageContainer>
        {getScreenToShow()}
      </PageContainer>
    </Container>  
  );
}

export default App;