import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { MdAutorenew } from 'react-icons/md';
import SingleQuote from './components/SingleQuote';

const Container = styled.div`
    display: flex;
    padding: 1.875rem 6.25rem 1.25rem 6.25rem;
    flex-direction: column;
    min-height: 100vh;
`;

const Header = styled.header`
    align-self: flex-end;
    display: flex;

    a {
        margin-right: 0.625rem;

        color: #4f4f4f;
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
        await fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
            .then((result) => result.json())
            .then((data) => setQuote(data.quote))
            .then(setLoading(false));
    };

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    return (
        <Container>
            <Header>
                <a href='#' onClick={fetchRandomQuote}>
                    random
                </a>
                <MdAutorenew fontSize='large' color='#4f4f4f' />
            </Header>
            <Main>
                {loading ? (
                    <h1 style={{ color: 'pink' }}>Loading ...</h1>
                ) : (
                    <SingleQuote quote={quote} />
                )}
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
