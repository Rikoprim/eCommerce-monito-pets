import { Image } from 'react-bootstrap';
import './card.scss'

const Card = ({ image, title, description, price, category, present, href }) => {
  const priceFormatted = new Intl.NumberFormat('ua-UA', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);

  return (
    <a href={href} className="card-custom h-100">
      <Image
        className="image"
        src={`/img/catalog/${category}/${image}`}
        alt={title}
        width="auto"
        height="auto"
      ></Image>
      <div className="card-body">
        <h4>{title}</h4>
        {description && (
          <ul className="card-description">
            {description.map((item, index) => (
              <li key={index}>
                {item[1] && (
                  <span>
                    {item[0]}: <b>{item[1]}</b>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
        <p className="card-price">
          {priceFormatted}
        </p>
        {present && (
          <div className="card-present">
            <img src="/img/icons/present.svg" alt="present" />
            <span>{present}</span>
          </div>
        )}
      </div>
    </a>
  )
}

export default Card