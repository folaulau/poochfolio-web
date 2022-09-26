import logoImage from "assets/images/logo.png"
import Icon from 'components/atoms/Icon';
import { useEffect, useState } from 'react';
import { onShowLiveChat } from 'support';
import { slide as Menu } from 'react-burger-menu'
interface Props {
}

export default function MobileNavbar({ }: Props) {
  const [scrollDir, setScrollDir] = useState("up");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      if (scrollY > lastScrollY && scrollY - threshold > 111) {
        setScrollDir("down")
      }
      if (scrollY < lastScrollY) {
        setScrollDir("up")
      }
      // setScrollDir(scrollY > lastScrollY && scrollY - threshold > 111 ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      let timer: any;

      if (timer) {
        clearTimeout(timer);
      }

      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  const onShow = () => {
    onShowLiveChat();
  }

  const onShowMenu = () => {
    console.log("showMenu : ", showMenu)
    if(showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <div id="outer-container">
      <Menu id="push" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right onClose={onShowMenu} isOpen={showMenu}>
        <a onClick={() => { setShowMenu(false) }} id="Marketplace"  className="menu-item" href="#marketplace">Marketplace</a>
        <a onClick={() => { setShowMenu(false) }} id="Management" className="menu-item" href="#business-management">Management</a>
        <a onClick={() => { setShowMenu(false) }} id="howitworks" className="menu-item" href="#how-it-works">How it works</a>
        <a onClick={() => { setShowMenu(false) }} className="menu-item" href="https://www.linkedin.com/company/poochfolio/"
              target="_blank">Investor relations</a>
        <a id="contact" className="menu-item" href="/">Contact</a>
      </Menu>
      <nav id="page-wrap" className={`fixed w-full top-0 z-30 bg-center myheader bg-primary-800 ${scrollDir === "down" ? 'header-hide' : 'header-show'}`}>
        <div className="container flex p-6">
          <img src={logoImage} alt="Logo" style={{ width: 120, objectFit: 'contain' }} />
          <div className="flex items-center flex-1">
            <div className="flex gap-4 ml-auto flex items-center">
              <div className='text-white flex items-center p-3 rounded-full' style={{ border: '1px solid white' }} onClick={onShow}>
                <Icon name="Headset" style={{ marginRight: 5 }} />
                Support
              </div>
              <div className='text-white' onClick={onShowMenu}>
                <Icon name="Menu" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}
