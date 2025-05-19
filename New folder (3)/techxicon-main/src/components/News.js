import React from 'react'
export default function News() {
    return (
        <div className='  p-20 space-y-3' id='digital-marketing'>
            

                {/* HEADING SECTION  */}
                <div className='flex  items-center justify-between'>
                    <div className='flex flex-col items-start gap-3 p-8'>
                        <h1 className='text-[#442AC6] font-Comfortaa font-extrabold text-[30px] '>Digital Marketing</h1>
                        <p className='text-[#494949] text-[14px] font-poppins'>From SEO and content marketing to social media management and PPC campaigns,our data-driven approach ensures that every campaign is optimized for maximum impact, helping you reach and engage your target audience effectively.</p>
                        <button className='text-[#FFFFFF] font-semibold bg-gradient-to-r from-[#9854FF] to-[#442AC6] rounded-sm px-9 h-4 outline-none text-[17px]'>Let’s Connect</button>
                    </div>
                    <div className='flex flex-col md:flex-row px-8'>
                        <img src='p.png' className=' hero-img ' />
                    </div>
                </div>

            {/* SERVICES DETAILS  */}

            <div className='rounded-3xl px-20 py-20  -black'>
                <div className='flex flex-col md:flex-row items-center justify-between relative gap-20'>

                    <div className='space-y-4  -b-amber-900'>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Search Engine Optimization (SEO):</h1>
                            <p className='text-[#494949] text-[16px]'>We help your website rank higher on search engines, making it easier for potential customers to find you online.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Pay-Per-Click Advertising (PPC):</h1>
                            <p className='text-[#494949] text-[16px]'>Our PPC campaigns drive instant traffic to your website by placing targeted ads on Google, Facebook, and other platforms.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Social Media Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>We create and manage engaging social media campaigns to build your brand and connect with your audience.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Content Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>Our team crafts compelling blogs, videos, and graphics to attract and retain customers while boosting your online presence.
                            </p>
                        </div>


                    </div>

                    <div className=' -amber-700 flex flex-col space-y-4'>

                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Email Marketing (EMM):</h1>
                            <p className='text-[#494949] text-[16px]'>We design personalized email campaigns to nurture leads, promote your services, and drive customer loyalty.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Influencer Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>We collaborate with trusted influencers to promote your brand and reach a larger, more engaged audience.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Affiliate Marketing:</h1>
                            <p className='text-[#494949] text-[16px]'>Our affiliate programs allow you to partner with marketers who promote your business and bring in new customers.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-black text-lg font-bold font-Comfortaa'>Web Analytics and Reporting:</h1>
                            <p className='text-[#494949] text-[16px]'>We track and analyze your website’s performance to optimize strategies and ensure your goals are met effectively.
                            </p>
                        </div>

                    </div>


                </div>
            </div>

            <div className=' -red-600'>
                <div className=' -green-600 flex items-center'>
                    <img src='/o.png' className=' ' />
                    <div className=' -blue-600'>
                        <h1 className='font-poppins text-lg font-semibold text-[#000000]'>Why Choose TechXicon for Digital Marketing?</h1>

                        <h1><span>1.</span>Personalized Plans:</h1>
                        <p>We understand every business is unique, so we create custom digital marketing plans designed specifically for your goals and audience.</p>


                        <h1><span>1.</span>Personalized Plans:</h1>
                        <p>We understand every business is unique, so we create custom digital marketing plans designed specifically for your goals and audience.</p>


                        <h1><span>1.</span>Personalized Plans:</h1>
                        <p>We understand every business is unique, so we create custom digital marketing plans designed specifically for your goals and audience.</p>

                    </div>
                </div>
            </div>


            {/* OUR WORK PROCCESS */}

            <div>
                <h1>Our Working Process</h1>

                <div>
                    {/* Card */}
                    <div>
                        <div>
                            <h1>Understanding Your
                                Business & Goals</h1>
                        </div>
                        <p>
                            We begin by understanding your business, target audience, and marketing goals. This helps us create a personalized digital marketing strategy that aligns with your objectives.
                        </p>
                    </div>
                    {/* CARD  */}
                    <div>
                        <div>
                            <h1>Understanding Your
                                Business & Goals</h1>
                        </div>
                        <p>
                            We begin by understanding your business, target audience, and marketing goals. This helps us create a personalized digital marketing strategy that aligns with your objectives.
                        </p>
                    </div>
                    {/* CARD  */}
                    <div>
                        <div>
                            <h1>Understanding Your
                                Business & Goals</h1>
                        </div>
                        <p>
                            We begin by understanding your business, target audience, and marketing goals. This helps us create a personalized digital marketing strategy that aligns with your objectives.
                        </p>
                    </div>
                    {/* CARD  */}
                    <div>
                        <div>
                            <h1>Understanding Your
                                Business & Goals</h1>
                        </div>
                        <p>
                            We begin by understanding your business, target audience, and marketing goals. This helps us create a personalized digital marketing strategy that aligns with your objectives.
                        </p>
                    </div>




                </div>
            </div>

        </div>
    )
}
