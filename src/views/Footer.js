import React from "react";
function Footer(){
    return(
<div id="section">
<footer className="footer-distributed">
    <div className="footer-right">
        <span>
        <a href="https://github.com/Nick679-bee" target="_blank"><i className="fa fa-github"></i></a>
        <h6>Nicholas</h6>
        </span>
        <span>
        <a href="https://github.com/shady-mungai" target="_blank" ><i className="fa fa-github"></i></a>
        <h6>Shadrack Mungai</h6>
        </span>
    </div>
    <div className="footer-right" id="rightIcons">
        <span> <a href="https://github.com/maqiie" target="_blank"><i className="fa fa-github"></i></a>
        <h6>Mark Paul</h6>
        </span>
   <span> <a href="https://github.com/JoseMwanzia" target="_blank"><i className="fa fa-github"></i></a>
   <h6>Joseph Mwanzia</h6>
   </span>
   
    </div>
    {/* <h4 className="footer-header">MOTTO:</h4> */}
    <div className="footer-left">
        
        <p>A WEBSITE BY DEVELOPERS BY EXPLORERS</p><br />
        {/* <p className="footer-links">
            <a className="link-1" href="#">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="#">Blog</a>&nbsp;
            <a href="#">Pricing</a>&nbsp;
            <a href="#">About</a>&nbsp;
            <a href="#">Faq</a>&nbsp;
            <a href="#">Contact</a>
        </p> */}
        <p>&copy; &nbsp; Group 8 </p>
    </div>
</footer>
        </div>
    )
}
export default Footer;
