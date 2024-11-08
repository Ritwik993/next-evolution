import Image from "next/image";

const Home=()=>{
  return(
    <div className="relative  w-full z-40 h-[100vh]">
      <Image src="/1.svg" alt="" width={980} height={720} className="absolute left-[300px]  z-30 "/>
      <Image src="/logo.svg" alt="" width={32} height={32} className="pt-[20px] pl-[50px]"/>
      <Image src="/a1.png" alt="" width={1280} height={710} className="absolute top-0 left-0 h-[800px] right-0 w-full z-20 bg-contain"/>
      <div className="flex flex-col justify-center items-center z-50">
        <div className="bg-gradient-to-r from-[#19212C] to-[#26384C] rounded-[30px] p-[1px]">
          <div className="bg-[#060D15] px-[12px] py-[5px] rounded-[30px]">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B]">Build for video creators</p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-[#FF6A33] to-[#FF4C0A] py-[12px] px-[24px] rounded-[8px] text-white my-[40px] cursor-pointer z-50">Pre-order now</button>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] font-medium text-[72px] text-center">The next-evolution in data<br/> storage is here</p>
        <p className="text-[16px] text-[#B6B6B8] font-light mt-[40px]">Stay ahead of the curb in data privacy and storage by pre-ordering AirVault today!</p>
        <div className="bg-[#FF7733] absolute top-[400px] bg-opacity-30 w-[700px] h-[600px] rounded-full mt-[60px] blur-3xl backdrop-blur-3xl opacity-100 z-10"></div>




        {/* <div className="w-full absolute h-full bottom-0">
          <div className="img   w-[100vw]  bg-[#070E18]">
          <p className="text-transparent font-medium text-[48px] bg-clip-text mt-[300px] pt-[100px] bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] text-center ">Who is AirVault for?</p>
          <div className="cards flex justify-around pl-[100px] items-center">
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
              <p className="text-[#F0F0F0] text-[24px]">Buisness</p>
              <p className="text-[16px] text-[#B6B6B8]">Centralised storage for better organisation</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
          <button className="bg-gradient-to-r from-[#FF6A33] to-[#FF4C0A] py-[12px] px-[24px] rounded-[8px] text-white my-[40px]">Pre-order now</button>
          </div> 
          </div>
        </div> */}



      </div>
      <Image src="/blur2.svg" width={1280} height={550} className="absolute bottom-0 top-[600px] w-full z-20" alt=""/>


      <div className="w-full absolute h-full bottom-0 top-[300px] z-50">
      <p className="text-transparent font-medium text-[48px] bg-clip-text mt-[300px] pt-[100px] bg-gradient-to-r from-[#94959C] via-[#FFFFFF] to-[#93949B] text-center ">Who is AirVault for?</p>
      <div className="cards flex justify-around pl-[100px] items-center">
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
              <p className="text-[#F0F0F0] text-[24px]">Buisness</p>
              <p className="text-[16px] text-[#B6B6B8]">Centralised storage for better organisation</p>
            </div>
      </div>
      <div className="w-full flex items-center justify-center">
          <button className="bg-gradient-to-r from-[#FF6A33] to-[#FF4C0A] py-[12px] px-[24px] rounded-[8px] text-white my-[40px]">Pre-order now</button>
          </div> 
      </div>
    </div>
  )
}

export default Home;