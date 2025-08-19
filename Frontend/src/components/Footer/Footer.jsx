import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" data-aos="fade-up" style={{ background: 'url(src/assets/bg_blue.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer_in_hp">
                        <div className="footer_middle_hp">
                            <div className="footer_desktop_hp">
                                <div className="footer_top_hp">
                                    <div className="footer_in_hp">
                                        <div className="footer_logo_hp">
                                            <a href="#"><img src="images/footer_logo.png" alt="" /></a>
                                        </div>
                                        <div className="footer_info_hp">
                                            Delicious Cafe, 1649 Norman Street,  Los Angeles, 90011
                                        </div>
                                        <div className="footer_email_hp">
                                            <a href="#">hello@deliciouscafe.com</a>
                                        </div>
                                        <div className="footer_num_hp">
                                            <a href="#">8 (800) 316-06-42</a>
                                        </div>
                                        <div className="footer_icons_hp">
                                            <div className="footer_icon_img_hp">
                                                <a href="#"><img src="src\assets\facbook-fotor-2025012712194.png"  /></a>
                                            </div>
                                            <div className="footer_icon_img_hp">
                                                <a href="#"><img src="src\assets\insat-fotor-20250127121824.png"  /></a>
                                            </div>
                                            <div className="footer_icon_img_hp">
                                                <a href="#"><img src="src\assets\x-fotor-20250127121751.png"  /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer_links_hp">
                                        <h5>NAVIGATION</h5>
                                        <ul style={{listStyle: 'none'}}>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Menu</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#"><span>Book a Table</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="footer_img_hp">
                                        <div className="footer_links_hp">
                                            <h5>NAVIGATION</h5>
                                        </div>
                                        <div className="footer_insta_hp">
                                            <div className="footer_insta_img_hp">
                                                <a href="#"><img src="src\assets\gallary_image_41.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer_insta_img_hp">
                                                <a href="#"><img src="src\assets\gallary_image_44.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer_insta_img_hp">
                                                <a href="#"><img src="src\assets\gallary_image_39.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer_insta_img_hp">
                                                <a href="#"><img src="src\assets\gallary_image_40.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer_insta_img_hp">
                                                <a href="#"><img src="src\assets\gallary_image_42.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer_insta_img_hp">
                                                <a href="#"><img src="src\assets\gallary_image_43.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_row_hp">
                                <div className="footer_copyright_hp">@ 2025 D's Cafe. All rights reserved.</div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </footer>
    )
}

export default Footer