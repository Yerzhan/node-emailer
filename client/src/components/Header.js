import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
			    <div className="nav-wrapper blue">
			      <a className="left brand-logo">Emailer</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li>
			        	<a>Login With Google</a>
			        </li>
			      </ul>
			    </div>
		  	</nav>
		);
	}
}

export default Header;