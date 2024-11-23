
import React from "react";

const Card = ({ singleNews }) => {
  const {
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
    others_info,
  } = singleNews;

  return (
    <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mb-4">
      {/* Header Section */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <img
          src={author.img}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-bold">{author.name}</h4>
          <p className="text-sm text-gray-500">
            {new Date().toDateString()}
          </p>
        </div>
        {others_info.is_trending && (
          <span className="ml-auto text-sm font-semibold text-orange-600 bg-orange-100 py-1 px-3 rounded-full">
            Trending
          </span>
        )}
      </div>

      {/* Thumbnail */}
      <img
        src={image_url}
        alt="Thumbnail"
        className="w-full object-cover"
      />

      {/* Title and Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {details.slice(0, 100)}...
          <a href="#readmore" className="text-orange-500 ml-1">
            Read More
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="flex items-center text-orange-500">
          {"⭐".repeat(Math.round(rating.number))}{" "}
          <span className="ml-2 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          👁️ <span className="ml-1">{total_view} views</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
