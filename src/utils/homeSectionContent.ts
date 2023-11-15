import gastronomia from '../assets/home/gastronomia.jpg'
import hospedagem from '../assets/home/hospedagem.jpg'
import atracoes from '../assets/home/atracoes.jpg'
import eatery1 from '../assets/eateries/el_touro.jpg'
import eatery2 from '../assets/eateries/paqueta.jpg'
import eatery3 from '../assets/eateries/malagueta.jpg'
import accomodation1 from '../assets/accomodations/mazzuco.jpg'
import accomodation2 from '../assets/accomodations/hotel_morro.jpg'
import accomodation3 from '../assets/accomodations/chale.jpg'
import attraction1 from '../assets/attractions/morro_dos_conventos.jpg'
import attraction2 from '../assets/attractions/cavera.jpg'
import attraction3 from '../assets/attractions/shopping.jpg'

export const attractionsHomeContent = {
  image: atracoes,
  imageHeading: 'ATRAÇÕES',
  infoHeading: 'Descubra pontos turísticos',
  infoParagraph:
    'A cidade possui atrações para quem busca se divertir e relaxar, além de lugares históricos que proporcionam aprendizado sobre a história e a cultura do município.',
  placesHeading: 'LUGARES PARA SE DIVERTIR',
  places: [
    { src: attraction1, alt: 'Morro dos Conventos' },
    { src: attraction2, alt: 'Caverá Country Park' },
    { src: attraction3, alt: 'Center Shopping Araranguá' }
  ],
  link: '/atracoes',
  color: '#009241'
}

export const eateriesHomeContent = {
  image: gastronomia,
  imageHeading: 'GASTRONOMIA',
  infoHeading: 'Experimente nossa comida',
  infoParagraph:
    'Aqui você encontra uma diversidade de opções gastronômicas, incluindo restaurantes, pizzarias, lanchonetes e muito mais.',
  placesHeading: 'LUGARES PARA COMER',
  places: [
    { src: eatery1, alt: 'Churrascaria El Touro' },
    { src: eatery2, alt: 'Restaurante Paquetá Grill' },
    { src: eatery3, alt: 'Pizzaria Malagueta' }
  ],
  link: '/gastronomia',
  color: '#FF9100'
}

export const accomodationsHomeContent = {
  image: hospedagem,
  imageHeading: 'HOSPEDAGEM',
  infoHeading: 'Conheça nossas opções de hospedagem',
  infoParagraph:
    'Araranguá conta com hotéis e pousadas no centro da cidade e também no Morro dos Conventos, próximo à praia.',
  placesHeading: 'LUGARES PARA FICAR',
  places: [
    { src: accomodation1, alt: 'Hotel Mazzuco' },
    { src: accomodation2, alt: 'Hotel Morro dos Conventos' },
    { src: accomodation3, alt: 'Chalé Lagoa da Serra' }
  ],
  link: '/hospedagens',
  color: '#2563EB'
}
