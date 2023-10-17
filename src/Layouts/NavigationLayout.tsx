import { ReactNode, FC } from 'react';

import DesktopNav from '../Components/Navigation/DesktopNav';

interface NavigationLayoutProps {
  children: ReactNode;
}

const NavigationLayout: FC<NavigationLayoutProps> = ({ children }) => {
  return <DesktopNav>{children}</DesktopNav>;
};

export default NavigationLayout;
