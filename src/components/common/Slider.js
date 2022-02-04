import {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./common.module.scss";

class Carousel extends Component {
    settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    render() {
        return (
            <Slider {...this.settings}>
                <div>
                    <div className={classes.carouselBannerFirstImage}>
                        <div className={classes.carouselItem}>
                            <div className={classes.carouselResponsiveContent}>
                                <div className={classes.carouselContainer}>
                                    <div className={classes.carouselRow}>
                                        <div className={classes.rowWrapper}>
                                            <h3>
                                                <p>Paribu'nun kullanıcı sayısı 5. yılında</p>
                                                <p>5 milyonu aştı.</p>
                                            </h3>
                                        </div>
                                        <div className={classes.rowWrapper}>
                                            <div className={classes.bannerImage}>
                                                <div className={classes.imageWrapper}>
                                                    <div className={classes.imageSizer}/>
                                                    <div className={classes.imageContainer} style={{backgroundImage: 'url(https://www.paribu.com/img/banner-5m.5b0af126.png)'}}/>
                                                    <div className={classes.imageContent}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.carouselBannerSecondImage}>
                        <div className={classes.carouselItem}>
                            <div className={classes.carouselResponsiveContent}>
                                <div className={classes.carouselContainer}>
                                    <div className={classes.carouselRow}>
                                        <div className={classes.rowWrapper} style={{flexDirection: 'column'}}>
                                            <h2 className={classes.rowHeaderTitle}>Paribu Box açıldı.</h2>
                                            <h3 className={classes.rowHeaderContent}>Metaverse projelerinin de yer aldığı erken dönem projelere ait token’ların listeleneceği Paribu Box açıldı.</h3>
                                        </div>
                                        <div className={classes.rowWrapper}>
                                            <div className={classes.bannerImage}>
                                                <div className={classes.imageWrapper}>
                                                    <div className={classes.imageSizer}/>
                                                    <div className={classes.imageContainer} style={{backgroundImage: 'url(https://www.paribu.com/img/banner-25-img-2.142ae25a.png)'}}/>
                                                    <div className={classes.imageContent}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

export default Carousel;