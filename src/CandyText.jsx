import { useMatcapTexture, Text3D, Center } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from 'three'


export default function CandyText() {
    const material = new THREE.MeshMatcapMaterial()
    const [ matcapTexture ] = useMatcapTexture('04C455_0EFABC_04F097_04E17A', 256)
    useEffect(() => 
        {
            matcapTexture.colorSpace = THREE.SRGBColorSpace
            matcapTexture.needsUpdate = true


            material.matcap = matcapTexture
            material.needsUpdate = true

        }, [])

    return <>
        <Center position-x={1} position-y={4} position-z={0} rotation-y={- Math.PI / 2}>
            <Text3D 
                material={ material }
                font="./fonts/helvetiker_regular.typeface.json"
                size={ .9 }
                height={ 0.3 }
                curveSegments={ 20 }
                bevelEnabled
                bevelThickness={ 0.1 }
                bevelSize={ 0.05 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                Bus eller 
                Godis?
            </Text3D>
        </Center>
    </>
}
