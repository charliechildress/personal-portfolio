import { Home, About, Projects, Skills, Contact } from './screens';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </BrowserRouter>
  );
};

export default App;
