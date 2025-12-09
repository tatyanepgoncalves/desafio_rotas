import { useState } from "react"

export const useMenuMobile = () => {
  // Estado para controlar se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false)

  // Função para fechar o menu após a navegação
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Função para alternar o estado do menu (abrir/fechar)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return {
    toggleMenu,
    isOpen,
    setIsOpen,
    handleLinkClick
  }
}