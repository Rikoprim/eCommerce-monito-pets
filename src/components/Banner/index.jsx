import './banner.scss'

const Banner = ({ background, right, headtitle, title, description, iconHead }) => {
  return (
    <div className="container">
      <div
        className={`banner ${right ? 'banner-right' : ''}`}
        style={{
          background: background,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <h1>
          {headtitle} {iconHead && <img src="/img/icons/paw-icon.svg" alt="" />}
        </h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Banner