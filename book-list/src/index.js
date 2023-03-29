import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
    author: 'Іван Багряний',
    title: 'Тигролови (Шкільна полиця)',
    img: 'https://book-ye.com.ua/upload/resize_cache/iblock/27b/520_860_1/52eea9f5_914c_11e6_80c0_000c29ae1566_b1dd01be_eaf3_11ec_8171_0050568ef5e6.jpg',
};

const secondBook = {
    author: 'Михайло Коцюбинський',
    title: 'Тіни забутих предків',
    img: 'https://book-ye.com.ua/upload/resize_cache/iblock/7e5/520_860_1/83bcc485_c7d5_11ed_8182_00505684ea69_187adeff_c7d7_11ed_8182_00505684ea69.jpg',
};

const App = () => {
    return (
        <section className='booklist'>
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    );
};

const Book = (props) => {
    console.log(props)
    return (
        <article className='book'>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
