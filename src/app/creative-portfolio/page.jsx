'use client';

import dynamic from 'next/dynamic';
import Div from '../../app/ui/Div';
import Spacing from '../../app/ui/Spacing';

// Dynamically import all components that might break SSR
const Hero3 = dynamic(() => import('../../app/ui/Hero/Hero3'), { ssr: false });
const Portfolio2 = dynamic(() => import('../../app/ui/Portfolio/Portfolio2'), { ssr: false });
const Portfolio3 = dynamic(() => import('../../app/ui/Portfolio/Portfolio3'), { ssr: false });
const CaseStudy = dynamic(() => import('../../app/ui/CaseStudy'), { ssr: false });
const TestimonialSlider = dynamic(() => import('../../app/ui/Slider/TestimonialSlider'), { ssr: false });
const MovingText = dynamic(() => import('../../app/ui/MovingText'), { ssr: false });
const LogoList = dynamic(() => import('../../app/ui/LogoList'), { ssr: false });
const Cta = dynamic(() => import('../../app/ui/Cta'), { ssr: false });

const heroSocialLinks = [
  { name: 'Behance', links: '/' },
  { name: 'Twitter', links: '/' },
];

const portfolioData = [
  { title: 'Winery eCommerce website design & development', subtitle: 'Project 01', btnText: 'See Details', btnLink: '/portfolio/portfolio-details', imageUrl: '/images/portfolio_35.jpeg', category: 'Web Development' },
  { title: 'Euro corporate agency for healthy environment', subtitle: 'Project 02', btnText: 'See Details', btnLink: '/portfolio/portfolio-details', imageUrl: '/images/portfolio_36.jpeg', category: 'Branding' },
  { title: 'Powerful admin dashboard design', subtitle: 'Project 03', btnText: 'See Details', btnLink: '/portfolio/portfolio-details', imageUrl: '/images/portfolio_37.jpeg', category: 'UI Design' },
  { title: 'Crypto financial trading apps for hedge fund', subtitle: 'Project 04', btnText: 'See Details', btnLink: '/portfolio/portfolio-details', imageUrl: '/images/portfolio_38.jpeg', category: 'Apps Design' },
];

export default function CreativePortfolioHome() {
  return (
    <>
      {/* Hero Section */}
      <Hero3
        title="Arino Creative <br />Portfolio"
        btnLink="contact"
        btnText={`Let's talk`}
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg_4.jpeg"
      />

      {/* Portfolio Section */}
      <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) => (
        <Div key={index}>
          {index % 2 === 0 ? (
            <Portfolio2 {...item} />
          ) : (
            <Portfolio3 {...item} />
          )}
          <Spacing lg="100" md="70" />
        </Div>
      ))}

      {/* Case Study Section */}
      <Spacing lg="45" md="10" />
      <Div className="container">
        <CaseStudy title="Analysis lead <br /> more efficiently" bgUrl="/images/case_study_2.jpeg" href="/case-study/case-study-details" variant="cs-style2" />
        <CaseStudy title="Ubar food app <br /> case study" bgUrl="/images/case_study_1.jpeg" href="/case-study/case-study-details" />
      </Div>
      <Spacing lg="150" md="80" />

      {/* Testimonial Section */}
      <TestimonialSlider />

      {/* MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />

      {/* LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />

      {/* CTA Section */}
      <Div className="container">
        <Cta title="Let’s disscuse make <br />something <i>cool</i> together" btnText="Apply For Meeting" btnLink="/contact" bgSrc="/images/cta_bg_3.jpeg" />
      </Div>
    </>
  );
}
