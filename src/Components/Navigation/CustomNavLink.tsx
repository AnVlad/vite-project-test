import { useRef, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  name: string;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      top: number;
    }>
  >;
  activeElement: string;
  setActiveElement: React.Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
}

const CustomNavLink = ({
  to,
  name,
  setPosition,
  activeElement,
  setActiveElement,
  children,
}: NavLinkProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const setElementPosition = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setPosition({ top: rect.top });
    }
  };

  useEffect(() => {
    if (activeElement === name) {
      setElementPosition();
    }
  }, []);

  const handleClick = () => {
    setElementPosition();
    setActiveElement(name);
  };

  return (
    <div
      ref={componentRef}
      onClick={handleClick}
      className={`nav-button ${activeElement === name ? 'active' : ''}`}>
      <Link to={'/'}>{children}</Link>
    </div>
  );
};

export default CustomNavLink;
