import React, { useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer';
import { SelectCollection } from './SelectCollection';

export const Collection = (props) => {
    const [lightNav, setLightNav] = useState(true)
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        document.getElementById("mobile-menu").style.display = "none"
        document.getElementById("mobile-menu").style.opacity = 0
        let currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) {
            if(currentScrollPos >= 600){
                document.getElementById("navbar").style.backgroundColor = "white"
                // document.getElementById("navbar").style.padding = "0 3rem"
                document.getElementById("hamburger-id").style.color = "black"
                setLightNav(false)
            }
            else{
                document.getElementById("navbar").style.backgroundColor = "white"
                setLightNav(true)
                document.getElementById("hamburger-id").style.color = "black"
            }
            document.getElementById("navbar").style.top = "0"
        } else {
            document.getElementById("navbar").style.top = "-120px"
        }
        prevScrollpos = currentScrollPos
    }
    return (
        <div>
            <Navbar lightNav={lightNav} collection/>
            <SelectCollection props={props}/>
            <Footer/>
        </div>
    )
}
