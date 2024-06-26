import type { NextPage } from 'next'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Headline from '../components/Headline/Headline'
import Footer from '../components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { links } from '../utils/constants/links'
import i18next from 'i18next'
import getContent from '../utils/content/getContent'


export const Home = () => {
  const { t: c, i18n } = useTranslation('concerts')
  const { t: l } = useTranslation('links')
  const lang = i18n.language

  return (
    <Frontpage className='frontpage'>
      <Header Frontpage />
      <div className='logo-container'>
        <img src='/24-banner-2.png' />
      </div>
     <div className='center sub-header'>
        <a href='https://tix.is/is/event/17420/lunga-spiral/' target='_blank rel="noreferrer"'>
          {c('ticket')}
        </a>
      </div>
           <div className='center date'>
           {c('LungA Spiral, 15.–21. July 2024, Seyðisfjörður, Iceland')}
     
     </div> 
      <div className='navigation'>
        {links.map((link, index) => {
          let main: string = link.label == 'lungalab' ? 'main-con' : ''
          let language = lang == 'is' ? 'icelandic' : 'english'

          return (
            <div
              key={index}
              className={`skew-container link-container ${main} ${lang == 'en' && 'rightalign'
                }`}
            >
              <div>
                <Link href={link.link} >
                  <a className={`nav-link ${main.length > 0 ? main : language} `} > {l(link.label)}</a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className='seperator'></div>
        <Footer />

    </Frontpage>
  )
}

export default Home
const Frontpage = styled.div`

//Next
.main-con{
  width: 100%;
}

.headline{
    text-align:center;
}
.subtitle {
  display: inline-block;
  font-size: 1rem;
  width: 38%;
}

.seperator {
  width: 100%;
  border-top: 1px solid #000000;
}

.center {
  text-align: center;
}

.center a:hover{
  color: #7bd0f5;
}

.center a:visited{
  color: #000000;
}

.sub-header {
  text-align: center;
  padding: 20px;
}

.rightalign {
  text-align: right;
}

.nav-link {
  display: inline-block;
}

.little-nav .skew-container {
  font-size: 10px;
}
.skew-container {
  border-top: 1px solid #000;
  max-width: 99.9%;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: 600;
  color: black;
}

.center.sub-header a:hover {
  color: #7bd0f5;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  font-weight: 600;
  color: #000000;
  border-bottom: #000 2px solid;
}
.logo-container > img {
  width: 40%;
}
.logo-container {
  text-align: center;
}

.date {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: 115%;
  padding: 10px;
  
}

@media (max-width: 844px) {
  .logo-container {
    padding-top: 60px;
  }

  .logo-container > img {
    width: 88%;
  }
  
  .sub-header {
    padding-top: 0px;
    margin-top: 0px;
    line-height: 90%;
  }
}
`
