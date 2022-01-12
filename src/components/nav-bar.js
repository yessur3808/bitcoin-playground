import React from "react";
import "../styles/nav-bar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function menuOpen(ev){
    ev.preventDefault();
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.mainmenu').classList.toggle('active')
}

export default function NavBar() {
    return (
        <header>
            <div
                className="navbar"
            >

                <div className="navheading">
                    <h2>
                        <span className="txtBitcoin">Bitcoin </span>
                        <span className="txtPg">Playground</span>
                    </h2>

                    <div className="author">by Yaser Ibrahim</div>
                </div>

            
                    <div className="linklist">
                        <AnchorLink offset='100' className="anchorlink" href="#coinWidget">
                            <span className="linktxt">
                            Top Coins
                            </span>
                        </AnchorLink>
                        <AnchorLink offset='100' className="anchorlink" href="#mnemonic">
                            <span className="linktxt">
                            Mnemonic
                            </span>
                        </AnchorLink>

                        
                        <AnchorLink offset='100' className="anchorlink" href="#hd_segwit">
                            <span className="linktxt">
                                HD SegWit
                            </span>
                        </AnchorLink>

                        <AnchorLink offset='100' className="anchorlink" href="#multi-sig">
                            <span className="linktxt">
                                Multi-Sig
                            </span>
                        </AnchorLink>
                    </div>
               
                    <div className="burger" onClick={menuOpen}><div className="patty one"></div><div className="patty two"></div><div className="patty three"></div></div>

                    <div className="mainmenu">
                        <ul className="list">
                            <li className="list-item">
                                <AnchorLink offset='100' className="anchorlink" href="#coinWidget">
                                    <span className="linktxt">
                                    Top Coins
                                    </span>
                                </AnchorLink>
                            </li>
                            <li className="list-item">
                                <AnchorLink offset='100' className="anchorlink" href="#mnemonic">
                                    <span className="linktxt">
                                        Mnemonic
                                    </span>
                                </AnchorLink>
                            </li>
                            
                            <li className="list-item">
                                <AnchorLink offset='100' className="anchorlink" href="#hd_segwit">
                                    <span className="linktxt">
                                        HD SegWit
                                    </span>
                                </AnchorLink>
                            </li>
                            
                            <li className="list-item">
                                <AnchorLink offset='100' className="anchorlink" href="#multi-sig">
                                    <span className="linkTxt">
                                        Multi-Sig
                                    </span>
                                </AnchorLink>
                            </li>

                            <li className="list-item">
                                <div className="list-item-container">
                                    <div className="followus clearfix"><div className="text-follow pull-left">Follow me on</div>
                                    <div className="pull-right"> 
                                        <span className="social-media">
                                             <a href="https://twitter.com/curlycoffee3808" target="_blank" rel="noreferrer noopener">
                                                <TwitterIcon className="socialIcons"/>
                                             </a>


                                             <a href="https://www.linkedin.com/in/yaser-ibrahim-57963884" target="_blank" rel="noreferrer noopener">
                                                <LinkedInIcon className="socialIcons" />
                                             </a>


                                             <a href="https://github.com/yessur3808" target="_blank" rel="noreferrer noopener">
                                                <GitHubIcon className="socialIcons" />
                                             </a> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                    </div>

            
            </div>
      </header>
    )
  }