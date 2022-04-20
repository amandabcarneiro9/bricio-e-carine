import React,{useState} from 'react'
import './Header.scss'
import Hamburger from 'hamburger-react'



export default function Header(){

    const [isOpen, setOpen] = useState(false)

    return(
         <header className={`header ${isOpen ? '--menu-opened' : ''}`}>  
            <Hamburger toggled={isOpen} toggle={setOpen} />

        </header>
        
    )
}
