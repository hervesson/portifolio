import React from 'react'
import { Container, Content } from '../../../styles/contactStyle'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact/index.page'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.facebook.com/hervessonporto" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.linkedin.com/in/hervesson-porto-42023979/" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/hervessongporto/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="hervessonporto@hotmail.com" 
        />
      </Content>
    </Container>
  )
}
