import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Section3 = () => {
  return (
          <div
            dir="rtl"
            className="w-full h-lvh pt-36 p-5 relative overflow-y-auto"
          >
            <div className="flex flex-row">
              <Icon icon={"typcn:tick"} className="text-4xl text-white/70" />
              <h2 className="font-[Vazirmatn] text-2xl">واسه چه کسانی جذابه؟</h2>
            </div>
            <div className="flex flex-row mt-12">
              <Icon
                icon={"simple-icons:comma"}
                className="text-3xl text-white/35 ml-2"
              />
              <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
                این دورهمی مخصوص همه‌ی کسانیه که کنجکاو هستن بدونن برنامه نویسی چیه
                و از کجا باید شروع کنن.
              </h2>
            </div>
            <div className="flex flex-row mt-12">
              <Icon
                icon={"simple-icons:comma"}
                className="text-3xl text-white/35 ml-2"
              />
              <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
                اگر هیچی از برنامه نویسی نمیدونی، اگر تازه مسیر برنامه نویسی رو شروع
                کردی یا حتی اگر تجربه برنامه نویسی داری، این جمع واست جذاب خواهد
                بود.
              </h2>
            </div>
            <div className="flex flex-row mt-12">
              <Icon
                icon={"simple-icons:comma"}
                className="text-3xl text-white/35 ml-2"
              />
              <h2 className="w-[90%] font-[Vazirmatn] font-extralight leading-relaxed">
                اگر سوالی تو ذهنت داری، یا اگر میخوایی با بقیه تبادل نظر کنی.
              </h2>
            </div>
          </div>
  )
}

export default Section3