import Navbar from './components/Navbar.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Hero from './sections/Hero.tsx'
import { ParallaxProvider } from 'react-scroll-parallax';
import Timeline from './components/Timeline.tsx';
import Portfolio from './components/Portfolio.tsx';
import AboutMe from './components/AboutMe.tsx';
import ContactMe from './components/ContactMe'
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Timeline />       {/* ← aquí */}
      <ParallaxProvider>
      </ParallaxProvider>
      <ContactMe />
    </ErrorBoundary>
  );
}

export default App;
