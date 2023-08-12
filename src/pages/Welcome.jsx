import React from 'react'
import { TestComponent } from '../components/TestComponent'
import { Header } from '../components/header/Header'
import { Hero } from '../components/welcome/Hero'
import { HeroItems } from '../components/welcome/HeroItems'
import { Footer } from '../components/Footer'


export function Welcome() {
    

    return (
        <>
            <Hero />
            <HeroItems />
        </>
    )
}
