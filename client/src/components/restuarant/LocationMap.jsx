import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const LocationMap = ({ location, address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: `${address}, ${location}` }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 15,
          });
          new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
    });
  }, [location, address]);

  return (
    <div className="mt-6 rounded-lg overflow-hidden shadow-md">
      <div ref={mapRef} className="w-full h-64"></div>
    </div>
  );
};

export default LocationMap;