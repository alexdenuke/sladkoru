// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// const logoIcon = "/logo-icon.svg";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const LeafletMap = () => {
//   const customIcon = new L.Icon({
//     iconUrl: logoIcon, // Указываем путь к изображению
//     iconSize: [32, 32], // Размер иконки
//     iconAnchor: [16, 32], // Точка привязки иконки (центр нижней части)
//     popupAnchor: [0, -32], // Точка привязки для всплывающего окна
//   });
//   return (
//     <MapContainer
//       center={[55.728073106284846, 37.580419378629365]}
//       zoom={16}
//       style={{ height: "100%", width: "100%" }}
//       attributionControl={false}
//       scrollWheelZoom={false}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="Sladkoru"
//       />
//       <Marker
//         position={[55.728073106284846, 37.580419378629365]}
//         icon={customIcon}
//       >
//         <Popup>Магазин Турецких сладостей и самовывоз .</Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default LeafletMap;
