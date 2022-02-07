import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import AccountDetails from "../components/account"



// markup
const IndexPage = () => {
  return (
    <Layout>
      <div class="text-justify col-span-4">
        <div class="grid grid-cols-1">
          <div></div>
          <div class="text-center">
            <div class="italic py-5">
              <StaticImage src="../images/temple-front.png" alt="Kuranganilmuttam koil" placeholder="blurred"
              />
            </div>
            <div class="italic py-5">
              மையார் நிற மேனி அரக்கர் தம் கோனை <br />
              உய்யா வகையால் அடர்த்து இன்னருள் செய்த<br />
              கொய்யார் மலர் சூடி குரங்கணில்முட்டம்<br />
              கையால் தொழுவார் வினை காண்டல் அரிதே!<br />
              -திருஞானசம்பந்தர்
            </div>
          </div>
          <div></div>
        </div>
        <div class="px-10">
          இத்திருத்தலம்,
          தொண்டை மண்டலத்திலே பாடல் பெற்ற சிவத்தலங்கள் 32-ல் காஞ்சீபுரத்தில் முதல் 5 தலங்களும்,
          அடுத்து 6-வது திருத்தலமாக விளங்குகிறது. கி.பி.7-ஆம் நூற்றாண்டில் (637-ம் வருடம்) சுமார் 1400
          ஆண்டுகளுக்கு முன்னர் திருஞானசம்பந்தர் தேவார பதிகம் பாடிய பாடல் பெற்ற திருத்தலம். இந்த
          ஆலயத்தில் சுவாமி மேற்கு திசையை நோக்கி எழுந்தருளி அருள்பாலிக்கிறார்.
          அட்டதிக்கிலும் சிவ பூஜை செய்த வாலி குரங்கு வடிவிலும், தேவேந்திரன் அணில் வடிவிலும்,
          திருக்கடையூரிலே மார்க்கண்டேயரைப் பிடிக்க வந்த எமன், சிவனையும் பிடித்ததினால் சிவனால் வீசி
          எறியப்பட்டு, இத்தலத்திற்கு வந்து காக்கை வடிவிலே சுவாமியின் முப்புரமும் தனது அலகினால் கீறி
          தீர்த்தம் கண்டெடுத்து வாலீஸ்வர சுவாமிக்கு அபிஷேக ஆராதனைகள் செய்து விமோசனம் பெற்ற
          தலமாகும். தேவர்கள் பல்வேறு வடிவங்களில் பூஜித்து விமோசனம் பெற்ற தலம் இத்திருத்தலம்.

          <div class="py-10">
            <h4 class="font-semibold">ஆலயத்தின் சிறப்பு அம்சங்கள்</h4>
            குழந்தைகளுக்கு ஏற்படும் பிணிகள் தீர (பாலாரிஷ்டம் விலக), திருமண தடைகள் விலக,
            சுகப்பிரசவம் நடக்க, பிரிந்த தம்பதியர் ஒன்று சேர, குழந்தை பாக்கியம் பெற இத்தலத்து
            அருள்மிகு இறையார் வளையம்மை உடனுறை அருள்மிகு வாலீஸ்வர சுவாமியை வழிபாடு செய்ய
            அனைத்து பயன்களும் சித்தியாகும் என்பது நிதர்சனமான உண்மை.
          </div>
          இத்திருத்தல பாலாலய கும்பாபிஷேகம் கடந்த கார்த்திகை மாதம் 27 ஆம் நாள் (13.12.2021) அன்று
          இனிதே நடந்தேறியது. தொடர்ந்து ஆலய திருப்பணிகள் நடைபெற்று வருகின்றது.

          எனவே, மேற்படி ஆலய திருப்பணிகள் தொடர்ந்து நடைபெறவும், விரைந்து முடிக்கவும் இதனைக்
          கண்ணுறும் அன்பர்கள், அருளாளர்கள், பக்தகோடிகள் அனைவரும் தங்களால் இயன்ற பொருளுதவி
          அளிக்கவும், இயன்ற ஏதேனும் ஒரு <a href="/works" class="text-yellow-800">திருப்பணியினை</a> ஏற்று நடத்தி தந்து ஈசனின் இன்னருள் பெற்று
          உய்யவும் பணிந்து வேண்டுகிறோம்.
          <div>~~~~~~~~~~~~~~~~~~</div>
        </div>
        <div class="text-justify col-span-4 pt-10 px-10">
          It is one of the shrines of the 275 <a class="text-yellow-800" href="https://en.wikipedia.org/wiki/Shiva_Temples_of_Tamil_Nadu#Paadal_Petra_Sthalangal_temples">Paadal Petra Sthalams
          </a> – Shiva Sthalams glorified in the early medieval Tevaram poems by Tamil Saivite Nayanar Sambandar.
          It's a Swayambu linga facing west. The rays of the Sun fall on certain days in Tamil month Chithirai (Apr-May).

          <p class="pt-5">
            Vaali worshipped Shiva at the entrance to the temple while a squirrel worshipped from the South and a crow from the North, hence the name Kuranganilmuttam. Hanuman is also believed to have worshipped Shiva here.
          </p>

          <p class="pt-5 font-semibold">Sambandar says people who gets the grace of Valeeswarar will find Mukthi (liberation) easier.</p>

          <p class="pt-5">
            The temple kumbhabhishekham did not happen for about four decades. It's government owned temple. After three years of persistence, finally
            we have received permission to do the kumbhabhishekham. The temple is in a dilapidated state and needs revival. Government also has set tight
            deadlines to complete the kumbhabhishekham.
          </p>
          <p class="pt-5">
            The estimated works is 40 Lakhs. Raising funds for such amounts in a small village is really hard.
            The temple of such importance cannot go neglected in our generation. Pleae contribute generaously to this temple.
          </p>
        </div>
        <div class="px-10">
          <AccountDetails></AccountDetails>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage