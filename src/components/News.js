import React from 'react'
import Image from 'next/image'

export default function News() {
    return (
        <div className='p-20 space-y-3' id='digital-marketing'>

            {/* HEADING SECTION  */}
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-start gap-3 p-8'>
                    <h1 className='text-[#442AC6] font-Comfortaa font-extrabold text-[30px]'>Digital Marketing</h1>
                    <p className='text-[#494949] text-[14px] font-poppins'>
                        From SEO and content marketing to social media management and PPC campaigns,
                        our data-driven approach ensures that every campaign is optimized for maximum impact,
                        helping you reach and engage your target audience effectively.
                    </p>
                    <button className='text-[#FFFFFF] font-semibold bg-gradient-to-r from-[#9854FF] to-[#442AC6] rounded-sm px-9 h-10 outline-none text-[17px]'>
                        Let’s Connect
                    </button>
                </div>
                <div className='flex flex-col md:flex-row px-8'>
                    <Image src='/p.png' alt='Digital Marketing Illustration' width={400} height={300} className='hero-img' />
                </div>
            </div>

            {/* SERVICES DETAILS  */}
            <div className='rounded-3xl px-20 py-20'>
                <div className='flex flex-col md:flex-row items-center justify-between relative gap-20'>

                    <div className='space-y-4'>
                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Search Engine Optimization (SEO):</h1>
                            <p className='text-[#494949] text-[16px]'>
                                We help your website rank higher on search engines, making it easier for potential customers to find you online.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Pay-Per-Click Advertising (PPC):</h1>
                            <p className='text-[#494949] text-[16px]'>
                                Our PPC campaigns drive instant traffic to your website by placing targeted ads on Google, Facebook, and other platforms.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Social Media Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>
                                We create and manage engaging social media campaigns to build your brand and connect with your audience.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Content Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>
                                Our team crafts compelling blogs, videos, and graphics to attract and retain customers while boosting your online presence.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Email Marketing (EMM):</h1>
                            <p className='text-[#494949] text-[16px]'>
                                We design personalized email campaigns to nurture leads, promote your services, and drive customer loyalty.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Influencer Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>
                                We collaborate with trusted influencers to promote your brand and reach a larger, more engaged audience.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Affiliate Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>
                                Our affiliate programs allow you to partner with marketers who promote your business and bring in new customers.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Web Analytics and Reporting:</h1>
                            <p className='text-[#494949] text-[16px]'>
                                We track and analyze your website’s performance to optimize strategies and ensure your goals are met effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WHY CHOOSE US SECTION */}
            <div>
                <div className='flex items-center gap-6'>
                    <Image src='/o.png' alt='Why Choose TechXicon' width={100} height={100} />
                    <div>
                        <h1 className='font-poppins text-lg font-semibold text-[#000000]'>Why Choose TechXicon for Digital Marketing?</h1>

                        <h1><span>1.</span> Personalized Plans:</h1>
                        <p>We understand every business is unique, so we create custom digital marketing plans designed specifically for your goals and audience.</p>

                        <h1><span>2.</span> Expert Team:</h1>
                        <p>Our team of experts stays updated with the latest marketing trends and tools to deliver the best results.</p>

                        <h1><span>3.</span> Transparent Reporting:</h1>
                        <p>We provide clear and detailed reports so you can track the progress and effectiveness of your campaigns.</p>
                    </div>
                </div>
            </div>

            {/* OUR WORKING PROCESS */}
            <div>
                <h1 className='text-2xl font-bold mb-8'>Our Working Process</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                    {/* Card 1 */}
                    <div className='p-6 border rounded-lg shadow-sm'>
                        <h1 className='font-semibold mb-2'>Understanding Your Business & Goals</h1>
                        <p>
                            We begin by understanding your business, target audience, and marketing goals. This helps us create a personalized digital marketing strategy that aligns with your objectives.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='p-6 border rounded-lg shadow-sm'>
                        <h1 className='font-semibold mb-2'>Strategic Planning & Research</h1>
                        <p>
                            We analyze your competitors and market to plan effective strategies that give you a competitive edge.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className='p-6 border rounded-lg shadow-sm'>
                        <h1 className='font-semibold mb-2'>Campaign Execution</h1>
                        <p>
                            Our team implements your digital marketing campaigns with precision and creativity to maximize impact.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className='p-6 border rounded-lg shadow-sm'>
                        <h1 className='font-semibold mb-2'>Monitoring & Optimization</h1>
                        <p>
                            We continuously monitor your campaigns and optimize them based on data-driven insights for the best results.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
