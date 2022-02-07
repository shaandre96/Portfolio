import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+61430492266'>0430 492 266</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='mailto:shaandre96@gmail.com'>shaandre96@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
          Pride makes us artificial and humility makes us real. Growth through learning.
          </Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/shaandre96/Portfolio' target='_blank'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/andre-sha-744a65226/' target='_blank'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
