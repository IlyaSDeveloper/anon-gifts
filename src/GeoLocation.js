import React, { useEffect, useState, useCallback } from 'react';

export function GeoLocation() {
  const [city, setCity] = useState('');
  const ymaps = window.ymaps;

  const fetchCityName = useCallback((latitude, longitude) => {
    if (!ymaps) {
      console.error('Yandex Maps API is not available.');
      return;
    }

    ymaps.ready(() => {
      ymaps.geolocation.get({
        provider: 'yandex',
        mapStateAutoApply: true,
        // If you have specific coordinates, you can use them like this:
        // coords: [latitude, longitude]
      }).then((res) => {
        const addressDetails = res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails;
        const countryData = addressDetails.Country.AdministrativeArea;
        const administrativeAreaName = countryData.AdministrativeAreaName; // region

        let localityName;
        if ('SubAdministrativeArea' in countryData) {
          localityName = countryData.SubAdministrativeArea.Locality.LocalityName; // city
        } else if (countryData.Locality) {
          localityName = countryData.Locality.LocalityName;
        } else {
          localityName = administrativeAreaName;
        }

        setCity(localityName);
      });
    });
  }, [ymaps]);

  // Initial fetch for the city name
  useEffect(() => {
    fetchCityName();
  }, [fetchCityName]);

  // Function to manually update the location
//   const updateLocation = (newLatitude, newLongitude) => {
//     fetchCityName(newLatitude, newLongitude);
//   };

  return (
    <>
      <p>{city}</p>
      {/* You can add a button or any other UI element to trigger location update */}
      {/* <button onClick={() => updateLocation(55.751244, 37.618423)}>Update Location</button> */}
    </>
  );
}