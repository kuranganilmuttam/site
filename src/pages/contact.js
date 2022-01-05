import * as React from "react"
import AccountDetails from "../components/account"
import Layout from "../components/layout"


const ContactPage = () => {
  return (
    <Layout>
      <h1 class="text-xl text-center py-5">தொடர்பு & வழி / Contact</h1>
      <div class="px-10 flex flex-col items-center">
        <div class="p-10">
          <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.1730936940253!2d79.68856525107007!3d12.767268490945975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52dcde8b3aaaab%3A0xde116b50bd671be1!2sSri%20Valeeswarar%20Temple%2C%20Padal%20Petra%20Temple!5e0!3m2!1sen!2sin!4v1641134498791!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div>
          அலைபேசி/Mobile:  <p><a href="tel:+919003130621 ">+91 90031 30621 </a></p><br />
          (திரு. பன்னீர் செல்வம், திருப்பணிக் குழு)<br />
          (Mr. Paneer selvam, kumbhabhishekham committee)
        </div>
      </div >
      <div class="p-5">
        <AccountDetails></AccountDetails>
      </div>
    </Layout >
  )
}

export default ContactPage
