import {Component} from "react";
import classes from "./common.module.scss";

import paribuLogo from "../../assets/img/logo.png";

class Header extends Component {
    render() {
        return (
            <header className={classes.navbarWrapper}>
                <div className={classes.navbarContainer}>
                    <a href="/">
                        <div className={classes.navbarLogoWrapper}>
                            <img src={paribuLogo} alt="paribu"/>
                        </div>
                    </a>
                    <div className={classes.navbarLinkWrapper}>
                        <div className={classes.navbarMenu}>
                            <a href="/">Piyasalar</a>
                            <a href="/">Kolay Al/Sat</a>
                        </div>
                        <button>Giriş Yap</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;