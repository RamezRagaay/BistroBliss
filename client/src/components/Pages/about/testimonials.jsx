import React from 'react'

const Testimonials = () => {
  return (
    <section className="bg-dvh mb-32 flex items-center justify-center flex-col container">
        <h3 className="text-[36px] lg:text-[55px] font-playfair font-medium text-text mt-20 mb-10">What Our Customers Say</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-tertiary p-10 flex-col items-center justify-center rounded-2xl">
                <h5 className="text-secondary font-bold font-sans text-[24px]">"The Best Resturant"</h5>
                <p className="font-sans text-[16px] mt-3 text-text">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                <div className="w-full h-px my-5 bg-primary/10"></div>
                <div className="flex flex-col items-start justify-center">
                    <h6 className="font-bold">Sophia elbor3y</h6>
                    <p>Los Anglos, CA</p>
                </div>
            </div>
            <div className="bg-tertiary p-10 flex-col items-center justify-center rounded-2xl">
                <h5 className="text-secondary font-bold font-sans text-[24px]">“Simply delicious”</h5>
                <p className="font-sans text-[16px] mt-3 text-text">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                <div className="w-full h-px my-5 bg-primary/10"></div>
                <div className="flex flex-col items-start justify-center">
                    <h6 className="font-bold">Sophia elbor3y</h6>
                    <p>Los Anglos, CA</p>
                </div>
            </div>
            <div className="bg-tertiary p-10 flex-col items-center justify-center rounded-2xl">
                <h5 className="text-secondary font-bold font-sans text-[24px]">“One of a kind restaurant”</h5>
                <p className="font-sans text-[16px] mt-3 text-text">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                <div className="w-full h-px my-5 bg-primary/10"></div>
                <div className="flex flex-col items-start justify-center">
                    <h6 className="font-bold">Sophia elbor3y</h6>
                    <p>Los Anglos, CA</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials