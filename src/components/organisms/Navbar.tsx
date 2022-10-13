import { Link } from 'react-router-dom';

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

export default function Navbar({ landingLinksVisible, loginVisible, signUpVisible }: Props) {
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
      if(scrollY > lastScrollY && scrollY - threshold > 111) {
        setScrollDir("down")
      }
      if(scrollY < lastScrollY) {
        setScrollDir("up")
      }
      // setScrollDir(scrollY > lastScrollY && scrollY - threshold > 111 ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      let timer: any;

      if(timer) {
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
        <div className="container flex pt-6 pb-6">
          <Logo />
          <div className="flex items-center flex-1">
            {landingLinksVisible && (
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
            )}

            <div className="flex gap-4 ml-auto">
              {loginVisible && (
                <Link to="/signin">
                  <Button variant="filled" size="sm">
                    Login
                  </Button>
                </Link>
              )}
              {signUpVisible && (
                <Link to="/sign-up/signup">
                  <Button variant="filled" size="sm">
                    Sign Up
                  </Button>
                </Link>
              )}
              <Button variant="outlined" size="sm" onClick={onShow}>
                <Icon name="Headset" />
                Support
              </Button>
            </div>
          </div>
        </div>
      </nav>
  );
}
