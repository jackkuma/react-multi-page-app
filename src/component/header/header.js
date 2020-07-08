import React, { Component, Fragment } from 'react';
import { Button } from 'devextreme-react';

import './header.scss';

export default class Header extends Component {
  render() {
		return (
      <Fragment>
        <header className={'header-component'}>
          <div className="header-title">
            <i></i>
            <h6>CP Map Appication</h6>
            <Button 
             icon="menu"
             stylingMode="text"
             ssClass={'menu-button'}
             onClick={this.onClick}
             />
          </div>
          <div></div>
        </header>
      </Fragment>
    )
  }
};