'use client';
import Cta from '../../app/ui/Cta';
import Div from '../../app/ui/Div';
import PageHeading from '../../app/ui/PageHeading';
import Portfolio from '../../app/ui/Portfolio';
import SectionHeading from '../../app/ui/SectionHeading';
import Spacing from '../../app/ui/Spacing';

export default function PortfolioPage() {
  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />

      <Spacing lg="145" md="80" />

      <Div className="container">
        <SectionHeading
          title="Our Recent Work"
          subtitle="Portfolio"
        />

        <Spacing lg="90" md="45" />

        {/* 🔥 ONE SINGLE PORTFOLIO SECTION */}
        <Portfolio />
      </Div>

      <Spacing lg="145" md="80" />

      <Cta
        title="filmcutt4@gmail.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
