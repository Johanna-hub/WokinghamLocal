import React from "react"
import styled from 'styled-components'
import { Box } from '../atoms';

const AboutText = styled.p`
font-family: SF Pro Text;
font-size: 18px;
margin: 8px;
`
const AboutContainer = styled(Box)`
margin: 2vh;
margin-top: 4vh;
align-items: flex-start;
width: 75%;
@media (max-width: 768px) {
  margin-left: 1.5rem;
  margin-right: 1rem;
  margin-top:10.1vh;
  align-items: flex-start;
 }
`
const AboutLink = styled.a`
color:rgba(103, 128, 159, 1);
`

const About = () => {
  return (
      <Box>
      <AboutContainer>
      <AboutText>Wokingham Local.Life is part of the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> project.  Please check out the <AboutLink href="https://www.brixtonlocal.life/">Brixton</AboutLink>, <AboutLink href="https://www.sydenhamlocal.life/">Sydenham</AboutLink> and <AboutLink href="https://www.lewishamlocal.life/">Lewisham</AboutLink> sites!</AboutText>
      <AboutText>Heather Young coordinated the entries for Lewisham.</AboutText>
      <AboutText>The information on this website was crowdsourced using a Google spreadsheet.  For access to the spreadsheet to update an existing entry or add a new one, please email <AboutLink href = "mailto: brixtonlocal@gmail.com">us</AboutLink>.</AboutText>
      <AboutText><AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> supports local communities during the COVID-19 lockdown by helping them easily set up websites that spread the word about independent businesses and services in their area.</AboutText>  
      <AboutText>This includes businesses that are still operational, new delivery services and other activities, such as community groups and local support.</AboutText>
      <AboutText>To set up a similar project in your area please go to the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> website.</AboutText>
      <AboutText>To get in contact please  <AboutLink href = "mailto: brixtonlocal@gmail.com">email</AboutLink> us.</AboutText>
    </AboutContainer>
      </Box>
  )
}

export default About