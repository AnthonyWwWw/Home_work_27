import { useContext } from 'react';
import { ThemeContext } from '../feature/ChangeColor/ChangeColor';

function AboutMi() {
    const { theme } = useContext(ThemeContext);

    return (
        <main className='_conteiner' style={{ background: theme.background, color: theme.color }}>
            <div className='container'>
                <div className='about-container'>
                    <div className='bio'>
                        <h2>About Me</h2>
                        <p> 
                            Hello! I'm John Doe, a passionate web developer with over 5 years of experience in building 
                            responsive and user-friendly websites. I have a strong background in HTML, CSS, JavaScript, 
                            and various modern web frameworks. I enjoy solving complex problems and continuously learning new technologies to improve my skills.
                        </p>
                    </div>
                </div>
                <div className='skills'>
                    <h3>Skills</h3>
                    <div className='skill-item'>
                        <span>HTML</span>
                    </div>
                    <div className='skill-item'>
                        <span>CSS</span>
                    </div>
                    <div className='skill-item'>
                        <span>JavaScript</span>
                    </div>
                    <div className='skill-item'>
                        <span>React</span>
                    </div>
                    <div className='skill-item'>
                        <span>Node.js</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutMi;
