const Box = () => {
    return (
        <div style={cubeStyle.cube}>
            <div style={cubeStyle.cubeTop} className='cubeTop'></div>
            <div style={cubeStyle.cubeDiv}>
                <span
                    ref={(el) => el && el.style.setProperty('--i', '0')}
                    style={cubeStyle.cubeDivSpan}
                ></span>
                <span
                    ref={(el) => el && el.style.setProperty('--i', '1')}
                    style={cubeStyle.cubeDivSpan}
                ></span>
                <span
                    ref={(el) => el && el.style.setProperty('--i', '2')}
                    style={cubeStyle.cubeDivSpan}
                ></span>
                <span
                    ref={(el) => el && el.style.setProperty('--i', '3')}
                    style={cubeStyle.cubeDivSpan}
                ></span>
            </div>
            <div style={cubeStyle.cubeBottom} className='cubeBottom'></div>
        </div>
    )
}
const cubeStyle = {
    '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        background: 'black'
    },
    cube: {
        position: 'relative',
        width: '300px',
        height: '300px',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(-30deg)',
        animation: 'animate 10s linear infinite'
    },
    cubeDiv: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d'
    },
    cubeDivSpan: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(#151515,#00ec00)',
        transform: 'rotateY(calc(90deg*var(--i))) translateZ(150px)'
    },
    cubeTop: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '300px',
        height: '300px',
        background: '#222',
        transform: 'rotateX(90deg) translateZ(150px)'
    },
    cubeBottom: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '300px',
        height: '300px',
        background: '#0f0',
        transform: 'rotateX(-90deg) translateZ(300px)',
        filter: 'blur(20px)',
        boxShadow:
            '0 0 120px rgba(0,255,0,0.2) 0 0 200px rgba(0,255,0,0.4) 0 0 300px rgba(0,255,0,0.6) 0 0 400px rgba(0,255,0,0.8) 0 0 500px rgba(0,255,0,1)'
    }
}

export default Box
