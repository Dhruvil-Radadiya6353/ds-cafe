import React from 'react';
import bgImage from '../../assets/bgbg.jpg'; 
import beautifulImage from '../../assets/beautiful_img.jpg'; 
import foodImage from '../../assets/food_img1.jpg';
import welcomeImage from '../../assets/welcome_img.png';
import './AboutBlock.css';
import '../../css/stylesheet.css';

const AboutBlock = () => {
    return (
        <div>
            <div className="about_block_ap"
                style={{ background: `url(${bgImage}) no-repeat top center`, backgroundSize: 'cover' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col about_block_in_ap">
                            <div className="about_middle_ap">
                                <div className="about_top_ap">
                                    <div className="about_left_ap">
                                        <div className="about_left_in_ap">
                                            <div className="about_left_title_ap">
                                                BEAUTIFUL INTERIOR
                                            </div>
                                            <div className="about_left_info_ap">
                                                <p>where culinary delights are complemented by an ambiance that speaks
                                                    of elegance and charm. Step into our world of tasteful design, where
                                                    every corner is adorned with meticulous attention to detail. From
                                                    the soft glow of ambient lighting to the harmonious blend of colors
                                                    and textures, our beautiful interior sets the stage for memorable
                                                    dining moments.</p>
                                                <p>Whether you’re exploring our curated recipes or discovering the
                                                    latest food trends, let our inviting space inspire your culinary
                                                    journey. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about_right_gp">
                                        <div className="about_right_video_ap">
                                            <img src={beautifulImage} alt="Beautiful Interior" />
                                        </div>
                                    </div>
                                </div>
                                <div className="about_top_ap about_reverse_ap">
                                    <div className="about_left_ap">
                                        <div className="about_left_in_ap">
                                            <div className="about_left_title_ap">
                                                ONLY FRESH FOOD
                                            </div>
                                            <div className="about_left_info_ap">
                                                <p>Start with a catchy title that highlights freshness, such as
                                                    "Embracing Freshness: Our Commitment to Quality Ingredients." In the
                                                    introduction, emphasize the importance of fresh food in creating
                                                    delicious dishes.</p>
                                                <p> Explain why fresh ingredients are superior. Mention benefits like
                                                    better taste, nutritional value, and support for local farmers or
                                                    producers.</p>
                                                <p><span>Dhruvil Radadiya</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about_right_gp">
                                        <div className="about_right_video_ap">
                                            <img src={foodImage} alt="Fresh Food" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="welcome_block_hp" style={{ background: `url(${bgImage})` }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col welcome_block_in_hp">
                            <div className="welcome_middle_hp">
                                <div className="welcome_top_hp">
                                    <div className="welcome_left_hp">
                                        <div className="welcome_left_title_hp">
                                            WELCOMING ATMOSPHERE
                                        </div>
                                        <div className="welcome_left_info_hp">
                                            Greeting others with genuine warmth and a friendly attitude instantly puts
                                            people at ease. This can be through verbal greetings, smiles, or even small
                                            gestures like offering refreshments.
                                            <br></br>
                                            Get up to 20% OFF on your first order! 🍕🥤 Use code: <b>HAPPYHOUR20</b> (Min. order $250)
                                        </div>
                                    </div>
                                    <div className="welcome_right_hp">
                                        <div className="welcome_right_inner_hp">
                                            <div className="welcome_right_img_hp">
                                                <img src={welcomeImage} alt="Welcoming Atmosphere" />
                                            </div>
                                            <div className="welcome_right_in_hp">
                                                <div className="welcome_right_btn_hp">
                                                    <a href="#">15-18PM</a>
                                                </div>
                                                <div className="welcome_right_title_hp">
                                                    HAPPY HOUR
                                                    <span>Get 20% OFF on your first order!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default AboutBlock;