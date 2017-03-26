import * as ready from 'document-ready-promise'
import * as t from 'three'
import './src/thirdparty/three-tga-loader'
import './src/thirdparty/three-mmd-loader'

window.t = t

;(async () => {
    await ready()
    console.log('hi')

    // module.hotyarn
    const canvas = document.querySelector('#canvas')! as HTMLCanvasElement
    const renderer = new t.WebGLRenderer({canvas})
    renderer.setSize(window.innerWidth, window.innerHeight, true)

    const loader = new t.MMDLoader()
    // loader.setDefaultTexturePath('./assets/textures')
    loader.load(['./miku/初音ミクVer2_ragg_rmx_1.2_reduced.pmx'])

    // loader.load()
    // const scene = new t.Scene()
    // scene
})()


if (module.hot) {
    module.hot.accept(() => {
        window.t = null
        window.t = t
    })
}