import Image from "next/image";
import React from "react";

const BlogPostCard = () => {
  return (
    <div className="group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
      <div className="relative w-[130px] h-[130px] sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden shrink-0">
        <Image
          width={285}
          height={189.32}
          src="/images/blogs/blog-1.png"
          className="h-full sm:h-auto object-cover"
          alt=""
        />
        <div className="hidden absolute inset-0 w-full h-full md:flex-center invisible opacity-0 group-hover:visible group-hover:opacity-100  bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-100">
          <svg className="w-[138px] h-[54px] text-amber-900">
            <use href="#logo-type"></use>
          </svg>
        </div>
      </div>

      <div className=" w-full flex flex-col sm:flex-row justify-between items-start">
        <a
          href="#"
          className="mt-2.5 sm:mt-0 ml-1.5 sm:ml-0 font-DanaMedium md:font-Dana text-sm/7 md:text-lg line-clamp-2 lg:max-w-[193px] text-zinc-700 dark:text-white"
        >
          طرز تهیه قهوه دمی با دستگاه اروپرس
        </a>
        <div className="hidden sm:flex gap-5">
          <span className="hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10"></span>
          <div className="flex flex-col ml-[12px ] lg:ml-[18px] text-teal-600 dark:text-emerald-500 text-sm text-left">
            <span className="font-DanaDemibold md:text-lg lg:text-2xl">28</span>
            <span>مرداد</span>
            <span>1402</span>
          </div>
        </div>
        <div className="flex items-end justify-between w-full pb-1.5 border-t border-t-gray-100 dark:border-t-white/10 pt-[18px] sm:hidden">
          <span className="text-teal-600 dark:text-emerald-500 text-xs">
            28 مرداد 1402
          </span>
          <a
            href="#"
            className="flex items-center gap-x-1 h-5 pr-2.5 pl-2 ml-1.5 text-xs font-DanaMedium bg-orange-200/20 text-orange-300 rounded-md"
          >
            <span>مطالعه</span>
            <svg className="w-3.5 h-3.5 ">
              <use href="#arrow-left2"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
