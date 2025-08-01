export const getPlaces = async (places: string) => {
  const response = await fetch(
    `https://geocode.maps.co/search?q=${encodeURIComponent(places)}&api_key=`
  );

  if (!response.ok) {
    throw new Error(`Error fetching places: ${response.statusText}`);
  }

  return response.json();
};

export const getPoints = async (coord: string) => {
  const response = await fetch(`https://api.weather.gov/points/${encodeURIComponent(coord)}`);

  if (!response.ok) {
    throw new Error(`Error fetching points: ${response.statusText}`);
  }

  return response.json();
};

export type GridDetails = {
  properties: {
    periods: Array<{ name: string; temperature: number; temperatureUnit: string; icon: string }>;
  };
};

export const getGridDetails = async (gridId: string, gridCoord: string): Promise<GridDetails> => {
  const response = await fetch(
    `https://api.weather.gov/gridpoints/${encodeURIComponent(gridId)}/${encodeURIComponent(gridCoord)}/forecast`
  );

  if (!response.ok) {
    throw new Error(`Error fetching grid details: ${response.statusText}`);
  }

  return response.json();
};
