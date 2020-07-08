import React from 'react';
import styled from 'styled-components';

const Quote = styled.div`
    border-left: 0.5rem solid #f7df94;
    padding-left: 6.25rem;
    font-size: 2.25rem;
    line-height: 1.2;
    width: 45rem;
`;

const Author = styled.h2`
    font-weight: 700;
    margin-top: 10rem;
    color: #4f4f4f;
    margin-left: 6.75rem;
`;

const Genre = styled.p`
    color: #828282;
    margin-top: 0.5rem;
    margin-left: 6.75rem;
`;

const SingleQuote = ({ quote }) => {
    const { quoteText, quoteAuthor, quoteGenre } = quote;

    return (
        <div>
            <Quote>{quoteText}</Quote>
            <Author>{quoteAuthor}</Author>
            <Genre>{quoteGenre}</Genre>
        </div>
    );
};

export default SingleQuote;
