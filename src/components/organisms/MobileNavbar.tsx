import { Link } from 'react-router-dom';
import logoImage from "assets/images/logo.png"
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Logo from 'components/atoms/Logo';
import { useEffect, useState } from 'react';
import { onShowLiveChat } from 'support';
interface Props {
  landingLinksVisible?: boolean;
  loginVisible?: boolean;
  signUpVisible?: boolean;
}

export default function MobileNavbar({ landingLinksVisible, loginVisible, signUpVisible }: Props) {
  const [scrollDir, setScrollDir] = useState("up");

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

  return (
    <nav className={`fixed w-full top-0 z-30 bg-center myheader bg-primary-800 ${scrollDir === "down" ? 'header-hide' : 'header-show'}`}>
      <div className="container flex p-6">
        <img src={logoImage} alt="Logo" style={{ width: 120, objectFit: 'contain' }} />
        <div className="flex items-center flex-1">
          {/* {landingLinksVisible && (
            <div className="flex flex-1 text-white justify-evenly">
              <a href="#marketplace" className="hover:underline">
                MARKETPLACE
              </a>
              <a href="#business-management" className="hover:underline">
                MANAGEMENT
              </a>
              <a href="#how-it-works" className="hover:underline">
                HOW IT WORKS
              </a>
            </div>
          )} */}

          <div className="flex gap-4 ml-auto flex items-center">
            <div className='text-white flex items-center p-3 rounded-full' style={{ border: '1px solid white' }} onClick={onShow}>
              <Icon name="Headset" style={{ marginRight: 5 }} />
              Support
            </div>
            <div className='text-white' onClick={onShow}>
              <Icon name="Menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
