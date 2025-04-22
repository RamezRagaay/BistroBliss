import React from 'react'

const Info = () => {
  return (

    <section className="bg-tertiary w-full min-h-dvh py-10">
        <div className="container flex items-center gap-20">
            <div className="flex flex-col  items-start gap-16 flex-1">
                <div className="flex flex-col items-center">
                    <h3 className="font-playfair font-medium text-text text-[36px] lg:text-[55px]">A little information for our valuable guest</h3>
                    <p className="text-text text-[16px] font-sans">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white border-2 border-gray-200 rounded-[10px] px-10 py-3 flex items-center justify-center flex-col">
                        <h4 className="font-playfair font-medium text-[55px] text-text">3</h4>
                        <p className="font-sans text-[18px] font-medium">Locations</p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-[10px] px-10 py-3 flex items-center justify-center flex-col">
                        <h4 className="font-playfair font-medium text-[55px] text-text">1995</h4>
                        <p className="font-sans text-[18px] font-medium">Founded</p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-[10px] px-10 py-3 flex items-center justify-center flex-col">
                        <h4 className="font-playfair font-medium text-[55px] text-text">65+</h4>
                        <p className="font-sans text-[18px] font-medium">Staff Members</p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-[10px] px-10 py-3 flex items-center justify-center flex-col">
                        <h4 className="font-playfair font-medium text-[55px] text-text">100%</h4>
                        <p className="font-sans text-[18px] font-medium">Satisfied Customers</p>
                    </div>

                </div>
            </div>
            <div className="bg-[url('/infoimg.png')] h-[680px] w-[555px] bg-cover"></div>
        </div>
        
        
    </section>  
)
}

export default Info