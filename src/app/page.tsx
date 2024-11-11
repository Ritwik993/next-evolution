import Image from "next/image";

const folder=()=>{
    return(
        <div className="parentContainer relative bg-[#070E18] bg-[url('/a1.png')] w-[100vw]  flex flex-col items-center justify-center z-[-400] overflow-x-hidden">
            <div className="w-full flex-none relative ">
                <div className=" absolute  top-0 z-40 w-[100vw] flex flex-col items-center justify-center">
                     <Image src="/1.svg" alt="" width={980} height={720} className=""/>

                </div>
             <Image src="/logo.svg" alt="" width={32} height={32} className="pt-[20px] lg:ml-[50px] w-[64px] h-[64px] md:ml-[30px] ml-[20px]  "/>
             <div className="flex flex-col justify-center items-center w-[100vw] z-50 mt-[100px]">
                <div className="bg-gradient-to-r from-[#19212C] to-[#26384C] rounded-[30px] p-[1px] ">
                    <div className="bg-[#060D15] px-[12px] py-[5px] rounded-[30px] z-50">
                        <p className="text-transparent text-[14px] bg-clip-text bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] z-50">Build for video creators</p>
                     </div>
                </div>
                <button className="bg-gradient-to-r from-[#FF6A33] to-[#FF4C0A] py-[12px] px-[24px] rounded-[8px] text-white my-[40px] cursor-pointer z-50 w-11/12 md:w-auto">Pre-order now</button>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] font-medium md:text-[72px] text-[35px] text-center md:w-[700px] w-[350px] lg:w-[900px] z-50">The next-evolution in data storage is here</p>
                <p className="text-[16px] text-[#B6B6B8] font-light mt-[40px] z-50 text-center pb-[100px]">Stay ahead of the curb in data privacy and storage by pre-ordering AirVault today!</p>
            </div>
            </div>




            <div className="bottomContainer bg-[#070E18] bg-[url('/a1.png')]  flex flex-col items-center justify-center w-[100vw] h-full flex-1 relative  z-[-100]  ">
                <div className="bg-[#FF7733] absolute  bg-opacity-40 w-[600px] h-[600px]  rounded-full lg:mb-[300px] md:mb-[600px]  mb-[500px] blur-3xl backdrop-blur-3xl opacity-100 z-[-200]"></div>
                {/* <Image src="/blur2.svg" width={1280} height={550} className="absolute w-full lg:block hidden bottom-0 right-0  left-0  z-20 " alt=""/> */}
                <Image src="/blur2.svg" width={1280} height={550} className="absolute w-[100vw] lg:block hidden h-full right-0  left-0  object-cover" alt=""/>
                <Image src="/i2.png" width={1662} height={978} className="absolute  top:0 lg:hidden block   w-[100vw]  h-full z-20  right-0 left-0 object-cover" alt=""/>
                <div className="relative w-[100vw]">
               
              <p className="text-transparent font-medium md:text-[48px] text-[35px] bg-clip-text  bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] md:text-center text-left pl-[100px] mb-[20px] z-50  mt-[200px] ">Who is AirVault for?</p>
             <div className=" cards flex justify-around pl-[100px] md:flex-col lg:flex-row gap-y-6 lg:gap-x-[100px] lg:gap-y-0 md:justify-center flex-col md:items-center z-50 mb-[100px]">
            <div className="w-[240px]">
              <Image src="/m1.svg" alt="" width={48} height={48} />
              <p className="text-[#F0F0F0] text-[24px]">Indviduals</p>
              <p className="text-[16px] text-[#B6B6B8]">Private storage separate from the internet</p>
            </div>

            <div className="w-[240px]">
              <Image src="/m2.svg" alt="" width={48} height={48} />
              <p className="text-[#F0F0F0] text-[24px]">Creative teams</p>
              <p className="text-[16px] text-[#B6B6B8]">High speed data sharing for collaborative work</p>
            </div>

            <div className="w-[240px]">
              <Image src="/m3.svg" alt="" width={48} height={48} />
              <p className="text-[#F0F0F0] text-[24px]">Businesses</p>
              <p className="text-[16px] text-[#B6B6B8]">Centralised storage for better organisation</p>
            </div>
           
            </div>
            <div className="w-full flex items-center justify-center z-[100000]">
             <button className="bg-gradient-to-r from-[#FF6A33] to-[#FF4C0A] py-[12px] px-[24px] rounded-[8px] text-white my-[40px] w-11/12 md:w-auto z-[100000] cursor-pointer">Pre-order now</button>
            </div> 
                </div>
                </div>

            </div>

    )
}
export default folder;