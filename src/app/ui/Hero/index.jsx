import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks = [],
  bgImageUrl,
  // optional
  videoSrc,
  showVideo = true,
  // NEW: tuning object to easily control spacing/sizes from outside
  tune: tuneProp = {},
}) {
  // ========== TUNING ZONE (defaults) ==========
  const defaultTune = {
    // Spacing around Hero
    heroPaddingTop: 100,      // Title-ke niche ante value baraw (e.g., 100/120)
    heroPaddingBottom: 24,
    heroMarginBottom: 50,    // Fun Fact overlay na howar jonne gap

    // Title controls
    titleMarginTop: 25,       // Title niche ante oitao use korte paro
    titleMarginBottom: 30,
    titleFontMinPx: 58,      // clamp min
    titleFontVW: 7.6,        // clamp middle (vw)
    titleFontMaxPx: 52,      // clamp max

    // Video container controls
    videoMaxWidthPx: 850,    // Desktop max width (px)
    videoWidthPercent: 94,   // Mobile width (%)
    videoTopMarginPx: 4,     // Title-er niche koto gap thakbe

    // Video height (aspect). 56.25% = 16:9, 42.86% = 21:9, 32–40% = ultra-wide/shorter.
    aspectPercent: 50,       // Height barate 40–42, komate 32–36

    // Card radii
    cardRadiusOuter: 18,
    cardRadiusInner: 16,
  };

  // Merge external tune overrides if provided
  const tune = { ...defaultTune, ...tuneProp };

  // ========== YT URL to no-cookie ==========
  const normalizeToNoCookie = (url) => {
    if (!url) return null;
    if (url.includes('/embed/')) return url.replace('www.youtube.com', 'www.youtube-nocookie.com');
    if (url.includes('watch?v=')) {
      const id = (url.split('watch?v=')[1] || '').split('&')[0];
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }
    if (url.includes('youtu.be/')) {
      const id = (url.split('youtu.be/')[1] || '').split('?')[0];
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }
    if (/^[a-zA-Z0-9_-]{6,}$/.test(url)) {
      return `https://www.youtube-nocookie.com/embed/${url}`;
    }
    return url;
  };

  const effectiveVideoSrc =
    normalizeToNoCookie(videoSrc) ||
    'https://www.youtube-nocookie.com/embed/qeonaGA817g';

  // ========== Styles (driven by tune) ==========
  const rootStyle = {
    backgroundImage: `url(${bgImageUrl})`,
    paddingTop: tune.heroPaddingTop,
    paddingBottom: tune.heroPaddingBottom,
    marginBottom: tune.heroMarginBottom,
    position: 'relative',
    zIndex: 1,
  };

  const titleStyle = {
    fontSize: `clamp(${tune.titleFontMinPx}px, ${tune.titleFontVW}vw, ${tune.titleFontMaxPx}px)`,
    lineHeight: 1.12,
    margin: 0,
    marginTop: tune.titleMarginTop,
    marginBottom: tune.titleMarginBottom,
  };

  const videoOuterWrap = {
    width: `min(${tune.videoMaxWidthPx}px, ${tune.videoWidthPercent}%)`,
    margin: `${tune.videoTopMarginPx}px auto 0`,
    padding: 2,
    borderRadius: tune.cardRadiusOuter,
    background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFD5 100%)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)',
    position: 'relative',
  };

  const videoInnerWrap = {
    position: 'relative',
    borderRadius: tune.cardRadiusInner,
    background: 'rgba(15,15,20,0.75)',
    border: '1px solid rgba(255,255,255,0.14)',
    backdropFilter: 'blur(6px)',
    overflow: 'hidden',
    boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
  };

  const glossyTop = {
    position: 'absolute',
    inset: '0 0 auto 0',
    height: '30%',
    background: 'radial-gradient(150% 60% at 50% -20%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 70%)',
    pointerEvents: 'none',
  };

  const accentDot = (top, left, color) => ({
    position: 'absolute',
    top,
    left,
    width: 10,
    height: 10,
    borderRadius: 999,
    background: color,
    opacity: 0.9,
    boxShadow: `0 0 14px ${color}`,
  });

  const cornerGlow = {
    position: 'absolute',
    right: -26,
    bottom: -26,
    width: 130,
    height: 130,
    background: 'radial-gradient(closest-side, rgba(0,255,213,0.22), rgba(0,255,213,0))',
    filter: 'blur(8px)',
    pointerEvents: 'none',
  };

  const ratioBox = {
    position: 'relative',
    width: '100%',
    paddingTop: `${tune.aspectPercent}%`,
  };

  const iframeStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: 0,
    borderRadius: Math.max(tune.cardRadiusInner - 2, 10),
  };

  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={rootStyle}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />

      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title" style={titleStyle}>
            {parse(title)}
          </h1>

          {showVideo && (
            <div style={videoOuterWrap}>
              <div style={videoInnerWrap}>
                <div style={glossyTop} />
                <span style={accentDot(10, 12, '#ff5590')} />
                <span style={accentDot(10, 32, '#ffd166')} />
                <span style={accentDot(10, 52, '#06d6a0')} />
                <div style={cornerGlow} />
                <div style={ratioBox}>
                  <iframe
                    style={iframeStyle}
                    src={`${effectiveVideoSrc}?rel=0&modestbranding=1&playsinline=1`}
                    title="Hero Video"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          )}

          <Div className="cs-hero_info" style={{ marginTop: 12 }}>
            <Div>
              <Button btnLink={btnLink} btnText={btnText} variant="cs-type1" />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">.</a>
    </Div>
  );
}