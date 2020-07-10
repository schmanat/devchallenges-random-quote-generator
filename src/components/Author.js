import React from 'react';
import styled from 'styled-components';
import { MdTrendingFlat } from 'react-icons/md';

const Link = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10rem;
    margin-left: 4.875rem;
    padding: 3.125rem 1.875rem;

    &:hover {
        background: #333333;

        h2 {
            color: #f2f2f2;
        }

        svg {
            visibility: visible;
            color: #fff;
        }
    }
`;

const ArrowRight = styled(MdTrendingFlat)`
    font-size: 1.625rem;
    visibility: hidden;
`;

const QuoteAuthor = styled.h2`
    font-weight: 700;
    color: #4f4f4f;
`;

const QuoteGenre = styled.p`
    color: #828282;
    margin-top: 0.5rem;
`;

const Author = ({ genre, author }) => (
    <Link href='#' title={`quotes by ${author}`}>
        <div>
            <QuoteAuthor>{author}</QuoteAuthor>
            <QuoteGenre>{genre}</QuoteGenre>
        </div>
        <div>
            <ArrowRight />
        </div>
    </Link>
);

export default Author;
