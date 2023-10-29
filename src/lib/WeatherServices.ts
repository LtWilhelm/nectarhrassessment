type GeoQueryResult = {
  "place_id": number;
  "licence": string;
  "powered_by": string;
  "osm_type": string;
  "osm_id": number;
  "boundingbox": string[];
  "lat": string;
  "lon": string;
  "display_name": string;
  "class": string;
  "type": string;
  "importance": number;
}[];

type WeatherPointQueryResult = {
  "type": string;
  "geometry": {
    "type": string;
    "coordinates": number[];
  };
  "properties": {
    "@id": string;
    "@type": string;
    "cwa": string;
    "forecastOffice": string;
    "gridId": string;
    "gridX": number;
    "gridY": number;
    "forecast": string;
    "forecastHourly": string;
    "forecastGridData": string;
    "observationStations": string;
    "relativeLocation": {
      "type": string;
      "geometry": {
        "type": string;
        "coordinates": number[];
      };
      "properties": {
        "city": string;
        "state": string;
        "distance": {
          "unitCode": string;
          "value": number;
        };
        "bearing": {
          "unitCode": string;
          "value": number;
        };
      };
    };
    "forecastZone": string;
    "county": string;
    "fireWeatherZone": string;
    "timeZone": string;
    "radarStation": string;
  };
};

const getStateLatLon = async (state: string) => {
  const url = new URL("https://geocode.maps.co/search");

  const params = new URLSearchParams({
    state,
  });
  url.search = params.toString();

  const res = await fetch(url);
  const json = await res.json() as GeoQueryResult;

  if (!json.length) throw new Error("Unable to get latlon for query: " + state);

  const { lat, lon } = json[0];
  return { lat, lon };
};

export const getForecastForState = async (state: string) => {
  const { lat, lon } = await getStateLatLon(state);

  const headers = new Headers();
  headers.set("User-Agent", "(TechAssessment, emma@cyborggrizzly.com)");

  const url = new URL(`https://api.weather.gov/points/${lat},${lon}`);

  const pointRes = await fetch(url, { headers });
  const pointJson = await pointRes.json() as WeatherPointQueryResult;

  const forecastRes = await fetch(pointJson.properties.forecast, { headers });
  return await forecastRes.json();
};
