import React, {useState} from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/core';
import useGoodreads from '../hooks/use-goodreads';



const GoodreadsImg = ({Image}) => {
    const errorImg = '/book_not_found.jpg';

    const [img,setImg] =useState(Image)
    
    return (
        <img
                css={css`
                    width:95%;
                    padding-left:2.5%;
                `}
                onError={() => setImg(errorImg)}
                src={img}
              />
    );
};



const Goodreads = () => {
    // where does the data come from
    const Books = useGoodreads();
    function addDefaultSrc(ev) {
        ev.target.src = 'https://i.pinimg.com/originals/06/f3/b1/06f3b1b134ec7443eff071eb6f8f180d.jpg'
    }
    const errorImg = 'https://i.pinimg.com/originals/06/f3/b1/06f3b1b134ec7443eff071eb6f8f180d.jpg'

    console.log(JSON.stringify(Books));
    return (
      <>
        <h2>My Recent Reads 📚</h2>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items:center;
            margin: 1rem - 0.5rem;
          `}
        >
          {Books.map(book => (
            <a 
                href={`https://www.goodreads.com/book/show/${book.bookID}`}
                key={book.bookID}
                css={css`
                box-shadow: 0;
                display: block;
                margin: 0.5rem;
                padding:10px;
                max-width: calc(33% -1rem);
                width: 150px;
                height: 330px;
                transition: 200ms box-shadow linear;

                :focus,
                :hover {
                  box-shadow: 0 2px 14px #22222244;
                  z-index: 10;
                }
              `}
            >
              <p
                css={css`
                  font-size: 0.85rem;
                  text-align: center;
                  
                `}
              >
                {book.titleWithoutSeries}
              </p>
              
              <GoodreadsImg Image={book.image}/>
            </a>
          ))}
        </div>
        <a href="https://www.goodreads.com/review/list/107783413-madeleine-hodges?shelf=read">see more on Goodreads &rarr;</a>
      </>
    );
};



export default Goodreads;

// <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}`}>