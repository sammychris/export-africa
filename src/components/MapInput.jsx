import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';

function MapInput({ onSelectionChange }) {
  const [map, setMap] = useState(null);
  const [drawnArea, setDrawnArea] = useState(null);

  useEffect(() => {
    if (map) {
      // Enable draw control on Leaflet map
      let drawnItems = new L.FeatureGroup(); 
      map.addLayer(drawnItems);

      let drawControl = new L.Control.Draw({ 
        draw: { 
          polyline: false, 
          circle: false, 
          marker: false, 
          circlemarker: false,
          polygon: { 
            allowIntersection: false, 
            showArea: true
          }
        },
        edit: false // Disable editing of the shape for simplicity
      });
      map.addControl(drawControl); 

      map.on(L.Draw.Event.CREATED, (e) => {
          const layer = e.layer;
          const coordinates = layer.getLatLngs()[0]; // Assuming simple Polygon 

          setDrawnArea(coordinates);
          drawnItems.clearLayers(); 
          drawnItems.addLayer(layer);

          // Notify parent component if needed
          if (onSelectionChange) {
            onSelectionChange(coordinates); 
          }
      }); 
    } 
  }, [map]);

  return (
    <MapContainer 
      center={[6.465422, 3.406448]} // Default center e.g. Nigeria
      zoom={6} 
      style={{ height: '300px' }} 
      whenCreated={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Display the drawn polygon, if any */}
      {drawnArea && (
        <Polygon positions={drawnArea} />
      )}
    </MapContainer>
  );
}

export default MapInput;
