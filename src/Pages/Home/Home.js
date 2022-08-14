import styles from './Home.css'

import avatar from '../../assets/doleta.png'

const Home = () => {
  return (
    <div className="container">
      <div className="presentation">
        <div className="presentation-text">
          <h1>Atlética Granada</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
          </p>
          <button>Saiba Mais</button>
          <h2>Eu nao vim pra dar lucro, vim pra dar prejuizo</h2>
        </div>
        <div className="avatar-img">
          <img src={avatar} />
        </div>
      </div>
    </div>
  )
}

export default Home
