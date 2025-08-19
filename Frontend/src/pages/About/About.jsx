import React from 'react';
import './About.css'; 
import '../../css/stylesheet.css';

import bgBg from '../../assets/bgbg.jpg';
import bgImgAp from '../../assets/bg_imgap.jpg';
import aboutUsBanner from '../../assets/about_us_banner.jpg';
import cleanImg1 from '../../assets/clean_img1.png';
import cleanImg2 from '../../assets/clean_img2.png';
import cleanImg3 from '../../assets/clean_img3.png';
import cleanImg4 from '../../assets/clean_img4.png';

import gallery1 from '../../assets/gallary_image_1.jpg';
import gallery2 from '../../assets/gallary_image_2.jpg';
import gallery3 from '../../assets/gallary_image_45.jpg';
import gallery4 from '../../assets/gallary_image_4.jpg';
import gallery5 from '../../assets/gallary_image_29.jpg';
import gallery6 from '../../assets/gallary_image_49.jpg';
import gallery7 from '../../assets/gallary_image_25.jpg';
import gallery8 from '../../assets/gallary_image_35.jpg';
import gallery9 from '../../assets/gallary_image_8.jpg';
import gallery10 from '../../assets/gallary_image_9.jpg';
import gallery11 from '../../assets/gallary_image_10.jpg';
import gallery12 from '../../assets/gallary_image_11.jpg';
import gallery13 from '../../assets/gallary_image_12.jpg';
import gallery14 from '../../assets/gallary_image_13.jpg';
import gallery15 from '../../assets/gallary_image_14.jpg';


const About = () => {
    return (    
       <section id="contain" style={{ background: `url(${bgBg})` }}>         
    <div className="banner_block_ap" style={{ background: `url(${bgImgAp}) no-repeat top center`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>             
            <div className="container">
                <div className="row">
                    <div className="col banner_block_in_ap">                        
                        <div className="banner_middle_ap"> 
                            <div className="banner_title_ap"> 
                                ABOUT US
                            </div>                          
                        </div>                                             
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>            
            <div className="clearfix"></div>
        </div>
        <div className="about_block_ap">             
            <div className="container">
                <div className="row">
                    <div className="col about_block_in_ap">                        
                        <div className="about_middle_ap"> 
                            <div className="about_top_ap"> 
                                <div className="about_left_ap"> 
                                    <div className="about_left_in_ap"> 
                                        <div className="about_left_subtitle_ap"> 
                                            Chief’s Word
                                        </div>
                                        <div className="about_left_title_ap">
                                            MADE WITH LOVE
                                        </div>
                                        <div className="about_left_info_ap"> 
                                            <p>pizza is one of the most wholesome foods that man can eat. In fact, people have been eating pizza throughout human history. 
                                            These days, many cooks yearn to add pizza to their repertoire, but the whole process of cleaning and filleting</p>
                                        </div> 
                                        <div className="about_left_name_ap"> 
                                            Dhruvil Radadiya
                                        </div>
                                    </div> 
                                </div>                                     
                                <div className="about_right_gp"> 
                                    <div className="about_right_video_ap">
                                        <img src={aboutUsBanner} alt="" />
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
        <div className="gallary_block_ap">             
            <div className="container">
                <div className="row">
                    <div className="col gallary_block_in_ap">                        
                        <div className="gallary_middle_ap"> 
                            <div className="gallary_top_ap"> 
                                {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15].map((image, index) => (
                                    <div className="gallary_img_ap" key={index}>
                                        <img src={image} alt="" />
                                    </div>
                                ))}
                            </div>                      
                        </div>                                             
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>            
            <div className="clearfix"></div>
        </div>
        <div className="better_block_hp">             
            <div className="container-fluid">
                <div className="row">
                    <div className="col better_block_in_hp">                        
                        <div className="better_middle_hp">
                            <div className="about_right_info_hp better_title_hp">
                                <h2>Better Hygiene</h2>
                            </div>
                            <div className="better_top_hp">
                                {[{img: cleanImg1, text: 'Rider hand sanitization'}, {img: cleanImg2, text: 'Mandatory Mask'}, {img: cleanImg3, text: 'Regular Staff Temperature Check'}, {img: cleanImg4, text: 'Who advisory guideline'}].map((item, index) => (
                                    <div className="better_box_hp" key={index}>
                                        <div className="better_box_img_hp">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="better_box_info_hp">
                                            {item.text.split(' ').map((line, i) => (
                                                <React.Fragment key={i}>{line}<br/></React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                ))}
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
}
export default About;