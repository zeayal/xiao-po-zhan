import Image from "next/image";
import banner from "../../public/images/banner.jpg";
export default function HeroBanner() {
  const title = '';
  return (
    <div className=" w-full pt-4">
      <div className="relative w-full h-screen rounded-2xl  overflow-hidden ">
        <div className="relative  w-full h-screen">
          <Image alt="banner" className="object-cover" src={banner} fill />
        </div>
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-[#00000040] text-white p-8 pb-40 flex flex-col justify-end">
          <h1 className="font-bold text-4xl mb-20 max-w-md " >
            <span className="type" style={{ '--n': 26, '--fontSize': '36px', '--delay': 0 }}>一颗说走就走的心，一个会拍照的情侣，一段甜蜜的旅程。</span>
          </h1>
          <p className="max-w-md">
            <span className="type" style={{ '--n': 59, '--fontSize': '16px', '--delay': `${0.3 * 26}s` }}>
              只想进行一场漫无目的的旅行，在一个有花有海、安静缓慢的地方晒着太阳无所事事。
              我在时间的轨迹上徘徊，踏上每一列经过的车
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
