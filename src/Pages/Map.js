import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

function Map() {
    const [pharmacies, setPharmacies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPharmacies, setFilteredPharmacies] = useState([]);
    const [searchResult, setSearchResult] = useState('');

    const pharmacyData = [
        { id: 1, name: 'SHAMSUU', street: 'STONE TOWN', lat: -6.162013, lng: 39.193179 },
        { id: 2, name: 'UNIVERSAL', street: 'STONE TOWN', lat: -6.164321, lng: 39.193842 },
        { id: 3, name: 'AFRAH', street: 'STONE TOWN', lat: -6.164744, lng: 39.195214 },
        { id: 4, name: 'MD', street: 'KWEREKWE', lat: -6.175693, lng: 39.227015 },
        { id: 5, name: 'UNGUJA PHARMACY', street: 'KWEREKWE', lat: -6.17473, lng: 39.223591 },
        { id: 6, name: 'HILMY', street: 'KWEREKWE', lat: -6.17473, lng: 39.223591 },
        { id: 7, name: 'AMINI', street: 'KWEREKWE', lat: -6.175693, lng: 39.227015 },
        { id: 8, name: 'IHSAAN', street: 'KWEREKWE', lat: -6.17473, lng: 39.223591 },
        { id: 9, name: 'LIFECARE', street: 'FUONI', lat: -6.189607, lng: 39.244157 },
        { id: 10, name: 'DUKA LA DAWA', street: 'KWEREKWE', lat: -6.175693, lng: 39.227015 },
        { id: 11, name: 'MKUBWA', street: 'MELI 5', lat: -6.189706, lng: 39.245883 },
        { id: 12, name: 'MAHAD V', street: 'FUONI', lat: -6.189607, lng: 39.244157 },
        { id: 13, name: 'MAHAD IV', street: 'MELI 4', lat: -6.184628, lng: 39.235377 },
        { id: 14, name: 'KWARARA', street: 'KWARARA', lat: -6.198096, lng: 39.24369 },
        { id: 15, name: 'MONASA', street: 'AMANI', lat: -6.164133, lng: 39.226812 },
        { id: 16, name: 'IKHLAS', street: 'KIBWENI', lat: -6.109573, lng: 39.215713 },
        { id: 17, name: 'SAH', street: 'KIBWENI', lat: -6.109573, lng: 39.215713 },
        { id: 18, name: 'HALAAL', street: 'REGEZAMWENDO', lat: -6.140103, lng: 39.253655 },
        { id: 19, name: 'HEXA', street: 'REGEZAMWENDO', lat: -6.140103, lng: 39.253655 },
        { id: 20, name: 'IBADA', street: 'REGEZAMWENDO', lat: -6.140103, lng: 39.253655 },
        { id: 21, name: 'KILIMAHEWA', street: 'KILIMAHEWA', lat: -6.122269, lng: 39.254818 },
        { id: 22, name: 'AFWA MED', street: 'KIANGA', lat: -6.117858, lng: 39.254243 },
        { id: 23, name: 'PHARMACY', street: 'KIANGA', lat: -6.117858, lng: 39.254243 },
        { id: 24, name: 'IBN SINA', street: 'KIANGA', lat: -6.122269, lng: 39.254818 },
        { id: 25, name: 'INSHIRAH', street: 'JUMBI', lat: -6.194919, lng: 39.302971 },
    ];

    const medicineData = [
        { name: 'Paracetamol', pharmacies: ['SHAMSUU', 'AFRAH', 'MD'] },
        { name: 'Amoxicillin', pharmacies: ['UNIVERSAL', 'HILMY'] },
        { name: 'Ibuprofen', pharmacies: ['LIFECARE', 'DUKA LA DAWA'] },
        { name: 'Ciprofloxacin', pharmacies: ['INSHIRAH', 'IBADA'] },
    ];

    useEffect(() => {
        setPharmacies(pharmacyData);
        setFilteredPharmacies(pharmacyData);
    }, []);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredPharmacies(pharmacyData);
            setSearchResult('');
            return;
        }

        const found = medicineData.find(med => med.name.toLowerCase() === searchTerm.toLowerCase());
        if (found) {
            const matched = pharmacyData.filter(pharm => found.pharmacies.includes(pharm.name));
            setFilteredPharmacies(matched);

            if (matched.length > 0) {
                const names = matched.map(pharm => pharm.name).join(', ');
                setSearchResult(`Available at: ${names}`);
            } else {
                setSearchResult('No pharmacy found with that medicine.');
            }
        } else {
            setFilteredPharmacies([]);
            setSearchResult('No pharmacy found with that medicine.');
        }
    };

    return (
        <div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for medicine e.g. Paracetamol"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {searchResult && (
                <div className="search-result">
                    {searchResult}
                </div>
            )}

            <MapContainer center={[-6.1659, 39.2026]} zoom={13} style={{ height: '90vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredPharmacies.map((pharmacy) => (
                    <Marker
                        key={pharmacy.id}
                        position={[pharmacy.lat, pharmacy.lng]}
                        icon={new L.Icon({
                            iconUrl: require('leaflet/dist/images/marker-icon.png'),
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                        })}
                    >
                        <Popup>
                            <h3>{pharmacy.name}</h3>
                            <p>Street: {pharmacy.street}</p>
                            <p>Location: {pharmacy.lat}, {pharmacy.lng}</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;
