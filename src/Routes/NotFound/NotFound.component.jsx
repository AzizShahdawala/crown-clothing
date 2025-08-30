import { Link } from "react-router-dom";
import './NotFound.style.scss'; // Import CSS for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">Oops! Page Not Found</h1>
        <p className="not-found-message">
          The page you are looking for might have been moved or deleted. Please check the URL or return to the homepage.
        </p>
        <Link to="/" className="not-found-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
