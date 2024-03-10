import React, { useState } from 'react';
import FeatureWork  from './featureWork';

import AcculogicImg from '../images/work/screen-img-acculogic.png';
import MilesGalleryImg from '../images/work/screen-img-gallery-milesit.png';
import MJcorpImg from '../images/work/screen-img-mjcorp.png';
import GSAnationalImg from '../images/work/screen-img-gsanational.png';
import AllEyeCareShopImg from '../images/work/screen-img-alleyecareshop-ecommerce.png';
import AlumiGuardImg from '../images/work/screen-img-alumi-guard.png';
import CRCrealtyImg from '../images/work/screen-img-crcrealty.png';
import ECOAdoctorsImg from '../images/work/screen-img-ecoadoctors.png';
import firstclasslimosImg from '../images/work/screen-img-firstclasslimos.png';



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
            image: AllEyeCareShopImg,
            title: "All Eye Care Doctors",
            alt: "All Eye Care Doctors",
            cat: "feature wordpress ecommerce html css javascript php tailwind",
            description: "All Eye Care Doctors Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.alleyecareshop.com/"
            
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
            title: "ECOA doctors",
            alt: "ECOA doctors",
            cat: "feature wordpress html css javascript php tailwind",
            description: "ECOA doctors Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://www.ecoadoctors.com/"
            
        },
        {
            image: firstclasslimosImg,
            title: "first class limos",
            alt: "first class limos",
            cat: "feature wordpress ecommerce html css javascript php other",
            description: "first class limos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus turpis sed risus feugiat, ut elementum turpis interdum. Vivamus nisl arcu",
            url: "https://firstclasslimos.com/"
            
        }
    ];
    
    const word_cards = workportfolio.map((site, index )=> 
        <FeatureWork key={site.title + "-" + index }  image={site.image} title={site.title} alt={site.alt}  cat={site.cat} description={site.description} url={site.url} />
    );

    return (
        <div className="flex justify-between">
            { word_cards }
        </div>
    );

}

export default featureInfo;