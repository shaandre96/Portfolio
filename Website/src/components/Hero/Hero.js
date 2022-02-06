import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Andre Sha, <br/>
        A creative <br/>
        Software Engineer
      </SectionTitle> 
      <SectionText>
        My main experience in is desktop app development and font-end web development. But I always look forward to exciting opportunities, love learning and developing new skills. 
      </SectionText>
      <Button onclick={()=>window.location.href="mailto:shaandre96@gmail.com"}>Reach Out</Button> 
    </LeftSection>  
  </Section>
);

export default Hero;