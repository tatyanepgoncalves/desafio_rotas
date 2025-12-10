import h from "./Hero.module.scss";
import ImageHero from "../../../assets/image-hero.png";
import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react"

export default function Hero() {
  return (
    <section className={h.Hero}>
      <div className={h.HeroContainer}>

        <section className={h.HeroLeft}>
          <div className={h.Badge}>
            <Stethoscope />
            <span>Saúde para todos</span>
          </div>


          <div className={h.HeroText}>
           <h1>Saúde e cuidado sem barreiras</h1> 
            <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p> 
          </div>

          <div className={h.HeroBtn}>
            <button className={h.HeroVoluntario}>
              <Link to="/seja-voluntario">Seja voluntário</Link>
            </button>
            <button className={h.HeroAjudar}>Como ajudar</button>
          </div>
        </section>

        <section className={h.HeroRight}>
          <img src={ImageHero} alt="Médico voluntário." />
        </section>

      </div>
    </section>
  )
}
