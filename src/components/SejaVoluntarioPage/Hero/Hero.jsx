import h from "./Hero.module.scss";

const heroVoluntario = [
  {title: "Impacto Direto", description: "Sua dedicação salva vidas e transforma comunidades"},
  {title: "Crescimento Pessoal", description: "Desenvolva habilidades e cresça profissionalmente"},
  {title: "Comunidade", description: "Faça parte de uma rede de profissionais comprometidos"},
]

export default function Hero() {
  return (
    <section className={h.HeroVoluntario}>
      <div className={h.HeroVoluntarioContainer}>
        <section className={h.HeroVoluntarioTitle}>
          <h2>Seja Voluntário</h2>
          <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        </section>

        <section className={h.CardHeroVoluntario}>
          {heroVoluntario.map((card) => (
            <article className={h.CardHeroVoluntarioBox}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}
