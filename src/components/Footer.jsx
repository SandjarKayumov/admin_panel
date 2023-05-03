import React from 'react';

const Footer = () => {
    const today = new Date();
    console.log(today)
    return (
        <footer style={{position:"relative", top:"60px", width:"100%", backgroundColor:"#0a1929", padding:"25px 0", textAlign:"center", }}>
            <h5 style={{color:"#fff",fontWeight:"500"}}>Copyright &copy; {today.getFullYear()}</h5>
        </footer>
    );
}

export default Footer;
