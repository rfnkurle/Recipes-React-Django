import {Navbar} from 'react-bootstrap';
//import logo from '../static/logo.png'
import "../App.css";
import {NavLink} from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  // CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


const Nav = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
           
               Recipes for you and your Family.
        </Navbar.Brand>
    </Navbar>

    <div className='sidebar'>
<CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
      Navigation
    </CDBSidebarHeader>
    <CDBSidebarContent>
      <CDBSidebarMenu>
        <NavLink exact to="/" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/recipes" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="list">Recipes List</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/manage" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Manage Recipes</CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
</div>
    </div>
  );
};

export default Nav;