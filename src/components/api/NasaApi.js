import React, { useState, useEffect } from "react";
import './NasaApi.css'
// import { NASA_API_KEY } from '../../config/keys';

function NasaApi() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {

      // fetch the photo
      // implement start_date to retrieve photos from a certain date 
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
      );
      const data = await res.json();
      setPhoto(data);
    }
  }, []);

  if (!photo) return <div />;

  return (
    <>
    <div className="nasa-photo">
      {photo.media_type === "image" ? (
        <img
          src={photo.url}
          alt={photo.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={photo.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
      <div>
        <h1>{photo.title}</h1>
        <p className="explanation">{photo.explanation}</p>
        <p className="date">{photo.date}</p>
      </div>
    </div>
    </>
  );
}

export default NasaApi;