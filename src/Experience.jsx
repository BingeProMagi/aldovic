import { MeshReflectorMaterial, Stars, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"
import Witch from "./Witch"
import Skeleton from "./Skeleton"
import Cauldron from "./Cauldron"
import CandyText from "./CandyText"

export default function Experience() {    
    const cube = useRef()
    const sphere = useRef()
    const triangle = useRef()
    const points = [];
    for ( let i = 0; i < 10; i ++ ) {
        points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
    }


    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        {/* <PivotControls 
            anchor={ [ 0,0,0 ] }
            depthTest={ false }
            lineWidth={ 2 }
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ]}
            scale={ 1 }
            //fixed={ true }
        >
            <mesh ref={ sphere } position-x={ - 2.25 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html 
                    position={ [ 1,1,0 ] }
                    wrapperClass="label"
                    center
                    distanceFactor={ 8 }
                    occlude={ [ sphere, cube ]}
                >
                    That's a sphere 👍</Html>
            </mesh>
        </PivotControls> */}

        {/* <mesh scale={ 1.5 } position-x={ -2 } position-y={ 1.2 } position-z={ -3 }>
            <latheGeometry/>
            <meshStandardMaterial color="lightpink" />
        </mesh> */}

        {/* <mesh points={points} scale={ 1.5 } position-x={ 2 } position-y={ 1.2 } position-z={ -3 }>
            <capsuleGeometry/>
            <meshStandardMaterial color="lightpink" />
        </mesh> */}

        {/* <mesh ref={triangle} scale={ 0.75 } position-y={ .1 }>
            <torusGeometry/>
            <meshStandardMaterial color="yellow" />
        </mesh> */}

        {/* <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh> */}
        {/* <TransformControls object={ cube } mode="translate" /> */}

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 40 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial
                resolution={ 512 }
                blur={ [1000, 1000] }
                mixBlur={ 1 }
                mirror={ .75 }
                color="#8649cc"
                //debug
            /> 
        </mesh>

        <mesh position-y={ 4 } position-x={ 5 } rotation-y={ - Math.PI * 0.5 } scale={ 40 }>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={ 512 }
                blur={ [1000, 1000] }
                mixBlur={ 1 }
                mirror={ .75 }
                color="#162d82"
                //debug
            /> 
        </mesh>

        <Stars radius={100} depth={50} count={2000} factor={20} saturation={20} fade speed={1} />

        <Witch position={[0, -1, 0]} rotation-y={ - Math.PI * 0.5 } />

        <Skeleton position={[0, -1, 2]} rotation-y={ - Math.PI * 0.5 } />
        
        <Cauldron position={[-2, -1, 1]} rotation-y={ - Math.PI * 0.5 } />
        
        <CandyText />


        {/* <Float 
            speed={5}
            floatIntensity={2}
        
        >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 1 }
                color="salmon"
                position-y={2}
                maxWidth={5}
                textAlign="center"
                
                >
                I LOVE TURID AND ALDE
            </Text>
        </Float>  */}

    </>
}