import React from 'react';
import { Article } from './Article';
import imageArticle from '../assets/images/image-retro-pcs.jpg';
import imageTopLaptops from '../assets/images/image-top-laptops.jpg';
import imageGamingGrowth from '../assets/images/image-gaming-growth.jpg';

export const ArticlesContainer = () => {
  return (
    <section className='md:flex md:flex-wrap  mt-6 md:gap-8'>
        <Article img={imageArticle} number='01' title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades?'/>
        <Article img={imageTopLaptops} number='02' title='Top 10 Laptops of 2022' text='Our best picks for various needs and budgets.'/>
        <Article img={imageGamingGrowth} number='03' title='The Growth of Gaming ' text='How the pandemic has sparked fresh opportunities.'/>
    </section>
  )
}
