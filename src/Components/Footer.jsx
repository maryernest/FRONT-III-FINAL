import React, { useContext } from 'react'
import { ModoDarkContext } from '../context/ModoDarkContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../style/Style.css"

const Footer = () => {

  const { isModoOscuro } = useContext(ModoDarkContext);

  return (
    <footer className={isModoOscuro ? "dark" : "app"}>
      <img src="./images/DH.png" alt='DH-logo' />

      <div>
        <FacebookIcon className="imgperfil" alt="Faceboock" sx={{ color: "white" }} />
        <InstagramIcon className="imgperfil" alt="Instagram" sx={{ color: "white" }} />
        <LinkedInIcon className="imgperfil" alt="linkedln" sx={{ color: "white" }} />
        <WhatsAppIcon className="imgperfil" alt="WhatsApp" sx={{ color: "white" }} />
      </div>

    </footer>
  )
}

export default Footer
