import Hero from "../components/HomePage/Hero/Hero";
import Missao from "../components/HomePage/Missao/Missao"
import Impacto from "../components/HomePage/Impacto/Impacto"
import h from "../styles/HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={h.HomePage}>
      <Hero />
      <Missao />
      <Impacto />
    </main>
  )
}
