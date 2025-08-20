import { useNavigate, useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../../authContext/AuthContext";

const AppDetail = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch("/allapps.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id === id);
        setApp(foundApp);
      });
  }, [id, user, navigate]);

  const handleInstall = () => setInstalled(true);
  const handleUninstall = () => {
    setInstalled(false);
    setReviews([]);
  };

  const handleReviewSubmit = () => {
    if (!reviewText || rating < 1 || rating > 5) return;
    if (!installed) return;

    const newReview = {
      text: reviewText,
      rating,
      email: user.email,
    };
    setReviews([...reviews, newReview]);
    setReviewText("");
    setRating("");
  };

  if (!app) return <div className="p-4">Loading app details...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto bg-base-100 rounded shadow my-8">
      <img
        src={app.banner}
        alt={app.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={app.thumbnail}
          alt={app.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{app.name}</h2>
          <p className="text-sm text-gray-500">By {app.developer}</p>
        </div>
      </div>
      <p><strong>Category:</strong> {app.category}</p>
      <p><strong>Rating:</strong> {app.rating}</p>
      <p><strong>Downloads:</strong> {app.downloads}</p>
      <p className="mt-2">{app.description}</p>

      <div className="mt-4">
        <strong>Features:</strong>
        <ul className="list-disc pl-6">
          {app.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {!installed ? (
        <button
          onClick={handleInstall}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Install
        </button>
      ) : (
        <button
          onClick={handleUninstall}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Uninstall
        </button>
      )}

      {/* Reviews Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Submit a Review</h3>
        {!installed ? (
          <p className="text-red-500">Please install the app to leave a review.</p>
        ) : (
          <>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review"
              className="w-full border p-2 mb-2 rounded"
            />
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating (1-5)"
              className="w-full border p-2 mb-2 rounded"
            />
            <button
              onClick={handleReviewSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit Review
            </button>
          </>
        )}

        <div className="mt-4">
          <h4 className="text-lg font-medium mb-2">Reviews:</h4>
          {reviews.length === 0 && <p>No reviews yet.</p>}
          {reviews.map((r, i) => (
            <div key={i} className="border-b py-2">
              <p>{r.text}</p>
              <p className="text-yellow-600 font-medium">Rating: {r.rating}/5</p>
              <p className="text-sm text-gray-500">By: {r.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
