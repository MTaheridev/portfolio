import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Section2 = () => {
  return (
          <div
            dir="rtl"
            className="w-full h-lvh pt-36 p-5 relative overflow-y-auto"
          >
            <div className="flex flex-row">
              <Icon icon={"typcn:tick"} className="text-4xl text-white/70" />
              <h2 className="font-[Vazirmatn] text-2xl">راجع به چی صحبت میکنیم؟</h2>
            </div>
            <div className="flex flex-row mt-12">
              <Icon
                icon={"simple-icons:comma"}
                className="text-3xl text-white/35 ml-2"
              />
              <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
                قراره باهم یادبگیریم که اصلا برنامه نویسی چی هست و چطور میشه شروع
                کرد و برنامه نویس شد.
              </h2>
            </div>
            <div className="flex flex-row mt-12">
              <Icon
                icon={"simple-icons:comma"}
                className="text-3xl text-white/35 ml-2"
              />
              <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
                هرچیزی که این روزا باعث میشه فکر کنی، ترمیناتور اونقدر ها هم تخیلی
                نبوده.
              </h2>
            </div>
            <div className="flex flex-row mt-12">
              <Icon
                icon={"simple-icons:comma"}
                className="text-3xl text-white/35 ml-2"
              />
              <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
                با برنامه‌نویسان و کسانی که تازه وارد دنیای کدنویسی شدن، صحبت
                می‌کنیم و تجربه‌های واقعی رو از نزدیک می‌بینیم. این فرصتیه برای
                پرسیدن سوالات بدون هیچ ترسی برای یادگیری از تجربیات واقعی.
              </h2>
            </div>
          </div>
  )
}

export default Section2