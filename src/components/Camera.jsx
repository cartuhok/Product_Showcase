import { useGLTF, useAnimations, PerspectiveCamera, useVideoTexture } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useControls } from "leva"
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger)

export function Camera(props) {
  const { nodes, materials } = useGLTF("./Camera.glb");

  const [scale, setScale] = useState(window.innerWidth <= 1024 ? 0.7 : 1)
  const [lensPos, setLensPos] = useState(window.innerWidth <= 1024 ? [0.003, -0.031, 0.71] : [ 0.005, -0.031, 0.71])
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  //Set Camera Model's Mobile Scale
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      window.innerWidth <= 1024 ? setScale(0.7) : setScale(1);
    }

    const handleLensResize = () => {
      window.innerWidth <= 1024 ? setLensPos([0.003, -0.031, 0.71]) : setLensPos([0.005, -0.031, 0.71]);
    }

    const handleBothResizes = () => {
      handleResize();
      handleLensResize();
    }

    window.addEventListener('resize', handleBothResizes);

    // Initial call to handle the logic when component mounts
    handleBothResizes();

    return () => window.removeEventListener('resize', handleBothResizes); // Cleanup listener
}, [])


  const isMobile = () => window.innerWidth <= 1024;

  const tl0 = gsap.timeline()
  const tl1 = gsap.timeline()
  const tl2 = gsap.timeline()

  const videoTexture = useVideoTexture("./beach2.mp4")

  const cameraRef = useRef(null)
  const sonyCameraRef = useRef(null)
  const lensRef = useRef(null)

  // const { lightPosition, cameraPosition, scenePosition, sceneRotation, lensPosition, lensRotation } = useControls({
  //   lightPosition: {
  //     value: { 
  //       x: -0.27,
  //       y: -0.08, 
  //       z: 0.33
  //     }
  //   },
  //   cameraPosition: {
  //       value: {
  //           x: 0,
  //           y: 0, 
  //           z: 1
  //       },
  //       step: 0.01
  //   },
  //   scenePosition: {
  //       value: {
  //           x: 0,
  //           y: -0.03,
  //           z: 0.7
  //       },
  //       step: 0.01
  //   },
  //   sceneRotation: {
  //       value: {
  //           x: 0.35,
  //           y: -2.03,
  //           z: 0.09
  //       },
  //       step: 0.01
  //   },
  //   lensPosition: {
  //       value: {
  //         x: 0.005,
  //         y: -0.031, 
  //         z: 0.71
  //       },
  //       step: 0.005
  //   },
  //   lensRotation: {
  //     value: {
  //       x: 0,
  //       y: -2.03, 
  //       z: -0.19
  //     },
  //     step: 0.005
  //   }
  // })

  //Camera + Camera Model Position and Rotation, TL0
  useEffect(() => {

    const mobileCameraPosTl0 = isMobile() ? { x: 0, y: 0, z: 0.9 } : { x: 0, y: 0, z: 0.9 }
    const dslrCamPosThirdSec = isMobile() ? { x: -0.02, y: -0.03, z: 0.7 } : { x: -0.07, y: -0.03, z: 0.7 }


    tl0.to(cameraRef.current.position, {
        ...mobileCameraPosTl0,
        scrollTrigger: {
            trigger: ".second-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            // markers: true,
        }
    })
    .to(sonyCameraRef.current.position,  {
        x: 0,
        y: -0.03,
        z: 0.7,
        scrollTrigger: {
            trigger: ".second-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            // markers: true,
        }
    })

    .to(sonyCameraRef.current.rotation, {
      x: 0,
      y: 1.57,
      z: 0,
      scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
    }
    })

    //Third Section

    .to(cameraRef.current.position, {
      x: 0,
      y: 0,
      z: 1,
      scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
      }
  })
    .to(sonyCameraRef.current.position, {
      ...dslrCamPosThirdSec,
      scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
      }
    })

    .to(sonyCameraRef.current.rotation, {
      x: 0.35,
      y: -1.6,
      z: 0.31,
      scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
    }
  })

    //Fourth Section
    .to(cameraRef.current.position, {
      x: 0,
      y: 0, 
      z: 1,
      scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
      }
    })

    .to(sonyCameraRef.current.position, {
      x: 0,
      y: -0.03,
      z: 0.7,
        scrollTrigger: {
            trigger: ".fourth-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            // markers: true,
        }
    })

  },[])

  // Camera Model Bottom Rotation, TL1
  useEffect(() => {
    tl1
    .to(sonyCameraRef.current.rotation, {
      // x: 0.531,
      // y: -2.231,
      // z: 0.21,
      x: 0.35,
      y: -2.03,
      z: 0.09,
      scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false, 
          // markers: true,
    }
    })
    }, [])

  //Lens Position, TL1
  useEffect(() => {
    const dslrLensPosThirdSec = isMobile() ? { x: 0.04, y: -0.03, z: 0.71 } : { x: 0.07, y: -0.03, z: 0.71 }
    const dslrLensPosFourthSec = isMobile() ? { x: 0.003, y: -0.031, z: 0.71 } : { x: 0.005, y: -0.031, z: 0.71 }


    tl1
    .to(lensRef.current.position,  {
      x: -0.01,
      y: -0.031, 
      z: 0.71,
      scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
      }
    
    })
    .to(lensRef.current.position, {
      ...dslrLensPosThirdSec,
      scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
      }
    })

    .to(lensRef.current.position,  {
      ...dslrLensPosFourthSec,
      scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
      }
    })

  },[])

  //Lens Bottom Rotation, TL2
  useEffect(() => {
    tl2
    .to(lensRef.current.rotation, {
    x: 0,
    y: -2.03, 
    z: -0.19,
    scrollTrigger: {
        trigger: ".fourth-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true,
    }
  })  

  },[])
 
 //Lens Rotation, TL2
  useEffect(() => {
    console.log(lensRef.current.rotation);
    tl2
    .set(lensRef.current.rotation,{
      x: 0,
      y: -2.03, 
      z: -0.19
    })
    .to(lensRef.current.rotation, {
      x: 0,
      y: 1.54, 
      z: 0.11,
        scrollTrigger: {
            trigger: ".second-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            // markers: true,
      }
    })

    .to(lensRef.current.rotation, {
      x: 0,
      y: -2.51,
      z: 1.55,
      scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
    }
  })

  .to(lensRef.current.rotation, {
    x: 0,
    y: -2.03, 
    z: -0.19,
    scrollTrigger: {
        trigger: ".fourth-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true,
    }
  })  

},[])


  return (<>
    <directionalLight castShadow position={[ -0.27, -0.08, 0.33]} intensity={1.5} />
    <PerspectiveCamera
                ref={cameraRef}
                position={[0, 0, 1]}
                makeDefault
    />

<group ref={lensRef} position={lensPos} rotation={[ 0, -2.03, -0.19 ]} scale={scale}>
      <mesh
        name="LensGlass"
        castShadow
        receiveShadow
        geometry={nodes.LensGlass.geometry}
        material={materials["Material.046"]}
      >
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={1}
          transparent
          // transmission={0.95}
          opacity={0.5}
          reflectivity={0.2}
          refractionRatio={0.985}
          ior={0.9}
        />
      </mesh>
      <mesh
        name="Circle031"
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials["Material.050"]}
      />
      <mesh
        name="Circle031_1"
        castShadow
        receiveShadow
        geometry={nodes.Circle031_1.geometry}
        material={materials["Material.048"]}
      />
      <mesh
        name="Circle031_2"
        castShadow
        receiveShadow
        geometry={nodes.Circle031_2.geometry}
        material={materials["Material.051"]}
      />
      <mesh
        name="Circle031_3"
        castShadow
        receiveShadow
        geometry={nodes.Circle031_3.geometry}
        material={materials["Material.047"]}
      />
      <mesh
        name="Circle031_4"
        castShadow
        receiveShadow
        geometry={nodes.Circle031_4.geometry}
        material={materials["Material.049"]}
      />
      </group>

    <group ref={sonyCameraRef} {...props} dispose={null} position={[ 0, -0.03, 0.7 ]} rotation={[ 0.35, -2.03, 0.09 ]} scale={scale}>
      <mesh
        name="Viewport"
        castShadow
        receiveShadow
        geometry={nodes.Viewport.geometry}
        material={materials["Material.024"]}
      >
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={1}
          transparent
          // transmission={0.95}
          opacity={0.5}
          reflectivity={0.2}
          refractionRatio={0.985}
          ior={0.9}
        />
      </mesh>
      <mesh
        name="UV"
        castShadow
        receiveShadow
        geometry={nodes.UV.geometry}
        material={materials["Material.015"]}
      >
        <meshNormalMaterial />
      </mesh>

      

      <mesh
        name="Circle008"
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials["Material.016"]}
      />
      <mesh
        name="Circle008_1"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_1.geometry}
        material={materials["Material.033"]}
      />
      <mesh
        name="Circle008_2"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_2.geometry}
        material={materials["Material.023"]}
      />
      <mesh
        name="Circle008_3"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_3.geometry}
        material={materials["Material.030"]}
      />
      <mesh
        name="Circle008_4"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_4.geometry}
        material={materials["Material.017"]}
      />
      <mesh
        name="Circle008_5"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_5.geometry}
        material={materials["Material.014"]}
      />
      <mesh
        name="Circle008_6"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_6.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Circle008_7"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_7.geometry}
        material={materials["Material.020"]}
      />
      <mesh
        name="Circle008_8"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_8.geometry}
        material={materials["Material.028"]}
      />
      <mesh
        name="Circle008_9"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_9.geometry}
        material={materials["Material.025"]}
      />
      <mesh
        name="Circle008_10"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_10.geometry}
        material={materials["Material.043"]}
      />
      <mesh
        name="Circle008_11"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_11.geometry}
        material={materials["Material.009"]}
      />
      <mesh
        name="Circle008_12"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_12.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Circle008_13"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_13.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        name="Circle008_14"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_14.geometry}
        material={materials["Material.008"]}
      />
      <mesh
        name="Circle008_15"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_15.geometry}
        material={materials["Material.007"]}
      />
      <mesh
        name="Circle008_16"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_16.geometry}
        material={materials["Material.029"]}
      />
      <mesh
        name="Circle008_17"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_17.geometry}
        material={materials["Material.037"]}
      />
      <mesh
        name="Circle008_18"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_18.geometry}
        material={materials["Material.040"]}
      />
      <mesh
        name="Circle008_19"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_19.geometry}
        material={materials["Material.018"]}
      />
      <mesh
        name="Circle008_20"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_20.geometry}
        material={materials["Material.053"]}
      />
      <mesh
        name="Circle008_21"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_21.geometry}
        material={materials["Material.052"]}
      />
      <mesh
        name="Circle008_22"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_22.geometry}
        material={materials["Material.042"]}
      />
      <mesh
        name="Circle008_23"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_23.geometry}
        material={materials["Material.031"]}
      />
      <mesh
        name="Circle008_24"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_24.geometry}
        material={materials["Material.041"]}
      />
      <mesh
        name="Circle008_25"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_25.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="Circle008_26"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_26.geometry}
        material={materials["Material.019"]}
      />
      <mesh
        name="Circle008_27"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_27.geometry}
        material={materials["Material.021"]}
      />
      <mesh
        name="Circle008_28"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_28.geometry}
        material={materials["Material.013"]}
      />
      <mesh
        name="Circle008_29"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_29.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        name="Circle008_30"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_30.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        name="Circle008_31"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_31.geometry}
        material={materials["Material.022"]}
      />
      <mesh
        name="Circle008_32"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_32.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        name="Circle008_33"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_33.geometry}
        material={materials["Material.045"]}
      />
      <mesh
        name="Circle008_34"
        castShadow
        receiveShadow
        geometry={nodes.Circle008_34.geometry}
        material={materials["Material.032"]}
      />
      <mesh
        name="Plane004"
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.034"]}
      />
      <mesh
        name="Plane004_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane004_1.geometry}
        // material={materials["Material.035"]}
        
        flipY={false}
        
      >
        <meshBasicMaterial map={videoTexture}/>
      </mesh>
    </group>
  </>);
}

useGLTF.preload("./Camera.glb");
