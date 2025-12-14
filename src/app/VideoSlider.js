import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    name: 'Shakib Al Hasan',
    label: 'Testimonial From',
    thumbnail: '/video/images.jpg',
    video: '/video/video-1.mp4',
    logo: '/logo.svg',
  },
  {
    id: 2,
    name: 'Tamim',
    label: 'Testimonial From',
    thumbnail: '/video/images2.jpg',
    video: '/video/video-2.mp4',
    logo: '/logo.svg',
  },
  {
    id: 3,
    name: 'Mushi',
    label: 'Testimonial From',
    thumbnail: '/video/images3.jpg',
    video: '/video/video-3.mp4',
    logo: '/logo.svg',
  },
  {
    id: 4,
    name: 'Taskin',
    label: 'Testimonial From',
    thumbnail: '/faces/client4.jpg',
    video: '/videos/video4.mp4',
    logo: '/logos/zfluence.svg',
  },
  {
    id: 5,
    name: 'Fizz',
    label: 'Testimonial From',
    thumbnail: '/faces/client5.jpg',
    video: '/videos/video5.mp4',
    logo: '/logos/zfluence.svg',
  },
];

const VideoSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const nextSlide = () => {
    const maxStartIndex = slides.length - 3;
    if (startIndex < maxStartIndex) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
    setPlayingVideo(null);
  };

  const prevSlide = () => {
    const maxStartIndex = slides.length - 3;
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(maxStartIndex);
    }
    setPlayingVideo(null);
  };

  return (
    <div style={styles.wrapper}>
      <button style={styles.navButton} onClick={prevSlide}>&lt;</button>

      {slides.slice(startIndex, startIndex + 3).map((slide) => (
        <div key={slide.id} style={{ ...styles.card, ...(playingVideo === slide.id ? styles.cardVideoOnly : {}) }}>
          {/* Show only video if playing */}
          {playingVideo === slide.id ? (
            <video src={slide.video} controls autoPlay style={styles.fullVideo} />
          ) : (
            <>
              <img src={slide.logo} alt="Logo" style={styles.logo} />

              <div style={styles.thumbnailWrapper} onClick={() => setPlayingVideo(slide.id)}>
                <img src={slide.thumbnail} alt={slide.name} style={styles.thumbnail} />
                <div style={styles.overlay}>
                  <img src="/icons/play.svg" alt="Play" style={styles.playIcon} />
                </div>
              </div>

              <div style={styles.metaContainer}>
                <div style={styles.label}>{slide.label}</div>
                <div style={styles.name}>{slide.name}</div>
              </div>
            </>
          )}
        </div>
      ))}

      <button style={styles.navButton} onClick={nextSlide}>&gt;</button>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    background: '#0c001a',
    padding: '60px 0',
    overflow: 'hidden',
  },
  navButton: {
    backgroundColor: '#7300ec',
    color: '#fff',
    fontSize: '22px',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  card: {
    width: '300px',
    height: '500px',
    background: 'linear-gradient(to bottom, #5b17d6, #320066)',
    borderRadius: '24px',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.4s ease, box-shadow 0.3s ease',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
  },
  cardVideoOnly: {
    padding: 0,
  },
  fullVideo: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
    objectFit: 'cover',
  },
  logo: {
    width: '120px',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
  },
  thumbnailWrapper: {
    position: 'relative',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    overflow: 'hidden',
    // marginBottom: '30px',
    marginTop:' 70px',
    cursor: 'pointer',
    boxShadow: '0 0 12px rgba(0,0,0,0.5)',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    // marginTop:' 40px',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(115, 0, 236, 0.75)',
    borderRadius: '10px',
    width: '55px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    width: '20px',
    height: '20px',
  },
  metaContainer: {
    marginTop: 'auto',
    marginBottom: '10px',
  },
  label: {
    fontSize: '14px',
    opacity: 0.8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '4px',
  },
};
export default VideoSlider;