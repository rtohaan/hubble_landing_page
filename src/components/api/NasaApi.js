import React, { useState, useEffect } from "react";
import './NasaApi.css'
// const NasaKey = process.env.REACT_APP_NASA_KEY;

function NasaApi() {
  const [photo, setPhoto] = useState(null);


  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=iN7s6WaDS9fvVRTRFMnU2Je8iVThqJ5AF4bCLEfB`
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