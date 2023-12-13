export interface Carousel2ItemModel {
  imageUrl: string;
  date: string;
  year?: number;
  title: string;
  description: string;
  description2: string;
}

export const CAROUSEL_2_DATA: Carousel2ItemModel[] = [
  {
    imageUrl: 'assets/img/tappe-progetto/tappe-progetto-img-01.png',
    date: '24 marzo',
    year: 2022,
    title: 'Lancio del Concorso di Progettazione',
    description: 'ARIA S.p.A., lancia il concorso di progettazione per la nuova sede di Palazzo Sistema, articolato in due fasi successive:',
    description2: 'la prima, finalizzata a selezionare le 5 migliori proposte progettuali fra quelle pervenute; la seconda, finalizzata ad individuare la proposta vincitrice tra quelle selezionate nel primo step.'
  },
  {
    imageUrl: 'assets/img/tappe-progetto/tappe-progetto-img-02.png',
    date: '15 novembre',
    year: 2022,
    title: 'Termine dei lavori della Commissione giudicatrice',
    description: 'Il 15 novembre, in seduta pubblica, l\'annuncio del vincitore del concorso, al quale hanno partecipato 28 concorrenti,',
    description2: '5 dei quali sono stati ammessi al secondo grado.'
  },
  // Aggiungi questa parte all'array esistente CAROUSEL_DATA
  {
    imageUrl: 'assets/img/tappe-progetto/tappe-progetto-img-03.png',
    date: 'Gennaio',
    year: 2023,
    title: 'Avvio della progettazione preliminare',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
  },
  {
    imageUrl: 'assets/img/tappe-progetto/tappe-progetto-img-04.png',
    date: 'Giugno',
    year: 2023,
    title: 'Consegna della progettazione preliminare',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
  },
  {
    imageUrl: 'assets/img/tappe-progetto/tappe-progetto-img-05.png',
    date: 'Luglio',
    year: 2023,
    title: 'Approvazione della progettazione preliminare',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
  },
  {
    imageUrl: 'assets/img/tappe-progetto/tappe-progetto-img-06.png',
    date: 'TBD',
    title: 'Avvio della progettazione preliminare',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
  }

];
