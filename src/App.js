import { Home, About, Projects, Skills, Contact } from './screens';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useInView } from 'react-intersection-observer';

const App = () => {
  const aboutOptions = {
		threshold: 0.5,
	};
	const options = {
		threshold: 0.05,
	};

	const [aboutInView, aboutView] = useInView(aboutOptions);
	const [projectInView, projectView] = useInView(options);
	const [skillsInView, skillsView] = useInView(options);
	const [contactInView, contactView] = useInView(options);

  const active = () => {
    if (aboutView) {
      return 'About';
    } else if (projectView) {
      return 'Projects';
    } else if (skillsView) {
      return 'Skills';
    } else if (contactView) {
      return 'Contact';
    }
  };

  return (
    <BrowserRouter>
      {(aboutView || projectView || skillsView || contactView) && (
        <Navbar active={active()}></Navbar>
      )}

      <Home></Home>
      <div ref={aboutInView}>
        <About></About>
      </div>
      <div ref={projectInView}>
        <Projects></Projects>
      </div>
      <div ref={skillsInView}>
        <Skills></Skills>
      </div>
      <div ref={contactInView}>
        <Contact></Contact>
      </div>
    </BrowserRouter>
  );
};

export default App;
