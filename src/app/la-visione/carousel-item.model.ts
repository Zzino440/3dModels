export interface CarouselItemModel {
  imageUrl: string;
  title: string;
  description: string;
}

export const CAROUSEL_DATA: CarouselItemModel[] = [
  {
    imageUrl: 'assets/img/landing-page/la-visione/la-visione-img-01.png',
    title: 'Un edificio iconico',
    description: 'Una nuova icona per la città, riconoscibile nello skyline milanese per i principi architettonici e per la responsabilità sociale che si esprime, diventando motore della rigenerazione urbana del quartiere grazie ad un sistema di spazi urbani accessibili e permeabili, capaci di trasformare l’area in un nuovo polo, attrattivo e fruibile verso il suo interno.'
  },
  {
    imageUrl: 'assets/img/landing-page/la-visione/la-visione-img-02.png',
    title: 'La centralità dell’uomo',
    description: 'L’uomo al centro dell’architettura, spazi aperti e luminosi scanditi da una continuità materica tra esterno ed interno che valorizza la luce naturale, percorsi intuitivi e spazi di sosta progettati per una migliore percezione per chi lavora.'
  },
  {
    imageUrl: 'assets/img/landing-page/la-visione/la-visione-img-03.png',
    title: 'Sostenibilità ambientale',
    description: 'La sfida di progettare l’edificio più green promuovendo il LEED®, con l’obiettivo ambizioso di ottenere la certificazione Platinum. Impianti sostenibili per una qualità dell’aria interna eccellente e la riduzione dell’impatto ambientale e acustico.'
  },
  {
    imageUrl: 'assets/img/landing-page/la-visione/la-visione-img-04.png',
    title: 'Socialità e benessere',
    description: 'La convinzione che un progetto di valore possa migliorare e incentivare la vita delle persone. Aree dedicate alla socialità ed al benessere grazie a spazi aperti e flessibili, ampi e luminosi atrii, terrazze e giardini pensili, una varietà di servizi.'
  }
];
