import { useState, useEffect } from 'react';
import HeaderLogo from "./HeaderLogo";

function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show header when scrolling up or at top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 5);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div 
      style={{
        width: "100vw",
        height: '15vh',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: '10',
        backgroundColor: 'transparent',
        transition: 'transform 0.3s ease-in-out',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <HeaderLogo />
    </div>
  );
}

export default Header;