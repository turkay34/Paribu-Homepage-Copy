import {Component} from "react";
import classes from "./CoinMarket.module.scss";

class CoinMarketTableDataRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    <div className={classes.coinWrapper}>
                        <div className={classes.coinImageWrapper}>
                            <div className={classes.coinImageBackground} style={{background: `${this.props.coinBackgroundRgb}`}}/>
                            <img src={this.props.coinLogo} alt=""/>
                        </div>
                        <span className={classes.coinTitle}>{this.props.coinName}</span>
                        <span className={classes.coinAbbr}>{this.props.coinTag}</span>
                    </div>
                </td>
                <td style={{textAlign: 'end'}}>
                                        <span className={classes.coinLastStatus}>
                                            {this.props.coinLastStatus}
                                            <span className={classes.coinLastSymbol}>{this.props.coinSymbol}</span>
                                        </span>
                </td>
                <td style={{textAlign: 'end'}}>
                                    <span
                                        className={`${classes.coinPercentage} ${this.props.coinValueStatus === '+' ? `${classes.coinEarnedValue}` : `${classes.coinLostValue}`}`}>{this.props.coinPercentage}</span>
                </td>
                <td style={{textAlign: 'end'}}>
                                    <span className={classes.coinMarketValue}>{this.props.coinMarketValue}<span
                                        className={classes.coinMarketValueSymbol}>{this.props.coinMarketValueSymbol}</span></span>
                </td>
                <td>
                    <svg strokeLinecap="round" display="block" strokeWidth="2" viewBox="0 0 300 75">
                        <defs>
                            <linearGradient id="98" gradientUnits="userSpaceOnUse" x1="0" y1="100%" x2="0" y2="0">
                                <stop offset="0" stopColor="currentColor"/>
                            </linearGradient>
                        </defs>
                        <path
                            d={this.props.coinSvg}
                            fill="none" stroke="url(#98)"/>
                    </svg>
                </td>
                <td style={{textAlign: 'center'}}>
                    <a className={classes.buyCoin} href={`/${this.props.coinName}`}>al</a>
                    <a className={classes.transparentBuyCoin} href={`/${this.props.coinName}`}/>
                </td>
            </tr>
        )
    }
}

export default CoinMarketTableDataRow;