import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './styles';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet'
import { useHistory } from 'react-router-dom';
import { FiPlus, FiX } from 'react-icons/fi';


import mapIcon from '../../utils/mapIcon';
import Sidebar from '../../components/Sidebar/';
import api from '../../services/api';


export default function CreateOrphanage() {
  const history = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({ latitude: lat, longitude: lng });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { latitude, longitude } = position;

    const data = new FormData();
    data.append('name', name);
    data.append('instructions', instructions);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);
    history.push('/app');
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.files) {
      return null;
    }
    const selectedImages = Array.from(event.target.files);

    setImages([ ...images, ...selectedImages ]);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages([ ...previewImages, ...selectedImagesPreview ]);

    event.target.value = '';
  }

  function handleRemoveImage(targetIndex: number) {
    const newImages = [ ...images ];
    newImages.splice(targetIndex, 1);
    setImages(newImages);

    const newPreviewImages = [ ...previewImages ];
    newPreviewImages.splice(targetIndex, 1);
    setPreviewImages(newPreviewImages);
  }

  return (
    <S.CreateOrphanagePage id="page-create-orphanage">
      <Sidebar />

      <S.Main>
        <S.Form className="create-orphanage-form" onSubmit={handleSubmit}>
          <S.DataSection>
            <S.TitleSection>Dados</S.TitleSection>

            <Map 
              center={[-22.9092141,-43.1991939]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {position.latitude !== 0 && (
                <Marker 
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <S.InputField className="input-block">
              <S.InputLabel htmlFor="name">Nome</S.InputLabel>
              <S.Input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </S.InputField>

            <S.InputField className="input-block">
              <S.InputLabel htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></S.InputLabel>
              <S.TextArea
                id="about"
                value={about}
                maxLength={300}
                onChange={event => setAbout(event.target.value)}
              />
            </S.InputField>

            <S.InputField className="input-block">
              <S.InputLabel htmlFor="images">Fotos</S.InputLabel>

              <S.ImageContainer className="images-container">
                {previewImages.map((image, key) => {
                  return (
                    <S.ImageUI key={image}>
                      <S.RemoveImage type="button" onClick={() => handleRemoveImage(key)} >
                        <FiX size={24} color="#ff669d" />
                      </S.RemoveImage>
                      <S.Image src={image} alt={name} />
                    </S.ImageUI>
                  )
                })}
                <S.NewImage htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </S.NewImage>
              </S.ImageContainer>
              <S.ImageInput multiple onChange={handleSelectImages} type="file" id="image[]" />

            </S.InputField>
          </S.DataSection>

          <S.VisitSection>
            <S.TitleSection>Visitação</S.TitleSection>

            <S.InputField className="input-block">
              <S.InputLabel htmlFor="instructions">Instruções</S.InputLabel>
              <S.TextArea 
                id="instructions"
                value={instructions}
                maxLength={300}
                onChange={event => setInstructions(event.target.value)}
              />
            </S.InputField>

            <S.InputField className="input-block">
              <S.InputLabel htmlFor="opening_hours">Horário de Funcionamento</S.InputLabel>
              <S.Input 
                id="opening_hours"
                value={opening_hours}
                maxLength={300}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </S.InputField>

            <S.InputField className="input-block">
              <S.InputLabel htmlFor="open_on_weekends">Atende fim de semana</S.InputLabel>

              <S.Select className="button-select">
                <S.SelectButton
                  type="button"
                  onClick={() => setOpenOnWeekends(true)}
                  isActive={open_on_weekends}
                >
                  Sim
                </S.SelectButton>
                <S.SelectButton 
                  type="button"
                  onClick={() => setOpenOnWeekends(false)}
                  isActive={!open_on_weekends}
                >
                  Não
                </S.SelectButton>
              </S.Select>
            </S.InputField>
          </S.VisitSection>

          <S.ConfirmButton className="confirm-button" type="submit">
            Confirmar
          </S.ConfirmButton>
        </S.Form>
      </S.Main>
    </S.CreateOrphanagePage>
  );
}
