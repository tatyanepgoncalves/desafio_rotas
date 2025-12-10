import { Link, useLocation } from 'react-router-dom';
import Logo from '/logo.svg';
import h from './Header.module.scss';
import { useMenuMobile } from "../../../hooks/useMenuMobile"
import { X, Menu } from "lucide-react"

const menuItem = [
  { title: "Home", path: "/"},
  { title: "Seja Voluntário", path: "/seja-voluntario"}
]

export default function Header() {
  const { isOpen, toggleMenu, handleLinkClick } = useMenuMobile()
  const location = useLocation()

  return (
    <header className={h.Header}>
      <div className={h.HeaderContainer}>
        
        <section className={h.LogoBox}>
          <img src={Logo} alt="Icone de coração branco com fundo verde." />
          <span>Médicos & Dentistas</span>
        </section>

        <button className={h.MenuBtn} onClick={toggleMenu} aria-expanded={isOpen}>
          {isOpen ?  <X className={h.XIcon}  /> : <Menu />}
        </button>

        <nav className={h.Menu}> 
          <Link to="/">Home</Link>
          <Link to="/seja-voluntario" className={h.btnVoluntario}>Seja Voluntário</Link>
        </nav>

        {isOpen && (
          <nav className={h.MenuMobile}> 
            {menuItem.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <Link 
                  to={item.path} 
                  key={item.title} // Fecha o menu ao clicar no link
                  onClick={handleLinkClick} 
                  className={isActive ? h.ActiveLink : h.InactiveLink}   
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        )}

        {/* Overlay para fechar ao clicar fora do menu */}
        {isOpen && <div className={h.MenuOverlay} onClick={toggleMenu}></div>}
        

      </div>
    </header>
  )
}
