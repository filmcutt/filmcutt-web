'use client';
import { Fragment } from 'react';
import portfolioData from '../data/portfolioData.json';
import services from '../data/services.json';
import socialLinks from '../data/socialLinks.json';
import Card from './ui/Card';
import Cta from './ui/Cta';
import Div from './ui/Div';
import FunFact from './ui/FunFact';
import Hero from './ui/Hero';
import Portfolio from './ui/Portfolio';
import SectionHeading from './ui/SectionHeading';
import PostSlider from './ui/Slider/PostSlider';
import TeamSlider from './ui/Slider/TeamSlider';
import Spacing from './ui/Spacing';
import VideoSlider from './VideoSlider';

// Hero Social Links
const heroSocialLinks = socialLinks?.map(link => ({
  link: link.url,
  name: link.platform,
  icon: link.icon,
}));

// FunFact Data
const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '50',
  },
  {
    title: 'Project Completed',
    factNumber: '500',
  },
  {
    title: 'Team Members',
    factNumber: '10',
  },
];

export default function Home() {
  // Inline styles for the stylish video frame
  const videoOuterWrap = {
    width: 'min(980px, 100%)',
    margin: '18px auto 0',
    padding: 2,
    borderRadius: 22,
    background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFD5 100%)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)',
    position: 'relative',
  };

  const videoInnerWrap = {
    position: 'relative',
    borderRadius: 20,
    background: 'rgba(15,15,20,0.75)',
    border: '1px solid rgba(255,255,255,0.14)',
    backdropFilter: 'blur(6px)',
    overflow: 'hidden',
    boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
  };

  const glossyTop = {
    position: 'absolute',
    inset: '0 0 auto 0',
    height: '40%',
    background: 'radial-gradient(150% 60% at 50% -20%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 70%)',
    pointerEvents: 'none',
  };

  const accentDot = (top, left, color) => ({
    position: 'absolute',
    top,
    left,
    width: 12,
    height: 12,
    borderRadius: 999,
    background: color,
    filter: 'blur(0.2px)',
    opacity: 0.9,
    boxShadow: `0 0 18px ${color}`,
  });

  const ratioBox = {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%', // 16:9
  };

  const iframeStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: 0,
    borderRadius: 16,
  };

  return (
    <>
      {/* Start Hero Section */}
      <Hero
  title="We Make <br/>Things Look Good."
  subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
  btnText="Visit Portfolio"
  btnLink="/portfolio"
  scrollDownId="#service"
  socialLinksHeading="Follow Us"
  heroSocialLinks={heroSocialLinks}
  bgImageUrl="/images/hero_bg.jpeg"
  videoSrc="https://youtu.be/tffyFRr_Z6U"
>
        {/* Stylish inline-css video frame RIGHT UNDER the title */}
        <div style={videoOuterWrap}>
          <div style={videoInnerWrap}>
            <div style={glossyTop} />
            {/* Accent dots */}
            <span style={accentDot(10, 12, '#ff5590')} />
            <span style={accentDot(10, 32, '#ffd166')} />
            <span style={accentDot(10, 52, '#06d6a0')} />
            {/* Subtle corner glow */}
            <div
              style={{
                position: 'absolute',
                right: -30,
                bottom: -30,
                width: 160,
                height: 160,
                background: 'radial-gradient(closest-side, rgba(0,255,213,0.22), rgba(0,255,213,0))',
                filter: 'blur(8px)',
                pointerEvents: 'none',
              }}
            />
            {/* Video (16:9 responsive) */}
            <div style={ratioBox}>
              <iframe
                style={iframeStyle}
                src="https://www.youtube.com/embed/qeonaGA817g"
                title="Hero Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Hero>
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="We Completed 100+ Project Yearly Successfully & Still Counting"
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                {services?.map(service => (
                  <Fragment key={service.id}>
                    <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                    <Div className="col-lg-3 col-sm-6">
                      <Card
                        title={service.name}
                        link={`/service/${service.name
                          .split(' ')
                          .join('-')
                          .toLowerCase()}`}
                        src="/images/service_1.jpeg"
                        alt="Service"
                      />
                      <Spacing lg="0" md="30" />
                    </Div>
                    <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  </Fragment>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
     <Div className="container">
  <SectionHeading
    title="Portfolio to explore"
    subtitle="Latest Projects"
    variant="cs-style1 text-center"
  />
  <Spacing lg="90" md="45" />

  {/* ✅ FIXED SINGLE PORTFOLIO CARD */}
  <Div className="flex justify-center">
    <Div className="w-full max-w-5xl">
      <Portfolio
        title={portfolioData[0].title}
        subtitle={portfolioData[0].subtitle}
        href={portfolioData[0].href}
        src={portfolioData[0].src}
      />
    </Div>
  </Div>
</Div>

      {/* End Portfolio Section */}

      {/* Start Video Block Section */}
     <Spacing lg="130" md="70" />
<Div className="container">

  {/* ✅ Original Heading */}
  <h2 className="cs-font_20 cs-m0 text-center cs-line_height_5">
    We craft viral content that captivates audiences. Our process includes
    deep brand understanding, compelling storytelling, strategic platform
    selection, and expert video production. We optimize for shares,
    engagement, and growth. Let's create something extraordinary together
  </h2>

  {/* 🔻 Divider Line */}
  <div style={{
    width: '600px',
    height: '2px',
    background: 'linear-gradient(to right, #fff, #7300ec)',
    margin: '30px auto 40px auto',
	marginBottom: '100px',
    borderRadius: '2px',
  }}></div>

  {/* ✨ Testimonial Heading Section */}
  <div style={{
    textAlign: 'center',
    marginBottom: '60px',
    color: '#fff'
  }}>
    {/* Subheading label */}
    <div style={{
      fontSize: '14px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: '600',
      color: '#b3b3b3',
      marginBottom: '12px',
    }}>
      Client Testimonials
    </div>

    {/* Main Line 1 */}
    <div style={{
      fontSize: '38px',
      fontWeight: '600',
      lineHeight: '1.3',
      color: '#ccc'
    }}>
      Hear What They’re
    </div>

    {/* Main Line 2 with gradient */}
    <div style={{
      fontSize: '42px',
      fontWeight: '700',
      lineHeight: '1.2',
      background: 'linear-gradient(90deg, #ffffff, #b388ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginTop: '10px',
    }}>
      Saying About Us
    </div>
  </div>

  {/* 🎥 Video Slider */}
  {/* 🖼️ Testimonial Images */}
<div className="row justify-content-center">
  <div className="col-lg-4 col-md-6 mb-4">
    <img
      src="/images/testimonial_1.jpg"
      alt="Client Review 1"
      style={{
        width: '100%',
        borderRadius: '18px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
        objectFit: 'cover',
      }}
    />
  </div>

  <div className="col-lg-4 col-md-6 mb-4">
    <img
      src="/images/testimonial_2.jpg"
      alt="Client Review 2"
      style={{
        width: '100%',
        borderRadius: '18px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
        objectFit: 'cover',
      }}
    />
  </div>

  <div className="col-lg-4 col-md-6 mb-4">
    <img
      src="/images/testimonial_3.jpg"
      alt="Client Review 3"
      style={{
        width: '100%',
        borderRadius: '18px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
        objectFit: 'cover',
      }}
    />
  </div>
</div>


  <Spacing lg="70" md="70" />
</Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      <Spacing lg="150" md="80" />

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}