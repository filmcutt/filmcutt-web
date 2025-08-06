'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Button from '../Button';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import DropDown from './DropDown';

export default function Header({ variant }) {
	const [isSticky, setIsSticky] = useState(false);
	const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
	const [mobileToggle, setMobileToggle] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		});
	}, []);

	return (
		<>
			<header
				className={`cs-site_header cs-style1 text-uppercase ${
					variant ? variant : ''
				} cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
			>
				<Div className="cs-main_header">
					<Div className="container">
						<Div className="cs-main_header_in">
							<Div className="cs-main_header_left">
								<Link className="cs-site_branding" href="/">
									<img
										src={'/logo.svg'}
										alt="Logo"
										className="!max-h-[36px] "
									/>
									{/* <Link href={'/'} style={{
                    fontWeight:"bolder",
                    textTransform:"capitalize"
                  }}>Filmcutt</Link> */}
								</Link>
							</Div>
							<Div className="cs-main_header_center">
								<Div className="cs-nav cs-primary_font cs-medium">
									<ul
										className="cs-nav_list"
										style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
									>
										<li className="">
											<Link href="/" onClick={() => setMobileToggle(false)}>
												Home
											</Link>
											{/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/"
                              onClick={() => setMobileToggle(false)}
                            >
                              Main Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Photography Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/freelancer-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Freelancer Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/architecture-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Architecture Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/creative-solution"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Solution
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/personal-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Personal Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Showcase
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/video-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Video Showcase
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}
										</li>
										{/* <li>
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </Link>
                    </li> */}
										<li className="menu-item-has-children">
											<Link
												href="/service"
												onClick={() => setMobileToggle(false)}
											>
												Pricing
											</Link>
											<DropDown>
												<ul>
													<li>
														<Link
															href="/service"
															onClick={() => setMobileToggle(false)}
														>
															Services
														</Link>
													</li>
												</ul>
											</DropDown>
										</li>
										<li className="">
											<Link
												href="/portfolio"
												onClick={() => setMobileToggle(false)}
											>
												Portfolio
											</Link>
											{/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}
										</li>
										<li className="">
											<Link href="/blog" onClick={() => setMobileToggle(false)}>
												Blog
											</Link>
											{/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}
										</li>
										<li className="menu-item-has-children">
											<Link href="/" onClick={() => setMobileToggle(false)}>
												Pages
											</Link>
											<DropDown>
												<ul>
													<li>
														<Link
															href="/contact"
															onClick={() => setMobileToggle(false)}
														>
															Contact
														</Link>
													</li>
													<li>
														<Link
															href="/team"
															onClick={() => setMobileToggle(false)}
														>
															Team
														</Link>
													</li>
													<li>
														<Link
															href="/team/team-details"
															onClick={() => setMobileToggle(false)}
														>
															Team Details
														</Link>
													</li>
													{/* <li>
														<Link
															href="/case-study/case-study-details"
															onClick={() => setMobileToggle(false)}
														>
															Case Study Details
														</Link>
													</li> */}
													<li>
														<Link
															href="/faq"
															onClick={() => setMobileToggle(false)}
														>
															FAQ
														</Link>
													</li>
												</ul>
											</DropDown>
										</li>
									</ul>
									<div className="absolute right-12 top-5 md:hidden">
										<Button
											variant="filled"
											btnText=""
											btnLink="/"
											className="h-10 rounded-sm text-sm"
											icon={
												<Icon
													icon="grommet-icons:schedule"
													className="md:!ml-3.5"
												/>
											}
										/>
									</div>

									<span
										className={
											mobileToggle
												? 'cs-munu_toggle cs-toggle_active'
												: 'cs-munu_toggle'
										}
										onClick={() => setMobileToggle(!mobileToggle)}
									>
										<span></span>
									</span>
								</Div>
							</Div>

							<Div className="cs-main_header_right">
								<Div className="cs-toolbox  items-center gap-3 hidden lg:flex">
									<Button
										target="_blank"
										variant="filled"
										btnText="calendly"
										btnLink="https://calendly.com/filmcutt4-ofy0"
										className="h-10 rounded-sm text-sm"
										icon={<Icon icon="grommet-icons:schedule" />}
									/>

									<span
										className="cs-icon_btn"
										onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
									>
										<span className="cs-icon_btn_in">
											<span />
											<span />
											<span />
											<span />
										</span>
									</span>
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
			</header>

			<Div
				className={
					sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
				}
			>
				<button
					className="cs-close"
					onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
				/>
				<Div
					className="cs-side_header_overlay"
					onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
				/>
				<Div className="cs-side_header_in">
					<Div className="cs-side_header_shape" />
					<Link className="cs-site_branding" href="/">
						<img src="/logo.svg" alt="Logo" className="!max-h-9" />
					</Link>
					<Div className="cs-side_header_box">
						<h2 className="cs-side_header_heading">
							Do you have a project in your <br /> mind? Keep connect us.
						</h2>
					</Div>
					<Div className="cs-side_header_box">
						<ContactInfoWidget title="Contact Us" withIcon />
					</Div>
					<Div className="cs-side_header_box">
						<Newsletter
							title="Subscribe"
							subtitle="Send you email. We will deliver your updates and tips!"
							placeholder="example@gmail.com"
						/>
					</Div>
					<Div className="cs-side_header_box">
						<SocialWidget />
					</Div>
				</Div>
			</Div>
		</>
	);
}
