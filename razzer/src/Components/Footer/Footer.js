import React from 'react'
import './footerCss.css'
import facebookIcon from '../icon/fb-icon.svg'
import instagramIcon from '../icon/instagram-icon.svg'
import twitterIcon from '../icon/twitter-icon.svg'
import youtubeIcon from '../icon/youtube-icon.svg'
import tiktokIcon from '../icon/tiktok-icon.svg'
import twitchIcon from '../icon/twitch-icon.svg'
import discordIcon from '../icon/discord-icon.svg'
const Footer = () => {
  return (
      <div>
        <div style={{
      paddingLeft: '1.75rem',
      paddingRight: '1.75rem',
      backgroundColor: '#111111',
      paddingTop: '1.75rem',
      display:'flex',
      justifyContent:'center'
    }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          borderBottom: '1px solid #999',
          width: '75%',
    
        }}>
        <div>
        <ul >
          <li style={{
            listStyleType: 'none',
            fontSize: '0.9rem',
            marginBottom: '10px',
                color: '#ffffff',
            
                  }}>
                      Shop
                  </li>
                    <li className='footerItem'>
                    <a className='link' href ='#'>RazerStores</a>
                  </li>
                  <li className='footerItem'>
                    <a className='link' href ='#'>RazerCafe</a>
                  </li>
                  <li className='footerItem' >
                    <a className='link'  href ='#'>Store Locator</a>
                  </li>
                  <li className='footerItem' >
                    <a className='link'  href ='#'>Purchase Programs</a>
                  </li>
                  <li className='footerItem'>
                    <a  className='link' href ='#'>Education</a>
                  </li >
                  <li className='footerItem' >
                    <a className='link'  href ='#'>Exclusives</a>
                  </li>
                  <li className='footerItem' >
                    <a  className='link' href ='#'>RazerStore Reward</a>
                  </li>
                  <li className='footerItem' >
                    <a className='link'  href ='#'>Newsletter</a>
                  </li>
              </ul>
          </div>
          
          <div>
        <ul>
                 <li style={{
            listStyleType: 'none',
            fontSize: '0.9rem',
            marginBottom: '5px',
            color:'#ffffff'
                  }}>
                  Explore
                  </li>
                  <li className='footerItem' >
                     <a className='link' href ='#'>Technology</a> 
                  </li>
                      
                  <li className='footerItem' >
                     <a className='link' href ='#'>Chroma RGB</a> 
                  </li>

                  <li className='footerItem' >
                    <a className='link' href ='#'>Concepts</a>
                  </li>

                  <li className='footerItem' >
                     <a className='link' href ='#'>Esports</a> 
                  </li>

                  <li className='footerItem' >
                     <a className='link' href ='#'>Collabs</a> 
                  </li>
              </ul>
          </div>

          <div>
        <ul>
           <li style={{
            listStyleType: 'none',
            fontSize: '0.9rem',
            marginBottom: '10px',
            color:'#ffffff'
                  }}>
                 Support
           </li>
           <li className='footerItem'>
                <a className='link' href ='#'>Get Help</a> 
           </li>
           <li className='footerItem'>
                  <a className='link' href ='#'>Registration & Warranty</a> 
           </li>
           <li className='footerItem'>
                  <a className='link' href ='#'>RazerStore Support</a> 
           </li>
           <li className='footerItem'>
                  <a className='link' href ='#'>RazerCare</a> 
           </li>
           <li className='footerItem'>
                  <a className='link' href ='#'>Manage Razer ID</a> 
           </li>
           <li className='footerItem'>
                  <a className='link' href ='#'>Support Videos</a> 
           </li>
           <li className='footerItem'>
                  <a className='link' href ='#'>Accessibility Statement</a> 
           </li>
        </ul>
        
          </div>

          <div>
               <ul>
                   <li style={{
            listStyleType: 'none',
            fontSize: '0.9rem',
            marginBottom: '10px',
            color:'#ffffff'
                  }}>
                     Company
                   </li>

                   <li className='footerItem'>
                      <a className='link' href ='#'>About Us</a>
                   </li>

                   <li className='footerItem'>
                      <a className='link' href ='#'>Careers</a>
                   </li>

                   <li className='footerItem'>
                      <a className='link'  href ='#'>Press Room</a>
                   </li>

                   <li className='footerItem'> 
                      <a className='link' href ='#'>zVentures</a>
                  </li>

                   <li className='footerItem'>
                      <a className='link' href ='#'>contact Us</a>
                   </li>
              </ul>
          </div>
        
          <div>
              <ul>
                  <li style={{
            listStyleType: 'none',
            fontSize: '0.8rem',
            marginBottom: '10px',
            color:'#ffffff'
                  }}>
                      Follow Us
                  </li>
                  <li className='footerItem'>
                   <a href='#'>
                      <img className='icon' src={facebookIcon}/>
                  </a>
                  </li>
                  <li className='footerItem'>
                    <a href='#'>
                      <img className='icon' src={instagramIcon}/>
                  </a>
                  </li>
                  <li className='footerItem'>
                    <a href='#'>
                      <img className='icon' src={twitterIcon}/>
                  </a>
                  </li>
                  <li className='footerItem'>
                    <a href='#'>
                      <img className='icon' src={youtubeIcon}/>
                  </a>
                  </li>
                  <li className='footerItem'>
                    <a href='#'>
                      <img className='icon' src={tiktokIcon}/>
                  </a>
                  </li>
                  <li className='footerItem'>
                    <a href='#'>
                      <img className='icon' src={twitchIcon}/>
                  </a>
                  </li>
                  <li className='footerItem'>
                    <a href='#'>
                      <img className='icon' src={discordIcon}/>
                  </a>
                  </li>
              </ul>
          </div>

        <p style={{color:'#3cd228',fontWeight:'600'}}>FOR GAMERS. BY GAMERS.™</p>
      </div>
        
      </div>
      
      <div className='subFooter2'>
        <div className='subFooter2-1'>
            <p className='copyright'>Copyright © 2023 Razer Inc. All rights reserved.</p>   
            <a className='line' href='#' >Site Map</a>
            <a className='line' href='#'>Legal Terms</a>
            <a className='line' href='#'>Privacy Policy</a>
            <a className='line' href='#'>Cookie Settings</a>
        </div>
        

        <div className='subFooter2-2'>
          <p className='countryName'>United State</p>
          <a className='changeLocation' href='#'>Change Location</a>
        </div>
      </div> 

      </div>
      
    
    
  )
}

export default Footer