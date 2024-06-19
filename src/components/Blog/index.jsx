import Heading from "../Heading";
import ButtonUI from "../ButtonUI";
import { Col, Row } from "react-bootstrap";
import CardBlog from "../CardBlog";
import { blogs } from "../../constant/product";

const Blog = () => {
  return (
    <Heading headtitle="You already know ?" title="Useful pet knowledge">
      <ButtonUI slot="header" border={true}>
        View more
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.8637 6.13633C8.57081 5.84343 8.09594 5.84343 7.80304 6.13633C7.51015 6.42922 7.51015 6.90409 7.80304 7.19699L8.8637 6.13633ZM11.6667 9.99999L12.197 10.5303C12.3377 10.3897 12.4167 10.1989 12.4167 9.99999C12.4167 9.80108 12.3377 9.61031 12.197 9.46966L11.6667 9.99999ZM7.80304 12.803C7.51015 13.0959 7.51015 13.5708 7.80304 13.8637C8.09594 14.1565 8.57081 14.1565 8.8637 13.8637L7.80304 12.803ZM7.80304 7.19699L11.1364 10.5303L12.197 9.46966L8.8637 6.13633L7.80304 7.19699ZM11.1364 9.46966L7.80304 12.803L8.8637 13.8637L12.197 10.5303L11.1364 9.46966Z"
            fill="#003459"
          />
        </svg>
      </ButtonUI>
      <Row>
        {blogs.map((blog) => (
          <Col key={blog._id} lg={4} md={4} sm={6} xs={12}>
            <CardBlog
              title={blog.title}
              image={blog.image}
              tags={blog.tags}
              text={blog.text}
            />
          </Col>
        ))}
      </Row>
    </Heading>
  );
};

export default Blog;
