import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main.jsx';
import Contact from '../pages/Contacts.jsx';
import { routes } from '../shared/config/routes.js';
import Header from '../widget/Header.jsx';
import Footer from '../widget/Footer.jsx'
import { ThemeProvider } from '../feature/ChangeColor/ChangeColor.jsx';
import NotFound from '../pages/NotFound.jsx';
import ErrorBoundary from '../feature/ErrorBoundary/ErrorProps.jsx';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
      <ErrorBoundary>
          <section className='content'>
            <Header />
              <Routes>
                <Route path={routes.main.path} element={<Main />} />
                <Route path={routes.contacts.path} element={<Contact />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            <Footer />
          </section>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
