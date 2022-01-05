import React from "react"
import { useEffect } from "react";

export default function Layout({ children }) {
    useEffect(() => {
        // const btn = document.querySelector("button.mobile-menu-button");
        // const menu = document.querySelector(".mobile-menu");
        // btn.addEventListener("click", function () { menu.classList.toggle("hidden") });
    }, [])
    const isBrowser = () => typeof window !== "undefined"
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
                            <div class="max-w-6xl mx-auto p-4">
                                <div class="pt-2 pb-2 border-dotted border-y-2">
                                    <div class="flex justify-center flex-row px-10 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                                        <div class="pr-5"><a href="/" class={isBrowser() && window.location.pathname === "/" ? 'text-yellow-800' : ''} >முகப்பு/Home</a></div>
                                        <div class="px-5"><a href="/videos" class={isBrowser() && window.location.pathname === "/videos" ? 'text-yellow-800' : ''}>காணொளிகள்/Videos</a></div>
                                        <div class="px-5"><a href="/works" class={isBrowser() && window.location.pathname === "/works" ? 'text-yellow-800' : ''}>திருப்பணி/Renovation </a></div>
                                        <div class="px-5"><a href="/contact" class={isBrowser() && window.location.pathname === "/contact" ? 'text-yellow-800' : ''}>தொடர்பு & வழி/Contact</a></div>
                                    </div>
                                    {/* <div class="md:hidden flex items-center">
                                        <button class="outline-none mobile-menu-button">
                                            <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                                x-show="!showMenu"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                                            </svg>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div class="hidden mobile-menu">
                                <ul class="">
                                    <li class="active"><a href="/" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                                    <li><a href="/videos" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                                </ul>
                            </div> */}
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