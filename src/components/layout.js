import React from "react"

export default function Layout({ children }) {
    return (
        <div class="flex flex-col text-gray-600 h-screen justify-between">
            <main>
                <title>Kuranganilmuttam Valeeswarar Koil</title>
                <div class="text-center text-yellow-800">
                    <h1 class="text-3xl font-semibold py-10">
                        அருள்மிகு இறையார் வளையம்மை சமேத <br />
                        அருள்மிகு வாலீஸ்வரர் திருக்கோயில்
                    </h1>
                    <h2 class="text-xl">குரங்கணில்முட்டம், தூசி அஞ்சல் - 631702</h2>
                    <h2 class="text-xl">வெம்பாக்கம் வட்டம், திருவண்ணாமலை மாவட்டம்</h2>
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