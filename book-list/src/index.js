import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => (
    <img
        src='https://book-ye.com.ua/upload/resize_cache/iblock/27b/520_860_1/52eea9f5_914c_11e6_80c0_000c29ae1566_b1dd01be_eaf3_11ec_8171_0050568ef5e6.jpg'
        alt='Тигролови (Шкільна полиця)'
    />
);
const Title = () => <h2>Тигролови (Шкільна полиця)</h2>;
const Author = () => {
    const inlineHeadingStyles = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
    };

    return <h4 style={inlineHeadingStyles}>Іван Багряний</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
