import React from 'react'
import './minhaHistoria.css'
import Kauan from '../../assets/KAUAN.png'

const MinhaHistoria = () => {
  return (
    <div>
    <div className='minhaHistoria'>
        <br></br>
        <div>
            <img src={Kauan} alt="" width="270px" className='meuAvatar'/>
        </div>
        <div className='tituloHistoria'>
            <h1>MINHA HISTORIA</h1>
            <div className='tracinho'></div>
        </div>
        <div className='texto'>
            <p>
            MEU NOME É KAUAN PEREIRA DOS SANTOS TENHO 20 ANOS CURSO SISTEMAS DE INFORMAÇÕES
            NA UNIP E BUSCO SEMPRE A MELHOR SOLUÇÃO POSSIVEL PARA SEU PROJETO.
            COMEÇEI COM PROGRAMAÇÃO EM 2020 AO INGRESSAR NA FACULDADE E ESTUDANDO JAVASCRIPT
            COM CURSOS ONLINE ME APAIXONEI COM A MAGIA DA TECNOLOGIA E RESOLVI ME DEDICAR E APRENDI
            NODEJS,REACT,HTML,CSS,MYSQL
            SQLSERVER,MONGODB,JAVASCRIPT FERRAMENTAS COMO POSTMAN E SWAGGER
            ENTÃO TIVE MINHA PRIMEIRA OPORTUNIDADE COMO PROGRAMADOR JUNIOR ONDE ATUEI COMO FULLSTACK
            COM SQLSEVER COULD FUSION NO BACKEND E HTML,CSS,JAVASCRIPT,BOOTSTRAP E JQUERY NO FRONT-END
            APRENDI MUITO SOBRE LINGUAGEM BACKEND E SERVIDORES NESSA OPORTUNIDADE, MINHA ULTIMA ATUAÇÃO FOI COMO DEV
            FRONT-END JUNIOR NA NEXTA TECH ONDE ATUEI BASTANTE COM INTEGRAÇÕES API , PROGRAMAÇÃO E UMA FERRAMENTA
            CHAMADA BUBBLE APRENDI MUITO NESSAS 2 OPORTUNIDADES

            </p>
      
        </div>

    </div>
    </div>
  )
}

export default MinhaHistoria