import * as ready from 'document-ready-promise'
import * as t from 'three'
import './src/thirdparty/three-tga-loader'
import {MMDLoader, MMDHelper} from 'three-mmd-loader'

window.THREE = t

;(async () => {
    await ready()
    console.log('hi')

    // module.hotyarn
    const canvas = document.querySelector('#canvas')! as HTMLCanvasElement
    const renderer = new t.WebGLRenderer({canvas})
    renderer.setSize(window.innerWidth, window.innerHeight, true)
    renderer.setClearColor( new THREE.Color( 0xffffff ) );

    const scene = new t.Scene()
    const helper = new MMDHelper()

    const loader = new MMDLoader()
    const mesh = await loader.loadModel('./miku/初音ミクVer2_ragg_rmx_1.2_reduced.pmx');
    scene.add(mesh)
    helper.add(mesh)
    helper.setAnimation(mesh)


    const camera = new t.PerspectiveCamera(45, window.innerWidth / window.innerHeight)
    camera.position.y = 20;
    camera.position.z = 30;

    const ambient = new THREE.AmbientLight( 0x666666 );
    scene.add( ambient );

    const directionalLight = new THREE.DirectionalLight( 0x887766 );
    directionalLight.position.set( -1, 1, 1 ).normalize();
    scene.add( directionalLight );

    const animate = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
})()


// if (module.hot) {
//     module.hot.accept(() => {
//         window.t = null
//         window.t = t
//     })
// }