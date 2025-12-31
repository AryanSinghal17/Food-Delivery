import Header from "../components/Layouts/Header";
import "../styles/BlogStyle.css";
import blog1 from "../assets/blog/review-author-1.jpg";
import blog2 from "../assets/blog/review-author-2.jpg";
import blog3 from "../assets/blog/review-author-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "10 Healthy Eating Tips",
    description: "Discover practical tips to maintain a balanced diet and stay healthy every day.",
    image: blog1,
  },
  {
    id: 2,
    title: "Why Fresh Ingredients Matter",
    description: "Learn how using fresh produce makes your meals tastier and healthier.",
    image: blog2,
  },
  {
    id: 3,
    title: "Top 5 Summer Recipes",
    description: "Cool off this summer with our top 5 refreshing recipes perfect for hot days.",
    image: blog3,
  },
];

function Blog(){
    return(
        <>
        <Header></Header>
        <div className="blog">
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 col-lg-4 mb-4 col">
              <div className="card blog-card h-100">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <button className="btn btn-primary w-100">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}
export default Blog;