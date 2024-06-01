import React from 'react';

const Policy = () => {
  const menuItems = [
    'Contact Us',
    'Partner With Us',
    'Pricing',
    'Testimonials',
    'About Us',
    'Careers',
    'FAQs',
    'Case Studies',
    'Blogs',
    'News & Events',
    'Services'
  ];

  return (
    <section className="container mx-auto py-6 relative left-5">
      <div className="flex justify-between items-center">
        <div className="flex-1 w-[504px]">
          <ul className="flex flex-wrap gap-4 font-inter text-[14px] text-TextColor">
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <p className="font-inter text-[12px] text-TextColor">
            All trademarks, logos and names are properties of their respective owners. Unauthorized Copying, Usage, Publishing of our website contents prohibited. Use of this Web site constitutes acceptance of our User Agreement, Cancellation & Refund and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
