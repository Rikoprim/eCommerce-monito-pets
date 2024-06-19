import './cardblog.scss'

const CardBlog = ({ image, tags, title, text }) => {
  return (
    <div className="blog h-100">
      <img src={`/img/blog/${image}`} alt={title} width="100%" height="auto" />
      <div className="blog-body">
        {tags && tags.length > 0 && (
          <div className="tags">
            {tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
        )}
        <h4>{title}</h4>
        <p>
          {text.substring(0, 160)}
          {text.length > 160 ? "..." : ""}
        </p>
      </div>
    </div>
  );
};

export default CardBlog;
