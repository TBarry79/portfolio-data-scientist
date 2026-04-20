import { useLocation } from 'react-router-dom';

const useHideNavbar = () => {
  const location = useLocation();
  
  const hideOnPaths = ['/service/', '/project/'];
  const shouldHide = hideOnPaths.some(path => location.pathname.startsWith(path));
  
  return shouldHide;
};

export default useHideNavbar;