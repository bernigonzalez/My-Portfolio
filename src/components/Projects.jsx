
import React from 'react'
import mobiImg from "../assets/projects/mobiATR.JPG"
import pokemonImg from "../assets/projects/Pokemon.JPG"
import portfolioImg from "../assets/projects/Portfolio.JPG"
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='w-full'>    
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl trackings-widest uppercase text-indigo-700'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              
                <ProjectItem
                title='Furniture Ecommerce'
                backgroundImg={mobiImg}
                projectUrl='https://mobi-app.netlify.app/home'
              />

              <ProjectItem
                title='Pokedex Web-App'
                backgroundImg={pokemonImg}
                projectUrl='https://pokemon-app-three-henna.vercel.app/'
              />

              <ProjectItem
                title='Portfolio Website'
                backgroundImg={portfolioImg}
                projectUrl='https://portfolio-bernardo-dev.vercel.app/'
              />
                
            </div>
        </div>
    </div>
  )
}

export default Projects