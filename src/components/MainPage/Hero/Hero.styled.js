import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(46, 47, 66, 0.7);
    padding-top: 112px;
    padding-bottom: 112px;
    /* background-image: linear-gradient(rgba(46, 47, 66, 0.7),rgba(46, 47, 66, 0.7)),
                      url('../images/hero-bg-mob.jpg'); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;


export const Title = styled.h1`
    width: 250px;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.11;
    text-align: center;
    color: var(--white-color);
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 72px;
`;