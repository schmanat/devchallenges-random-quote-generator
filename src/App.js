import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { MdAutorenew } from 'react-icons/md';
import SingleQuote from './components/SingleQuote';
import QuoteList from './components/QuoteList';

const Container = styled.div`
    display: flex;
    padding: 1.875rem 6.25rem 1.25rem 6.25rem;
    flex-direction: column;
    min-height: 100vh;
`;

const Header = styled.header`
    align-self: flex-end;
`;

const RandomLink = styled.a`
    display: flex;
    color: #4f4f4f;

    span {
        margin-right: 0.625rem;
    }
`;

const Main = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = styled.footer`
    text-align: center;
    color: #a9a9a9;
    font-size: 0.875rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const App = () => {
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState({});

    const fetchRandomQuote = async () => {
        setLoading(true);
        setTimeout(async () => {
            await fetch(
                `https://quote-garden.herokuapp.com/api/v2/quotes/random`
            )
                .then((result) => result.json())
                .then((data) => setQuote(data.quote))
                .then(setLoading(false));
        }, 1500);
    };

    const clickHandler = async (author) => {
        setLoading(true);
        setTimeout(async () => {
            await fetch(
                `https://quote-garden.herokuapp.com/api/v2/authors/${author}`
            )
                .then((result) => result.json())
                .then((data) => setQuote(data.quote))
                .then(setLoading(false));
        }, 1500);
    };

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    return (
        <Container>
            <Header>
                <RandomLink href='#' onClick={fetchRandomQuote}>
                    <span>random</span>
                    <MdAutorenew fontSize='large' color='#4f4f4f' />
                </RandomLink>
            </Header>
            <Main>
                {loading ? <h1>Loading ...</h1> : <SingleQuote quote={quote} />}
            </Main>
            <Footer>
                <a
                    href='https://devchallenges.io/profile/3R4kN2rQtmGUblKDrFpb'
                    title='profile on devchallenges.io'
                >
                    schmanat
                </a>{' '}
                @ DevChallenges.io
            </Footer>
            <GlobalStyle />
        </Container>
    );
};

export default App;
