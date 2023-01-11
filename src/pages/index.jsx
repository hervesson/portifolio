import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá! Sou Hervesson Porto</Name>
          <Function>Front-End Developer</Function>
          <Intro>
            Sou graduando em Análise e Desenvolvimento de sistemas, 
            busco sempre aperfeiçoamento e aprendizado por novas e tecnologias. 
            Tenho experiência com as melhores stacks front-end de desenvolvimento
            Web e Mobile como: ReactJS, React-Native, NextJS, VueJS, 
            Styled-Components, Native-base, TailwindCSS, Reactstrap, Axios, Firebase,
            ReduxJS, Redux-Saga, React-Navigation e etc...  Trabalho com metodologias 
            ágeis: Scrum e Kanban. Ferramentas de versionamento de código: GitHub e 
            Bitbucket. Fiz parte de uma empresa do exterior onde pude conhecer pessoas 
            extraordinárias de diferentes culturas , na qual adquiri muita experiência
            tanto profissional como pessoa.
          </Intro>
          <Link href='projects'>
            <LinkProjects>PROJETOS <FaArrowRight></FaArrowRight></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src='images/logo.jpg' alt='logo' />
        </Logo>
      </Content>
    </Container>
  )
}
