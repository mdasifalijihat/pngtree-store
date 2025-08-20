import React, { useEffect, useState } from "react";
import AppsCard from "./appsCard/AppsCard";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const App = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/allapps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const categories = ["Productivity", "Gaming", "Education"];

  const handleCardClick = (id) => {
    navigate(`/apps/${id}`);
  };

  const getTrendingApps = () => {
    return [...apps].sort((a, b) => b.rating - a.rating).slice(0, 4);
  };

  return (
    <div className="space-y-10 px-4 py-8">
      {/* Slider Section */}

      {/* Marquee Section */}
    {apps.length > 0 && (
  <div className="bg-base-200 py-2 px-4 rounded-md overflow-hidden my-4">
    <Marquee pauseOnHover gradient={false} speed={60}>
      <div className="flex gap-12 items-center">
        {apps.map((app) => (
          <div
            key={app.id}
            className="transition-transform hover:-translate-y-1 duration-300"
          >
            <img
              className="w-16 h-16 rounded-full"
              src={app.thumbnail}
              alt={app.name || 'App Thumbnail'}
            />
          </div>
        ))}
      </div>
    </Marquee>
  </div>
)}


      {/* Trending Apps Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Trending Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {getTrendingApps().map((app) => (
            <AppsCard
              key={app.id}
              app={app}
              onClick={() => handleCardClick(app.id)}
            />
          ))}
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category) => (
        <section key={category}>
          <h2 className="text-xl font-bold mb-4 bg-base-200 p-2 rounded">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {apps
              .filter((app) => app.category === category)
              .map((app) => (
                <AppsCard
                  key={app.id}
                  app={app}
                  onClick={() => handleCardClick(app.id)}
                />
              ))}
          </div>
        </section>
      ))}

      {/* Extra Section: New Arrivals */}
      <section>
        <h2 className="text-xl font-bold mb-4 bg-base-200 p-2 rounded">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {apps.slice(-4).map((app) => (
            <AppsCard
              key={app.id}
              app={app}
              onClick={() => handleCardClick(app.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
