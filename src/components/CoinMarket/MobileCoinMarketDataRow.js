import {Component} from "react";
import classes from "./CoinMarket.module.scss";

class MobileCoinMarketDataRow extends Component {
    render() {
        return (
            <li>
                <div className={classes.coinListWrapper}>
                    <div className={classes.coinInformation}>
                        <div className={classes.mobileImageWrapper}>
                            <div className={classes.coinImageBackground}
                                 style={{background: `${this.props.coinBackgroundRgb}`}}/>
                            <img src={this.props.coinLogo} alt=""/>
                        </div>
                        <div className={classes.coinMobileInformation}>
                            <h4>{this.props.coinName}</h4>
                            <span className={classes.coinMobileVolume}>{this.props.coinMarketValue} <span
                                className={classes.coinMobileVolumeSymbol}>{this.props.coinMarketValueSymbol}</span></span>
                        </div>
                    </div>
                    <div className={classes.coinGraphic}>
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
                    </div>
                    <div className={classes.coinLastChanges}>
                        <div className={classes.mobileLastChangesWrapper}>
                            <span className={classes.mobileLastStatus}>{this.props.coinLastStatus}<span className={classes.mobileLastStatusSymbol}>{this.props.coinSymbol}</span></span>
                            {this.props.coinValueStatus === '+' ? <span className={classes.mobilePercentagePositive}>{this.props.coinPercentage}</span> : <span className={classes.mobilePercentageNegative}>{this.props.coinPercentage}</span>}
                        </div>
                        <span className={classes.mobileMoreArrow}><i className="fas fa-angle-right"/></span>
                    </div>
                </div>
            </li>
        )
    }
}

export default MobileCoinMarketDataRow;