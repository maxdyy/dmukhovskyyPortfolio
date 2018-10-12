import { Component } from "react";
import Link from "next/link";
import { dmukhovskyy_en } from "../localization/content.json";

const { header } = dmukhovskyy_en;
const { name, surname, home, about, smart, blog, projects, contact } = header;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { home: this.props.navigation.about ? about : home };
  }

  render() {
    const { navigation } = this.props;
    const { _home, _smart, _projects, _blog, _contact, about } = navigation;

    const smartLink = about ? (
      <a href={_smart}>{smart}</a>
    ) : (
      <Link passHref replace href={_smart}>
        {smart}
      </Link>
    );

    const smartLinkMob = about ? (
      <a className="close-click" href={_smart}>
        {smart}
      </a>
    ) : (
      <Link passHref replace href={_smart} className="close-click">
        {smart}
      </Link>
    );

    return (
      <header className="main-nav">
        <div className="main-nav-wrapper">
          <nav>
            <div className="nav-wrapper">
              <Link passHref replace href="/">
                <a className="brand-logo">
                  <div className="avatar">
                    <img src="static/img/avatar.png" alt="Maksym" />
                    <h1 className="name">
                      <span>{name}</span>
                      <span>{surname}</span>
                    </h1>
                  </div>
                </a>
              </Link>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                }}
                data-activates="mobile-demo"
                className="button-collapse"
              >
                <i className="fas fa-bars" />
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link passHref replace href={_home}>
                    <a>{this.state.home}</a>
                  </Link>
                </li>
                <li>{smartLink}</li>
                <li>
                  <Link passHref replace href={_projects}>
                    <a>{projects}</a>
                  </Link>
                </li>
                <li>
                  <Link passHref replace href={_blog}>
                    <a>{blog}</a>
                  </Link>
                </li>
                <li>
                  <Link passHref replace href={_contact}>
                    <a>{contact}</a>
                  </Link>
                </li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li>
                  <Link passHref replace href={_home}>
                    <a className="close-click">{this.state.home}</a>
                  </Link>
                </li>
                <li> {smartLinkMob}</li>
                <li>
                  <Link passHref replace href={_projects}>
                    <a className="close-click">{projects}</a>
                  </Link>
                </li>
                <li>
                  <Link passHref replace href={_blog}>
                    <a className="close-click">{blog}</a>
                  </Link>
                </li>
                <li>
                  <Link passHref replace href={_contact}>
                    <a className="close-click">{contact}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Menu;
