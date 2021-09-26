import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import DepositThought from '../DepositThought/DepositThought';
import logo from '../logo.png'

class Header extends React.Component { 
    
  state = {
    deposit: false
  }

  toggleDeposit = () => {
    this.setState({deposit: !this.state.deposit});
  }

    render() {
        return (
          <nav className="header">
            <div className="container">
              <Link className="logo" to="/">
                <img src={logo} alt="logo" />
              </Link>
              <ul>
                <li>
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26 4.33333C37.947 4.33333 47.6667 14.053 47.6667 26C47.6667 37.947 37.947 47.6667 26 47.6667C14.053 47.6667 4.33333 37.947 4.33333 26C4.33333 14.053 14.053 4.33333 26 4.33333ZM26 0C11.6415 0 0 11.6415 0 26C0 40.3585 11.6415 52 26 52C40.3585 52 52 40.3585 52 26C52 11.6415 40.3585 0 26 0ZM39 12.9978L26.8212 19.4675C24.8733 19.2422 22.9082 19.8813 21.4608 21.3287C20.0265 22.7652 19.4025 24.7108 19.5932 26.5893L13 39L25.402 32.409C27.3173 32.6018 29.2413 31.9648 30.6713 30.5348C32.045 29.1612 32.7708 27.2328 32.5325 25.1767L39 12.9978ZM26.065 28.6412C24.5722 28.6412 23.3567 27.43 23.3567 25.935C23.3545 24.4378 24.5678 23.2245 26.065 23.2267C27.56 23.2267 28.7733 24.44 28.7733 25.935C28.7712 27.4278 27.56 28.6412 26.065 28.6412Z"
                      fill="black"
                    />
                  </svg>
                  <NavLink exact to="" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <svg width="56" height="53" viewBox="0 0 56 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.3333 46.375H7V22.0833H16.3333V46.375ZM32.6667 22.0833H23.3333V46.375H32.6667V22.0833ZM49 22.0833H39.6667V46.375H49V22.0833ZM53.6667 48.5833H2.33333V53H53.6667V48.5833ZM0 19.875H56L28 0L0 19.875Z"
                      fill="black"
                    />
                  </svg>
                  <NavLink exact to="thoughts" activeClassName="active">
                    Bank
                  </NavLink>
                </li>
                <li>
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M43.3916 43.5H1.6005C1.82515 41.6214 2.44491 39.0031 3.64318 36.2324C5.06077 32.9544 7.24516 29.5628 10.4262 26.9596C10.6282 27.1347 10.834 27.3051 11.0433 27.4709C6.30754 31.2968 3.85309 36.8713 2.84971 40.8884L2.38424 42.7519H4.305H40.6556H42.6002L42.1065 40.871C41.0658 36.9062 38.5793 31.3552 33.9069 27.511C34.1154 27.3473 34.3206 27.179 34.5223 27.006C37.6602 29.6244 39.8548 33.0181 41.2949 36.2894C42.5098 39.049 43.1542 41.6443 43.3916 43.5ZM33.375 13.1269C33.375 7.12739 28.498 2.25 22.5 2.25C16.502 2.25 11.625 7.12739 11.625 13.1269C11.625 19.1226 16.502 24.0019 22.5 24.0019C28.498 24.0019 33.375 19.1226 33.375 13.1269ZM10.875 13.1269C10.875 6.70454 16.0798 1.5 22.5 1.5C28.9202 1.5 34.125 6.70454 34.125 13.1269C34.125 19.5455 28.9202 24.7519 22.5 24.7519C16.0798 24.7519 10.875 19.5455 10.875 13.1269Z"
                      fill="black"
                      stroke="#000000"
                      strokeWidth="3"
                    />
                  </svg>
                  <NavLink exact to="profile" activeClassName="active">
                    Profile
                  </NavLink>
                </li>
              </ul>

              <div className="btn" style={{ backgroundColor: 'white' }}>
                <button
                  className="deposit"
                  onClick={this.toggleDeposit}
                  style={{ padding: '10px', backgroundColor: '#c7c7c7' }}
                >
                  Deposit
                </button>
                {this.state.deposit ? <DepositThought toggle={this.toggleDeposit} /> : null}
              </div>
              <div className="btn" style={{ backgroundColor: 'white' }}>
                <button className="sign-out" style={{ padding: '10px', backgroundColor: '#c7c7c7' }}>
                  Sign out
                </button>
              </div>
            </div>
          </nav>
        );
    }
}

export default Header;