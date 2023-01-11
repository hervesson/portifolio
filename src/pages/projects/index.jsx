import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style'

export default function Projects() {
   const [itensApi, setItensApi] = useState([])

   useEffect(() => {
      let abortController = new AbortController()

      function getGithubAPI() {
         fetch('https://api.github.com/users/hervesson/repos').then(async res => {
            if(!res.ok) {
               throw new Error(res.status)
            }
            var data = await res.json()
            setItensApi(data)
         }).catch(e => console.log(e))    
      }

      getGithubAPI()

      return () => abortController.abort()
     
   }, [])
   

   return (
      <Container>
         <Content>
            <Ul>
               {itensApi.map(item => (
                  <Li key={item.Id}>
                     <TitleProject>{item.name.toUpperCase()}</TitleProject>
                     <Url>URL: {item.url}</Url>
                     <Created_at>Data de Criação: { Intl.DateTimeFormat('pt-Br').format(new Date(item.created_at))}
                     </Created_at>
                  </Li>
               ))}
            </Ul>
         </Content>
      </Container>
   )
}
