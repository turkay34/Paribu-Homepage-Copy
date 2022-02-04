import {Component} from "react";
import classes from "./CallToAction.module.scss";

class RegisterCTA extends Component {
    render() {
        return (
            <div className={classes.ctaContainer}>
                <div className={classes.ctaRow}>
                    <div className={classes.ctaColumn}>
                        <div className={classes.ctaHomeRegisterCall}>
                            <div className={classes.ctaWrapper}>
                                <div className={classes.ctaExplanation}>
                                    <h2>Paribu'ya üye olmak anında.</h2>
                                    <p>Hesap oluştur, kimliğini doğrula, ilk kripto paranı al.</p>
                                </div>
                                <button className={classes.ctaPrimaryCall}>Ücretsiz Üye Ol</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterCTA;