import React from 'react';
import styled from 'styled-components';
import Author from './Author';

const Quote = styled.div`
    border-left: 0.5rem solid #f7df94;
    padding-left: 6.25rem;
    font-size: 2.25rem;
    line-height: 1.2;
    width: 45rem;
`;

const SingleQuote = ({ quote, clickHandler }) => {
    const { quoteText, quoteAuthor, quoteGenre } = quote;

    return (
        <div onClick={clickHandler}>
            <Quote>{quoteText || ''}</Quote>
            <Author genre={quoteGenre || ''} author={quoteAuthor} />
        </div>
    );
};

export default SingleQuote;
