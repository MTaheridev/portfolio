import { useRouter } from 'next/navigation'
import React from 'react'

const Section1 = () => {
  const router = useRouter();
  return (
    <div dir="rtl" className="overflow-y-auto">
    <div className="z-50 w-full h-full flex flex-col relative">
      <div
        dir="ltr"
        className="w-full flex flex-row justify-between items-center px-5 pb-4"
      >
        <div className="flex flex-row justify-center items-center">
          <div className="col-span-2" onClick={() => {router.push("/")}}>
            <h1 className="text-3xl mt-5">Mohammad</h1>
            <h1 className="text-3xl">Taheri</h1>
          </div>
        </div>
      </div>
      <div className="px-8 pt-10">
        <h2 className="text-[42px] leading-relaxed font-bold font-[Vazirmatn]">
          مسیری ساده و جذاب برای ورود به دنیای برنامه نویسی
        </h2>
        <p className="font-[Vazirmatn] leading-8 tracking-wider mt-10">
          این دورهمی ویژه برای همه‌ی کساییه که می‌خوان بدونن برنامه‌نویسی
          چیه و چطور می‌تونن وارد این دنیای جذاب بشن! اگر تا حالا به این فکر
          کرده‌اید که &quot;برنامه‌نویسی چیه و از کجا شروع کنم؟&quot; اینجا
          جاشه که همه‌ی سوالات شما جواب داده بشه. ما می‌خوایم به صورت
          خودمونی، دوستانه و بدون کلی اصطلاح فنی، نکات اولیه و کاربردی رو در
          اختیار شما قرار بدیم.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Section1