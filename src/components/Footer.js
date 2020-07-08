import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
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

const Footer = () => (
    <Container>
        <a
            href='https://devchallenges.io/profile/3R4kN2rQtmGUblKDrFpb'
            title='profile on devchallenges.io'
        >
            schmanat
        </a>{' '}
        @ DevChallenges.io
    </Container>
);

export default Footer;
