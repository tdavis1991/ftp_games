import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub, AiFillFacebook } from "react-icons/ai";
import { Divider } from '@mui/material';

import './footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__top'>
        <div className='footer__start'>
          <div className='footer__slogan'>
            <h3>FTP-Games</h3>
            <p>Your portal to free online games</p>
          </div>
          <div className='footer__icons'>
            <AiOutlineTwitter size={30} style={{ display: 'inline' }} />
            <AiOutlineGithub size={30} style={{ display: 'inline' }} />
            <AiFillFacebook size={30} style={{ display: 'inline' }} />
          </div>
        </div>
        <div className='footer__links'>
          <div>
            <p style={{ fontWeight: 'bold', margin: '2rem 0 1rem 0' }}>FTP</p>
            <p>About</p>
            <p>Gamers Blog</p>
            <p>Career</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', margin: '2rem 0 1rem 0' }}>Support</p>
            <p>Report an issue</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', margin: '2rem 0 1rem 0' }}>Our communities</p>
            <p>FTP Community</p>
            <p>FTP Forum</p>
            <p>FTP Chat</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', margin: '2rem 0 1rem 0' }}>FTP</p>
            <p>About</p>
            <p>Gamers Blog</p>
            <p>Career</p>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <h2>FTP Games</h2>
        <a>Website Privacy Notice</a>
        <a>Cookies</a>
        <a>Legal</a>
        <a>Community Participation Guidelines</a>
      </div>
    </div>
  )
}

export default Footer;