import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/';
import mapIcon from '../../utils/mapIcon';

import api from "../../services/api";

interface Orphanage {
  name: string;
  about: string;
  instructions: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanage/${params.id}`).then(response => {
      setOrphanage(response.data);
    })
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <S.OrphanagePage id="page-orphanage">
      <Sidebar />

      <S.Main>
        <S.OrphanageDetails>
          <S.Img src={orphanage.images[activeImageIndex].url} alt="Lar das meninas" />

          <S.Images>
            {orphanage.images.map((image, index) => (
              <S.ButtonImage
                key={`${image.url}-${image.id}`}
                type="button"
                isActive={index === activeImageIndex}
                onClick={() => setActiveImageIndex(index)}
              >
                <S.Image src={image.url} alt="Lar das meninas" />
              </S.ButtonImage>
            ))}
          </S.Images >
          
          <S.OrphanageDetailsContent>
            <S.Name>{orphanage.name}</S.Name>
            <S.About>{orphanage.about}</S.About>

            <S.MapContainer className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <S.FooterMapContainer>
                <S.MapContainerLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </S.MapContainerLink>
              </S.FooterMapContainer>
            </S.MapContainer>

            <S.Hr />

            <S.VisitInstructions>Instruções para visita</S.VisitInstructions>
            <p>{orphanage.instructions}</p>

            <S.OpenDetails>
              <S.Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </S.Hour>
              <S.OpenOnWeekends isOpen={orphanage.open_on_weekends} >
                <FiInfo size={32} color={ orphanage.open_on_weekends ? '#39CC83' : '#FF669D' } />
                {!orphanage.open_on_weekends && 'Não '}
                Atendemos <br />
                fim de semana
              </S.OpenOnWeekends>
            </S.OpenDetails>

            {/**
            <S.ContentButton type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </S.ContentButton>
            */}
          </S.OrphanageDetailsContent>
        </S.OrphanageDetails>
      </S.Main>
    </S.OrphanagePage>
  );
}