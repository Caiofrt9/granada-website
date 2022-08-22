import styles from './Home.css'

import avatar from '../../assets/doleta.png'

import { SwiperSlide } from 'swiper/react'
import bandeira from '../../assets/bandeira.jpeg'
import Slide from '../../components/Slide'

const settings = {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: true
}

const Home = () => {
  return (
    <Slide settings={settings}>
      <SwiperSlide>
        <img src={bandeira} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bandeira} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bandeira} />
      </SwiperSlide>
    </Slide>
  )
}

export default Home
