import React, { useState } from 'react';
import FeatureWork  from './featureWork';
import FeatureWorkB  from './featureWorkB';

import AcculogicImg from '../images/work/screen-img-acculogic.png';
import MilesGalleryImg from '../images/work/screen-img-gallery-milesit.png';
import MJcorpImg from '../images/work/screen-img-mjcorp.png';
import GSAnationalImg from '../images/work/screen-img-gsanational.png';
import AllEyeCareShopImg from '../images/work/screen-img-alleyecareshop-ecommerce.png';
import AlumiGuardImg from '../images/work/screen-img-alumi-guard.png';
import CRCrealtyImg from '../images/work/screen-img-crcrealty.png';
import ECOAdoctorsImg from '../images/work/screen-img-ecoadoctors.png';
import firstclasslimosImg from '../images/work/screen-img-firstclasslimos.png';
import rimesImg from '../images/work/screen-img-rimes-webflow.png';
import orchardImg from '../images/work/screen-img-orchard.png';
import ichinenImg from '../images/work/screen-img-ichinen.png';
import aibtvImg from '../images/work/screen-img-aib.png';
import coopstrategiesImg from '../images/work/screen-img-coopstrategies.png';
import mbmsImg from '../images/work/screen-img-mbms.png';
import caninedimensionsImg from '../images/work/screen-img-caninedimensions.png';

import bgvscodeparalaxImg from '../images/work/bg-vs-code-paralax-min.png';
import '../assets/css/featurework.css';



function featureInfo(args) {

    const workportfolio = [
        {
            image: MJcorpImg,
            title: "MJcorp",
            alt: "MJcorp",
            cat: "feature wordpress html css javascript php tailwind",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.mjcorp.com/"
            
        },
        {
            image: aibtvImg,
            title: "AIB Network",
            alt: "AIB Network",
            cat: "feature wordpress html css javascript php tailwind woocommerce",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.aibtv.com/"
            
        },
        {
            image: ichinenImg,
            title: "Ichinen USA",
            alt: "Ichinen USA",
            cat: "feature wordpress html css javascript php tailwind woocommerce",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.ichinenusa.com/"
            
        },
        {
            image: coopstrategiesImg ,
            title: "Cooperative Strategies",
            alt: "Cooperative Strategies",
            cat: "feature wordpress html css javascript php tailwind",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.coopstrategies.com/"
            
        },
        {
            image: orchardImg ,
            title: "Orchard Lock",
            alt: "Orchard Lock",
            cat: "feature wordpress html css javascript php bootstrap elementor",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.orchardlock.com/"
            
        },
        {
            image: rimesImg,
            title: "Rimes",
            alt: "Rimes",
            cat: "feature html css javascript webflow",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.rimes.com/"
            
        },
        {
            image: AcculogicImg,
            title: "Acculogic",
            alt: "Acculogic",
            cat: "feature hubspot ecommerce html css javascript php",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.acculogic.com"
            
        },
        {
            image: GSAnationalImg,
            title: "GSA National",
            alt: "GSA National",
            cat: "feature wordpress html css javascript php tailwind",
            description: "Acculogic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.gsanational.com/"
            
        },
        {
            image: AlumiGuardImg,
            title: "Alumi Guard",
            alt: "Alumi Guard",
            cat: "feature wordpress html css javascript php tailwind",
            description: "Alumi Guard Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.alumi-guard.com/"
            
        },
        {
            image: CRCrealtyImg,
            title: "CRCrealty",
            alt: "CRCrealty",
            cat: "feature wordpress html css javascript php tailwind",
            description: "CRCrealty Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.crcrealty.com/"
            
        },
        {
            image: MilesGalleryImg,
            title: "Miles Gallery",
            alt: "Miles Gallery",
            cat: "feature wordpress react javascript tailwind",
            description: "Miles Gallery Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://gallery.milesit.com/"
            
        },
        {
            image: ECOAdoctorsImg,
            title: "ECOA Doctors",
            alt: "ECOA Doctors",
            cat: "feature wordpress html css javascript php tailwind",
            description: "ECOA doctors Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.ecoadoctors.com/"
            
        },
        {
            image: mbmsImg ,
            title: "MBMS",
            alt: "MBMS",
            cat: "feature wordpress html css javascript php tailwind",
            description: "All Eye Care Doctors Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.mbms.net/"
            
        },
        {
            image: AllEyeCareShopImg,
            title: "All Eye Care Doctors",
            alt: "All Eye Care Doctors",
            cat: "feature wordpress ecommerce html css javascript php tailwind",
            description: "All Eye Care Doctors Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.alleyecareshop.com/"
            
        },
        {
            image: firstclasslimosImg,
            title: "First Class Limos",
            alt: "First Class Limos",
            cat: "feature wordpress ecommerce html css javascript php other",
            description: "first class limos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://firstclasslimos.com/"
            
        },
        {
            image: caninedimensionsImg,
            title: "Canine Dimensions",
            alt: "Canine Dimensions",
            cat: "feature wordpress html css javascript php",
            description: "first class limos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.caninedimensions.com/"
            
        }
    ];
    
    const word_cards = workportfolio.map((site, index )=> 
        <FeatureWork key={site.title + "-" + index }  image={site.image} title={site.title} alt={site.alt}  cat={site.cat} description={site.description} url={site.url} />
    );

    const word_cards2 = workportfolio.map((site, index )=> 
        <FeatureWorkB key={site.title + "-" + index }  image={site.image} title={site.title} alt={site.alt}  cat={site.cat} description={site.description} url={site.url} />
    );
    return (
        <section id="portfolio" style={{ backgroundImage: `url(${bgvscodeparalaxImg})` }}>
            <div className="container portfolio-content">
                <h2>Portfolio</h2>
                <div className="flex-card">
                        { word_cards2 }
                </div>
            </div>
        </section>
 
    );

}

export default featureInfo;