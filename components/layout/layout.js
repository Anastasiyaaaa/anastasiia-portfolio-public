import MainNavigation from './main-navigation';
import MainFooter from "./main-footer";

function Layout(props) {
  return (
    <>
      <MainNavigation/>
      <main>{props.children}</main>
      <MainFooter/>
    </>
  );
}

export default Layout;
