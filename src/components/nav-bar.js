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
                        <AnchorLink className="anchorlink" href="#mnemonic">
                            <span className="linktxt">
                            Mnemonic
                            </span>
                        </AnchorLink>

                        
                        <AnchorLink className="anchorlink" href="#hd_segwit">
                            <span className="linktxt">
                                HD SegWit
                            </span>
                        </AnchorLink>

                        <AnchorLink className="anchorlink" href="#multi-sig">
                            <span className="linkTxt">
                                Multi-Sig - P2SH
                            </span>
                        </AnchorLink>
                    </div>
               
                    <div className="burger" onClick={menuOpen}><div className="patty one"></div><div className="patty two"></div><div className="patty three"></div></div>


                    <div className="mainmenu">
                        <ul className="list">
                            <li className="list-item">
                                <AnchorLink className="anchorlink" href="#mnemonic">
                                    <span className="linktxt">
                                        Mnemonic
                                    </span>
                                </AnchorLink>
                            </li>
                            
                            <li class="list-item">
                                <AnchorLink className="anchorlink" href="#hd_segwit">
                                    <span className="linktxt">
                                        HD SegWit
                                    </span>
                                </AnchorLink>
                            </li>
                            
                            <li className="list-item hidden">
                                <AnchorLink className="anchorlink" href="#multi-sig">
                                    <span className="linkTxt">
                                        Multi-Sig - P2SH
                                    </span>
                                </AnchorLink>
                            </li>

                            <li className="list-item">
                                <div className="list-item-container">
                                    <div class="followus clearfix"><div className="text-follow pull-left">Follow me on</div>
                                    <div className="pull-right"> 
                                        <span class="social-media">
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