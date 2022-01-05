import React from "react"
import { useEffect } from "react";

export default function Layout({ children }) {
    useEffect(() => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
        btn.addEventListener("click", function () { menu.classList.toggle("hidden") });
    }, [])
    const isBrowser = () => typeof window !== "undefined"
    const isPathMatching = (path) => {
        return isBrowser() && window.location.pathname.replace(/\/+$/, '') === path.replace(/\/+$/, '')
    }
    return (
        <div class="flex flex-col text-gray-600 h-screen justify-between">
            <main>
                <title>Kuranganilmuttam Valeeswarar Koil</title>
                <div class="text-center text-yellow-800">
                    <h1 class="text-3xl font-semibold pt-10 pb-5">
                        <a href="/">அருள்மிகு இறையார் வளையம்மை சமேத <br />
                            அருள்மிகு வாலீஸ்வரர் திருக்கோயில்</a>
                    </h1>
                    <h1 class="text-3xl font-semibold pb-5">
                        <a href="/">Kuranganilmuttam Valeeswarar Koil</a>
                    </h1>
                    <h2 class="text-xl font-semibold">1400 வருடங்களுக்கு மேல் பழமையான, பாடல் பெற்ற திருத்தலம்</h2>
                    <h2 class="text-xl font-semibold">Shiva temple older than 1400 years</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div class="text-justify col-span-4">
                        <nav>
                            <div class="mx-auto p-4">
                                <div class="pt-2 pb-2 hidden md:block py-15 border-dotted border-y-2">
                                    <div class="flex justify-center flex-row px-10 text-gray-500 font-semibold">
                                        <div class="pr-5 hover:text-blue-500 transition duration-300"><a href="/" class={isPathMatching("/") ? 'text-yellow-800' : ''} >முகப்பு/Home</a></div>
                                        <div class="px-5 hover:text-blue-500 transition duration-300"><a href="/videos" class={isPathMatching("/videos") ? 'text-yellow-800' : ''}>காணொளிகள்/Videos</a></div>
                                        <div class="px-5 hover:text-blue-500 transition duration-300"><a href="/works" class={isPathMatching("/works") ? 'text-yellow-800' : ''}>திருப்பணி/Renovation </a></div>
                                        <div class="px-5 hover:text-blue-500 transition duration-300"><a href="/contact" class={isPathMatching("/contact") ? 'text-yellow-800' : ''}>தொடர்பு & வழி/Contact</a></div>
                                    </div>
                                </div>

                            </div>
                            <div class="md:hidden flex justify-between flex-col border border-y-1 my-5 p-3 bg-yellow-800">
                                <button class="outline-none mobile-menu-button px-10 text-white">
                                    <div class="flex flex-row justify-between">
                                        <div class="px-10 text-center ">மற்ற பக்கங்கள்/Menu</div>
                                        <div>
                                            <svg class=" w-6 h-6 hover:text-gray-500 "
                                                x-show="!showMenu"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                <div class="hidden mobile-menu text-white">
                                    <div class="flex flex-col text-center px-10" >
                                        <div class="border-b pb-2"></div>
                                        <div class="px-5 py-1 hover:text-blue-500 transition duration-300 border-b"><a href="/" class={isPathMatching("/") ? 'font-bold' : ''} >முகப்பு/Home</a></div>
                                        <div class="px-5 py-1 hover:text-blue-500 transition duration-300 border-b"><a href="/videos" class={isPathMatching("/videos") ? 'font-bold' : ''}>காணொளிகள்/Videos</a></div>
                                        <div class="px-5 py-1 hover:text-blue-500 transition duration-300 border-b"><a href="/works" class={isPathMatching("/works") ? 'font-bold' : ''}>திருப்பணி/Renovation </a></div>
                                        <div class="px-5 pt-1 hover:text-blue-500 transition duration-300"><a href="/contact" class={isPathMatching("/contact") ? 'font-bold' : ''}>தொடர்பு & வழி/Contact</a></div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {children}
                </div>
            </main >
            <footer class="pt-10 text-center">
                <div class="italic pt-5 pb-2">
                    தென்னாடுடைய சிவனே போற்றி!<br />
                    எந்நாட்டவர்க்கும் இறைவா போற்றி!
                </div>
                &copy;2022 Kuranganilmuttam.org
            </footer>
        </div>
    )
}