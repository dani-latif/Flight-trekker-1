import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import "./navbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../../Assets/images/logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BusinessIcon from "@mui/icons-material/Business";
import { logoutCompanyUser, logoutUser } from "../../actions/authActions";

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [navImage, setNavImage] = React.useState(" ");
  const [navDisplay, setNavDisplay] = React.useState("none");
  const [name, setName] = React.useState(" ");
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isCompanyAuthenticated === true) {
      setNavDisplay(" ");
      setNavImage(auth.companyuser.avatar);
      setName(auth.companyuser.companyemployername);
    } else if (auth.isAuthenticated === true) {
      setNavDisplay(" ");
      setNavImage(auth.user.avatar);
      setName(auth.user.name);
    }
  }, []); //notice the empty array here

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function logoutHandler() {
    if (auth.isCompanyAuthenticated === true) {
      window.location.reload(true);
      dispatch(logoutCompanyUser);
    } else if (auth.isAuthenticated === true) {
      dispatch(logoutUser);
      window.location.reload(true);
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" className="brand-logo" underline="none">
            <div className="logo-image">
              {/* <img className="logo" src={Logo} alt="logo"></img> */}
            </div>
          </Link>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <ul>
                  <li>
                    <Typography textAlign="center">Search</Typography>
                  </li>
                  <li>
                    <Typography textAlign="center">Job Seeker</Typography>
                  </li>
                  <li>
                    <Typography textAlign="center">Employer</Typography>
                  </li>
                </ul>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0.01, display: { xs: "none", sm: "flex" } }}>
            <Button
              className="btn-nav"
              onClick={() => history.push("/company-register")}
              sx={{ color: "white", display: "block" }}
            >
              Register
            </Button>

            <Button
              className="btn-nav"
              onClick={() => history.push("/company-login")}
              sx={{ color: "white", display: "block" }}
            >
              Login
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: navDisplay }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={navImage} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography variant="h5">
                  <BusinessIcon /> | {name}{" "}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography>
                  <AdminPanelSettingsIcon /> Account{" "}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography>
                  <PersonIcon /> Profile{" "}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography>
                  <SettingsIcon /> Settings{" "}
                </Typography>
              </MenuItem>
              <MenuItem onClick={dispatch(logoutCompanyUser)} >
                <Typography>
                  <LogoutIcon /> Logout{" "}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
