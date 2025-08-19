import React from 'react';
import contactImage from '../../assets/contact.jpg';
import bgImage from '../../assets/bgbg.jpg';
import bg2Image from '../../assets/bg_2.jpg';
import restaurants_with_live_music from '../../assets/restaurants-with-live-music.jpg';
import Sunday_Brunch from '../../assets/Sunday_Brunch.jpg';
import first_blog_poster from '../../assets/first_blog_poster.png';
import third_blog_poster from '../../assets/3rd_blog_poster.png'
import './Blog.css';
import '../../css/stylesheet.css';

const Blog = () => {
    return (
        <section id="contain">
            <div className="contact_block_cp" style={{ background: `url(${contactImage}) no-repeat center`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div className="row">
                        <div className="col contact_block_in_cp">
                            <div className="contact_middle_cp">
                                <div className="contact_top_cp">
                                    <div className="contact_title_cp">
                                        Recent News
                                    </div>
                                    <div className="contact_info_cp">
                                        Feel free to send us a message.
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="blog_block_bp" style={{ background: `url(${bgImage}) no-repeat top center`, backgroundSize: 'cover' }}>
                <div className="container container_big">
                    <div className="row">
                        <div className="col blog_block_in_bp">
                            <div className="blog_middle_bp">
                                <div className="blog_title_main_bp">
                                    <h2 style={{ fontSize: "2rem" }}>We’re thrilled to have you here!!!</h2>
                                </div>
                                <div className="blog_info_bp">
                                    <p>On our blog, you'll find behind-the-scenes glimpses of our café life, stories from our talented baristas, tips on brewing the perfect cup at home, and exciting updates on our latest creations and events</p>
                                </div>
                                <div className="blog_top_bp" style={{ background: `#fff url(${bg2Image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                                    <div className="blog_year_bp">
                                        Promotion
                                    </div>
                                    <div className="blog_left_bp">
                                        <img src={first_blog_poster} alt="" />
                                    </div>
                                    <div className="blog_right_bp">
                                        <div className="blog_right_info_bp">
                                         February 25, 2025
                                        </div>
                                        <div className="blog_right_in_bp">
                                            <div className="blog_title_bp">
                                                <br></br>
                                                Exclusive Happy Hour Deal <br></br>Get Up to 20% OFF! 🥳
                                            </div>
                                            <div className="blog_subinfo_bp">
                                                <p><strong>Enjoy Special Savings:</strong> We love treating our customers! For a limited time, enjoy <strong>up to 20% OFF</strong> on your first order when you spend <strong>$500 or more</strong>.</p>
                                                <p><strong>Coupon Code:</strong> Use <strong>DSCAFE20</strong> at checkout to grab this amazing deal.</p>
                                                <p><strong>Hurry Up!</strong> Delicious savings await—order now! 🍕🥤</p>
                                                <p><strong>Expiry Date:</strong> August 1, 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog_top_bp" style={{ background: `#fff url(${bg2Image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                                    <div className="blog_year_bp">
                                    Events
                                    </div>
                                    <div className="blog_left_bp">
                                        <img src={restaurants_with_live_music} alt="" />
                                    </div>
                                    <div className="blog_right_bp">
                                        <div className="blog_right_info_bp">
                                        January 24, 2025
                                        </div>
                                        <div className="blog_right_in_bp">
                                            <div className="blog_title_bp">
                                                <br></br>Live Music Night 🎶
                                            </div>
                                            <div className="blog_subinfo_bp">
                                                <p><strong>Join the Fun:</strong> Enjoy an unforgettable evening of live music, great food, and a vibrant atmosphere at D’s Cafe!</p>
                                                <p><strong>Groove to the Beats:</strong> Local artists will set the mood while you indulge in your favorite meals.</p>
                                                <p><strong>Event Theme:</strong> Retro Vibes – Dress up in your best vintage outfit and enjoy the golden era of music!</p>
                                                <p><strong>Special Offer:</strong> Get a free dessert with every meal when you use the coupon code <strong>LIVEVIBES10</strong>.</p>
                                            </div>
                                            <div className="blog_time_bp">
                                                Time: Friday, March 15th | 7 PM – 10 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog_top_bp" style={{ background: `#fff url(${bg2Image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                                    <div className="blog_year_bp">
                                      New dishes
                                    </div>
                                    <div className="blog_left_bp">
                                        <img src={third_blog_poster} alt="" />
                                    </div>
                                    <div className="blog_right_bp">
                                        <div className="blog_right_info_bp">
                                            March 4, 2025
                                        </div>
                                        <div className="blog_right_in_bp">
                                            <div className="blog_title_bp">
                                                <br></br>
                                                Try Our New Mouthwatering Dishes! 🍽️
                                            </div>
                                            <div className="blog_subinfo_bp">
                                                <p><strong>Spicy Paneer Wrap:</strong> A flavorful delight with marinated paneer, fresh veggies, and a tangy sauce wrapped in a soft tortilla.</p>
                                                <p><strong>Mediterranean Quinoa Salad:</strong> A refreshing mix of quinoa, cherry tomatoes, olives, and feta cheese with a lemon herb dressing.</p>
                                                <p><strong>Chocolate Lava Cake:</strong> A warm, gooey dessert that melts in your mouth—the perfect sweet treat to end your meal.</p>
                                                <br></br>
                                                <p><strong>🍽️ FOOODIE25 – Get $25 off on your next order!</strong></p>
                                                <p><strong>🗓️ Expiry Date: </strong>September 1, 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="blog_top_bp" style={{ background: `#fff url(${bg2Image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                                    <div className="blog_year_bp">
                                        Events
                                    </div>
                                    <div className="blog_left_bp">
                                        <img src={Sunday_Brunch} alt="" />
                                    </div>
                                    <div className="blog_right_bp">
                                        <div className="blog_right_info_bp">
                                            January 30, 2024
                                        </div>
                                        <div className="blog_right_in_bp">
                                            <div className="blog_title_bp">
                                                <br></br>
                                                Sunday Brunch & Coffee Tasting A Gourmet Experience! ☕
                                            </div>
                                            <div className="blog_subinfo_bp">
                                                <p><strong>Elevate Your Brunch Game:</strong> Indulge in a curated menu featuring fluffy waffles, creamy avocado toast, and artisanal pastries.</p>
                                                <p><strong>Signature Coffee Experience:</strong> Discover rich aromas and bold flavors with a guided coffee tasting session by our expert baristas.</p>
                                                <p><strong>Theme:</strong> Cozy Café Vibes – Relax, sip, and savor the moment in a warm, inviting atmosphere.</p>
                                                <p><strong>Special Offer:</strong> Use code <strong>BRUNCHBREW15</strong> for 15% OFF your brunch order.</p>
                                            </div>
                                            <div className="blog_time_bp">
                                                Time: Sunday, March 24th | 10 AM – 1 PM
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
        </section>
    );
};

export default Blog;