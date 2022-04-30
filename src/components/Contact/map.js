import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

const Map = () => {
  return (
    <>
      <MapContainer
        center={[25.0453193260905, 55.2397514647715]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.0453193260905, 55.2397514647715]}>
          <Popup>Mahmoud lives here, come over for a cup of coffee :)</Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map
