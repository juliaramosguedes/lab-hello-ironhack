import React, { Component } from 'react';
import './Header.css';
import Title from '../Title/Title';

class Header extends Component {
  render() {
    const { text } = this.props;

    return (
    <header>
      <nav>
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg" className="img-title" />
      </nav>
      <div>
        <Title text={text} />
        <aside>You will learn a Frontend<br />
          framework from scratch, to<br />
          became a  Ninja Developer.
        </aside>
        <button>Awesome!</button>
      </div>
    </header>
    )
  }
}

export default Header;