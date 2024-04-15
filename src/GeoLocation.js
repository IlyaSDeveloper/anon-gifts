import React, { useEffect, useState } from 'react';

export function GeoLocation () {
    const [city, setCity] = useState('');
    const ymaps = window.ymaps;

// useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude
//         });
//       });
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }

//   }, []);
  useEffect(() => {
    ymaps.ready(function(){
        // var myReverseGeocoder = ymaps.geocode([location.latitude,location.longitude]);
        //     myReverseGeocoder.then(function (res) {
        //        setCity(res.geoObjects.get(0).properties.get('description'));
        //        debugger
        //     });
        ymaps.geolocation.get({provider: 'yandex'}).then(function (res) {
            const data = res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails
            .Country.AdministrativeArea;
            const administrativeAreaNames = data.AdministrativeAreaName; //region
            if ('SubAdministrativeArea' in data) {
                setCity(data.SubAdministrativeArea.Locality.LocalityName);//city
            } else if (data.Locality) {
                setCity(data.Locality.LocalityName);
            } else {
                setCity(data.AdministrativeAreaName);
            }
        })
    });
  }, [])
  return (
    <p>{city}</p>
)}
