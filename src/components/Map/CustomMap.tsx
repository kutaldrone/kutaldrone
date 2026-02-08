"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import Link from "next/link";
import { useEffect, useState } from "react";

// Trakya Center Coordinates (Approximately Lüleburgaz area to cover all 3 provinces)
const CENTER_COORDS: [number, number] = [41.2, 27.3];
const ZOOM_LEVEL = 8;

const LOCATIONS = [
    { id: "tekirdag", name: "Süleymanpaşa", lat: 40.9781, lng: 27.5110, slug: "tekirdag-drone-cekimi" },
    { id: "corlu", name: "Çorlu", lat: 41.1609, lng: 27.7973, slug: "corlu-drone-cekimi" },
    { id: "cerkezkoy", name: "Çerkezköy", lat: 41.2855, lng: 27.9995, slug: "cerkezkoy-drone" },
    { id: "edirne", name: "Edirne", lat: 41.6771, lng: 26.5557, slug: "edirne-drone-cekimi" },
    { id: "kirklareli", name: "Kırklareli", lat: 41.7355, lng: 27.2244, slug: "kirklareli-drone-cekimi" },
    { id: "marmaraereglisi", name: "Marmaraereğlisi", lat: 40.9697, lng: 27.9555, slug: "marmaraereglisi-drone" },
    { id: "yeniciftlik", name: "Yeniçiftlik", lat: 40.9833, lng: 27.8333, slug: "yeniciftlik-drone" },
    { id: "malkara", name: "Malkara", lat: 40.8900, lng: 26.9000, slug: "malkara-drone" },
    // New Locations
    { id: "muratli", name: "Muratlı", lat: 41.1715, lng: 27.4735, slug: "muratli-drone" },
    { id: "hayrabolu", name: "Hayrabolu", lat: 41.2096, lng: 27.0544, slug: "hayrabolu-drone" },
    { id: "kapakli", name: "Kapaklı", lat: 41.3256, lng: 27.9621, slug: "kapakli-drone" },
    { id: "saray", name: "Saray", lat: 41.4508, lng: 27.9159, slug: "saray-drone" },
    { id: "kesan", name: "Keşan", lat: 40.8624, lng: 26.5415, slug: "kesan-drone" },
    { id: "uzunkopru", name: "Uzunköprü", lat: 41.2689, lng: 26.6386, slug: "uzunkopru-drone" },
    { id: "sarkoy", name: "Şarköy", lat: 40.6187, lng: 27.0866, slug: "sarkoy-drone" },
];

const customIcon = divIcon({
    className: "custom-pin",
    html: `<div class="relative flex items-center justify-center w-6 h-6">
             <div class="absolute w-full h-full bg-[#c5f536] rounded-full opacity-40 animate-ping"></div>
             <div class="absolute w-3 h-3 bg-[#c5f536] rounded-full shadow-[0_0_10px_#c5f536]"></div>
           </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

export default function CustomMap() {
    // Fix for Leaflet icon issues in Next.js (if not using custom divIcon)
    useEffect(() => {
        // Initialization if needed
    }, []);

    return (
        <MapContainer
            center={CENTER_COORDS}
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={false}
            className="w-full h-full bg-[#0a0c10]"
        >
            {/* Dark Mode CartoDB Tiles (Free & Nice) */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {LOCATIONS.map((loc) => (
                <Marker
                    key={loc.id}
                    position={[loc.lat, loc.lng]}
                    icon={customIcon}
                >
                    <Popup className="custom-popup" closeButton={false}>
                        <div className="p-2 min-w-[160px] text-center bg-[#0a0c10] rounded-lg border border-white/10">
                            <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-wide">{loc.name}</h3>
                            <Link
                                href={`/bolge/${loc.slug}`}
                                className="block w-full bg-[#c5f536] text-[#020305] text-xs py-2 rounded font-bold hover:bg-white transition-colors uppercase tracking-wider"
                            >
                                Hizmeti İncele
                            </Link>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
