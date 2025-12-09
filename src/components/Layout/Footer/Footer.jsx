import f from "./Footer.module.scss";
import Logo from '../../../../public/logo.svg';
import { Copyright, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={f.Footer}>
      <div className={f.FooterContainer}>
        <section className={f.FooterTop}>

          <section className={f.LogoFooterBox}>
            <section className={f.LogoFooter}>
              <img src={Logo} alt="Logo" />
              <span>Médicos & Dentistas</span>
            </section>
            <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
          </section>



          <section className={f.Contact}>
            <h2>Contato</h2>

            <div className={f.ContactItem}>
              <Mail />
              <p>contato@medico-dentista.org</p>
            </div>

            <div className={f.ContactItem}>
              <Phone />
              <p>(11) 3000-0000</p>
            </div>

            <div className={f.ContactItem}>
              <MapPin />
              <p>São Paulo, Brasil</p>
            </div>
          </section>

          <section className={f.SocialMedia}>
            <h2>Redes Sociais</h2>

            <div className={f.SocialMediaItem}>
              <Facebook />
              <span>Facebook</span>
            </div>
            <div className={f.SocialMediaItem}>
              <Instagram />
              <span>Instagram</span>
            </div>
            <div className={f.SocialMediaItem}>
              <Linkedin />
              <span>Linkedin</span>
            </div>
          </section>

        </section>
        <section className={f.FooterBottom}>
           <Copyright size={12} /> {" "} {year} Médicos e Dentistas pela Comunidade. Todos os direitos reservados.
        </section>
      </div>
    </footer>
  )
}
