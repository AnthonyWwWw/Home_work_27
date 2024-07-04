import React, { useContext } from 'react';
import { ThemeContext } from '../feature/ChangeColor/ChangeColor';
import ContactCard from '../widget/ContactCard';

function Contact() {
    const { theme } = useContext(ThemeContext);

    return (
        <main className='_conteiner' style={{ background: theme.background, color: theme.color }}>
            <section className='contacts-page _conteiner'>
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </section>
        </main>
    );
}

export default Contact;
