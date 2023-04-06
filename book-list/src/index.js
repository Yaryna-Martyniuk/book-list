import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
    {
        author: 'Іван Багряний',
        title: 'Тигролови (Шкільна полиця)',
        img: 'https://book-ye.com.ua/upload/resize_cache/iblock/27b/520_860_1/52eea9f5_914c_11e6_80c0_000c29ae1566_b1dd01be_eaf3_11ec_8171_0050568ef5e6.jpg',
        id: 1,
    },

    {
        author: 'Михайло Коцюбинський',
        title: 'Тіни забутих предків',
        img: 'https://book-ye.com.ua/upload/resize_cache/iblock/7e5/520_860_1/83bcc485_c7d5_11ed_8182_00505684ea69_187adeff_c7d7_11ed_8182_00505684ea69.jpg',
        id: 2,
    },
    {
        author: 'Василь Барка',
        title: 'Жовтий князь',
        img: 'https://book-ye.com.ua/upload/iblock/fd6/32994837_85f2_11ed_8177_0050568ef5e6_4fab1548_85f3_11ed_8177_0050568ef5e6.jpg',
        id: 3,
    },
];

const App = () => {
    return (
        <section className='booklist'>
            {books.map((book) => {
                const { img, title, author, id } = book;
                return <Book img={img} title={title} author={author} key={id} />;
            })}
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
