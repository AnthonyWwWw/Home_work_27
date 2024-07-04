import { useContext } from 'react';
import { ThemeContext } from '../feature/ChangeColor/ChangeColor';

function NotFound() {
    const { theme } = useContext(ThemeContext);

    return (
        <main className='_conteiner' style={{ background: theme.background, color: theme.color }}>
            <div className='col-md-12 text-center castom-not-found'>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Sorry, the page you are looking
                    for does not exist.
                </p>
            </div>
        </main>
    );
}

export default NotFound;
