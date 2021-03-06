// import react modules
import React, { Component } from "react";
import { Link } from "react-router-dom";

// import custom components
import SignOutButton from "../SignOut/SignOut";
import * as ROUTES from "../../constants/routes";

// import @material-ui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// the navbar for authorized users
class NavigationAuth extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Belgrade Senior Center
            </Typography>
            <div style={{ width: "24px" }} />
            <Link style={{ textDecoration: "none" }} to={ROUTES.HOME}>
              <Button>Home</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.ADMIN}>
              <Button>Admins</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.MEMBER}>
              <Button>Members</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.EVENT}>
              <Button>Events</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.SERVICE}>
              <Button>Services</Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={ROUTES.MEMBER_CHECK_IN}
            >
              <Button>Member Check In</Button>
            </Link>
            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Create New
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={ROUTES.CREATE_MEMBER}
              >
                <MenuItem onClick={this.handleClose}>
                  <i class="material-icons" style={{ paddingRight: 16 }}>
                    person_add
                  </i>
                  Member
                </MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} to={ROUTES.CREATE_EVENT}>
                <MenuItem onClick={this.handleClose}>
                  <i class="material-icons" style={{ paddingRight: 16 }}>
                    today
                  </i>
                  Event
                </MenuItem>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={ROUTES.CREATE_SERVICE}
              >
                <MenuItem onClick={this.handleClose}>
                  <i class="material-icons" style={{ paddingRight: 16 }}>
                    room_service
                  </i>
                  Service
                </MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} to={ROUTES.SIGN_UP}>
                <MenuItem onClick={this.handleClose}>
                  <i class="material-icons" style={{ paddingRight: 16 }}>
                    supervisor_account
                  </i>
                  Admin
                </MenuItem>
              </Link>
            </Menu>
            <div style={{ marginLeft: "auto" }}>
              <Link style={{ textDecoration: "none" }} to={ROUTES.ACCOUNT}>
                <Button>Account</Button>
              </Link>
              <SignOutButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationAuth;
