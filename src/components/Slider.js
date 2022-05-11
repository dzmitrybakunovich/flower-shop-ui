import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import tulips from '../assets/tulips.png';
import plants from '../assets/plants.png';
import outside_flowers from '../assets/outside_flowers.png';
import '../components/styles/slider.css';

export default class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="slider-item-first">
                    <img className="slider-item-image" src={tulips} alt="Fresh tulips"/>
                    <p className="slider-item-text_title">Fresh flowers.</p>
                    <p className="slider-item-text_subtitle">Create your own bouquets for a charming decoration or
                        memorable gift!</p>
                </Carousel.Item >
                <Carousel.Item className="slider-item-second">
                    <img className="slider-image" src={plants} alt="Home plants"/>
                    <p className="slider-item-text_title">Home plants.</p>
                    <p className="slider-item-text_subtitle">Huge variety of plants, grown with love!</p>
                </Carousel.Item>
                <Carousel.Item className="slider-item-third">
                    <img className="slider-image" src={outside_flowers} alt="Outside plant"/>
                    <p className="slider-item-text_title">Find an outside plant!</p>
                    <p className="slider-item-text_subtitle">Great way to make your house more nature friendly!</p>
                </Carousel.Item>
            </Carousel>);
    }
}
