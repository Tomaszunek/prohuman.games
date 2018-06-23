import * as React from 'react';
import './navigation.css';


class Navigation extends React.Component {
  public render() {
    return (      
        <nav className="navbar navbar-expand-lg">
        <div className="viewport">
            <a className="navbar-brand" href="/">PROHUMAN GAMES</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">a</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">NEWS <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">PROJECTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">SHOP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">LOG IN</a>
                </li>
            </ul>
            </div>
        </div>        
      </nav>
    )
  }
}   

export default Navigation;
