import './button.scss'

const ButtonUI = ({ border, customClass, white, href, children }) => {
  if (!href) {
    return (
      <button
        className={`button ${white ? 'button-white' : ''} ${border ? 'button-border' : ''} ${customClass || ''}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      className={`button ${white ? 'button-white' : ''} ${border ? 'button-border' : ''} ${customClass || ''}`}
      href={href}
    >
      {children}
    </a>
  )
}

export default ButtonUI