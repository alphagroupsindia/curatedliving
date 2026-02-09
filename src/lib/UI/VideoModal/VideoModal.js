"use client"
import ReactPlayer from 'react-player';
import styles from './HomeVideo.module.css';
const HomeVideo=()=>{
    let videosrc = "/videos/video.mp4";

    return (
      <div className={styles.playerWrapper}>
        <ReactPlayer
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                poster: "/images/services-bg.png",
              },
            },
          }}
         className={styles.reactPlayer}
          url={videosrc}
          width="100%"
          height="100%"
          controls
          light={false}
          pip={false}
        />
      </div>
    );
}

export default HomeVideo;