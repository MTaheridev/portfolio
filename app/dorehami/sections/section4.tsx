import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import React from 'react'

const Section4 = () => {
    const router = useRouter();
  return (
    <div
    dir="rtl"
    className="w-full h-lvh pt-24 p-5 relative overflow-y-auto"
  >
    <div className="flex flex-row">
      <Icon icon={"typcn:tick"} className="text-4xl text-white/70" />
      <h2 className="font-[Vazirmatn] text-2xl">ورودی و هزینه اش چی؟</h2>
    </div>
    <div className="flex flex-row mt-8">
      <Icon
        icon={"simple-icons:comma"}
        className="text-3xl text-white/35 ml-2"
      />
      <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
      قراره کنار هم تو یک کافه خوب تبادل اطلاعات کنیم،پس تنها هزینه ای که داره
      یک سفارش از کافه است.
      </h2>
    </div>
    <div className="flex flex-row mt-12">
      <Icon icon={"typcn:tick"} className="text-4xl text-white/70" />
      <h2 className="font-[Vazirmatn] text-2xl">کجا برگذار میشه؟</h2>
    </div>
    <div className="flex flex-row mt-8">
      <Icon
        icon={"simple-icons:comma"}
        className="text-3xl text-white/35 ml-2"
      />
      <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
      یکی از کافه های دنج و باصفای بجنورد که قبل از دورهمی آدرسش براتون ارسال میشه.
      </h2>
    </div>
    <div className="flex flex-row mt-12">
      <Icon icon={"typcn:tick"} className="text-4xl text-white/70" />
      <h2 className="font-[Vazirmatn] text-2xl">میزبان دورهمی کیه؟</h2>
    </div>
    <div className="flex flex-row mt-8">
      <Icon
        icon={"simple-icons:comma"}
        className="text-3xl text-white/35 ml-2"
      />
      <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-8">
      کوچیک شما محمد طاهری هستم. تقریبا 7 سالی هست که شب و روزم با برنامه نویسی میگذره.
     دوست دارم راجع به بزرگترین علاقه زندگیم با بقیه تبادل اطلاعات کنم و به بقیه کمک کنم مسیری که سال ها طول کشید روش مسلط بشم و کلی توش اذیت شدم رو برای بقیه هموار تر کنم. میتونی <a className="text-white/50 underline" onClick={() => {router.push("/")}}>اینجا</a> منو بیشتر بشناسی.
      </h2>
    </div>
  </div>
  )
}

export default Section4