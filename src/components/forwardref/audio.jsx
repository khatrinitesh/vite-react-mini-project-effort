import React,{forwardRef}  from 'react';
import track from '../../../assets/audio/music.mp3';


const Audio = (props,ref) =>{
    return (
        <>
            <audio src={track} ref={ref} controls></audio>
        </>
    )
};

export default forwardRef(Audio)