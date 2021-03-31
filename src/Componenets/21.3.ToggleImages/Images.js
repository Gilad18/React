import React , {useRef} from 'react'
import Image1Color from './photoOneColor.jpg'
import Image1Bnw from './photoOneBnW.jpg'
import Image2Color from './photoTwoColor.jpg'
import Image2Bnw from './photoTwpBnW.jpg'



export default function Images() {

    const image1Ref = useRef();
    const image2Ref = useRef();

    const  onHoverImg1 = () => {
        image1Ref.current.style.background = `url(${Image1Color}) center center / cover no-repeat`
    }
    const onLeaveImg1 = () => {
        image1Ref.current.style.background = `url(${Image1Bnw}) center center / cover no-repeat`
    }

    const  onHoverImg2 = () => {
        image2Ref.current.style.background = `url(${Image2Color}) center center / cover no-repeat`
    }
    const onLeaveImg2 = () => {
        image2Ref.current.style.background = `url(${Image2Bnw}) center center / cover no-repeat`
    }

    return (
        <div style={{display : 'flex' , justifyContent:'space-around' }}>
            <div  ref={image1Ref}   onMouseEnter={onHoverImg1}  onMouseLeave={onLeaveImg1}
                style={{ width: '300px', height: '300px', background: `url('${Image1Bnw}') no-repeat center/cover` }} ></div>

            <div   ref={image2Ref}  onMouseEnter={onHoverImg2}  onMouseLeave={onLeaveImg2}
                style={{ width: '300px', height: '300px', background: `url('${Image2Bnw}') no-repeat center/cover` }} ></div>

        </div>

    )
}
