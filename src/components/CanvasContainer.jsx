import { Canvas} from '@react-three/fiber'
import { OrbitControls, Environment} from '@react-three/drei'
import { useState, useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Camera } from './Camera'


 
gsap.registerPlugin(ScrollTrigger)

export default function CanvasContainer() {

    //<Environment preset={}> is causing anything in Whale.jsx to log twice

    return (
        <Canvas className="overflow-hidden max-w-full">
            {/* <OrbitControls enableZoom={false} /> */}
            <Environment files={ '/fish_hoek_beach_2k.hdr' }/>
            <Camera/>
        </Canvas>
    )
    }