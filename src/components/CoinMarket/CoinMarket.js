import {Component} from "react";
import CoinMarketTableDataRow from "./CoinMarketTableDataRow";
import MobileCoinMarketDataRow from "./MobileCoinMarketDataRow";
import { coins } from "../CoinData";
import classes from "./CoinMarket.module.scss";

import MediaQuery from "react-responsive";

class CoinMarket extends Component {

    render() {
        return (
            <div className={classes.paribuContainer}>
                <div className={classes.paribuTable}>
                    <MediaQuery minWidth={961}>
                        <div className={classes.coinTableWrapper}>
                            <table>
                                <thead>
                                <tr>
                                    <th role="columnheader" scope="col"/>
                                    <th role="columnheader" style={{width: "10%", minWidth: "10%", textAlign: 'end'}}
                                        scope="col">Son İşlem
                                    </th>
                                    <th role="columnheader" style={{width: "10%", minWidth: "10%", textAlign: 'end'}}
                                        scope="col">Değişim
                                    </th>
                                    <th role="columnheader" style={{width: "10%", minWidth: "10%", textAlign: 'end'}}
                                        scope="col">Hacim
                                    </th>
                                    <th role="columnheader" style={{width: "15%", minWidth: "15%", textAlign: 'center'}}
                                        scope="col">24s Grafik
                                    </th>
                                    <th role="columnheader" style={{width: "2%", minWidth: "2%"}} scope="col"/>
                                </tr>
                                </thead>
                                <tbody>
                                {coins.map(coin => (
                                    <CoinMarketTableDataRow
                                        key={coin.coinKey}
                                        coinLogo={coin.coinLogo}
                                        coinBackgroundRgb={coin.coinBackgroundRgb}
                                        coinName={coin.coinName}
                                        coinTag={coin.coinTag}
                                        coinLastStatus={coin.coinLastStatus}
                                        coinSymbol={coin.coinSymbol}
                                        coinPercentage={coin.coinPercentage}
                                        coinValueStatus={coin.coinValueStatus}
                                        coinMarketValue={coin.coinMarketValue}
                                        coinMarketValueSymbol={coin.coinMarketValueSymbol}
                                        coinSvg={coin.coinSVG}
                                    />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={960}>
                        <div className={classes.mobileTableWrapper}>
                            <ul>
                                {coins.map(coin => (
                                    <MobileCoinMarketDataRow
                                        key={coin.coinKey}
                                        coinLogo={coin.coinLogo}
                                        coinBackgroundRgb={coin.coinBackgroundRgb}
                                        coinName={coin.coinName}
                                        coinTag={coin.coinTag}
                                        coinLastStatus={coin.coinLastStatus}
                                        coinSymbol={coin.coinSymbol}
                                        coinPercentage={coin.coinPercentage}
                                        coinValueStatus={coin.coinValueStatus}
                                        coinMarketValue={coin.coinMarketValue}
                                        coinMarketValueSymbol={coin.coinMarketValueSymbol}
                                        coinSvg={coin.coinSVG}
                                    />
                                ))}
                            </ul>
                        </div>
                    </MediaQuery>
                    <a className={classes.tableBottomExplore} href="/detail"><span className={classes.bottomContent}>Piyasadaki tüm kripto para birimlerini keşfedin</span></a>
                </div>
            </div>
        )
    }
}

export default CoinMarket;