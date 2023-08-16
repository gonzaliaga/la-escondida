import React from "react";
import HomeTitle from "@/components/homeTitle/HomeTitle"
import styles from "./HomeSection.module.css";
import Pollos from "../cards/Cards";





export default function HomeSection() {
  return (
    <>
      <div className={`${styles.main} relative w-full h-screen`}>

        <div className="absolute -z-10 w-full h-full  ">
          <video autoPlay loop muted preload="auto" className="w-full h-full object-cover"
            src={require('@/public/videos/pollos-barbara.mp4')} type="video/mp4" />
        </div>
        <HomeTitle className="" />
      </div>
      <Pollos/>
    </>

  )
}
// style={{ position: 'absolute', marginTop: "0px", marginLeft: "0px", zIndex: -1, width: '100%', height: '100%' }}