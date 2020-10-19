import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

import './leaflet-styles.css';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMaps() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

  return (
    <S.MapPage id="page-map">
      <S.Aside>
        <header>
          <img src={mapMarkerImg} alt="Uma carinha feliz pintada de amarelo"/>
          <S.Title>Escolha um orfanato no mapa</S.Title>
          <S.Text>Muitas crianças estão esperando a sua visita :)</S.Text>
        </header>
        <S.Footer>
          <S.Strong>Rio de Janeiro</S.Strong>
          <span>Rio de Janeiro</span>
        </S.Footer>
      </S.Aside>
      <Map
        center={[-22.9092141,-43.1991939]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {orphanages.map(orphanage => (
          <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon}>
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>
      <S.CreateOrphanage to="/orphanages/create">
        <FiPlus size="32" color="#fff" />
      </S.CreateOrphanage >
    </S.MapPage>
  );
}

export default OrphanagesMaps;