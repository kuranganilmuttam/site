import * as React from "react"
import Layout from "../components/layout"


// markup
const VideosPage = () => {
  return (
    <Layout>
      <div class="px-10 flex flex-col items-center">
        <div class="pt-10">
          <iframe src="https://www.youtube.com/embed/hZH1bQOSaBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="pt-10">
          <iframe src="https://www.youtube.com/embed/dKlzoZGELUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default VideosPage
