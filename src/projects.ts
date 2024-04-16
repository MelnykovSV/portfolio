import cryptoPreview from './assets/projects/Crypto/cryptoPreview.jpg';
import cryptoPreview2x from './assets/projects/Crypto/cryptoPreview@2x.jpg';
import cryptoPreviewWebp from './assets/projects/Crypto/cryptoPreview.webp';
import cryptoPreview2xWebp from './assets/projects/Crypto/cryptoPreview@2x.webp';

import elnPreview from './assets/projects/Eln/elnPreview.jpg';
import elnPreview2x from './assets/projects/Eln/elnPreview@2x.jpg';
import elnPreviewWebp from './assets/projects/Eln/elnPreview.webp';
import elnPreview2xWebp from './assets/projects/Eln/elnPreview@2x.webp';

import gooseTrackPreview from './assets/projects/GooseTrack/gooseTrackPreview.jpg';
import gooseTrackPreview2x from './assets/projects/GooseTrack/gooseTrackPreview@2x.jpg';
import gooseTrackPreviewWebp from './assets/projects/GooseTrack/gooseTrackPreview.webp';
import gooseTrackPreview2xWebp from './assets/projects/GooseTrack/gooseTrackPreview@2x.webp';

import bookShelfPreview from './assets/projects/BookShelf/bookShelfPreview.jpg';
import bookShelfPreview2x from './assets/projects/BookShelf/bookShelfPreview@2x.jpg';
import bookShelfPreviewWebp from './assets/projects/BookShelf/bookShelfPreview.webp';
import bookShelfPreview2xWebp from './assets/projects/BookShelf/bookShelfPreview@2x.webp';

const projects = [
  {
    name: 'Crypto',
    description:
      'This application provides a platform for users to practice cryptocurrency trading with simulated funds. It offers various features to enhance your trading experience, including a comprehensive coin table, detailed single-coin information, dynamic cryptoPreview page with charts and trading capabilities, transaction history table, and a user information page.',
    image: {
      jpg: cryptoPreview,
      jpg2x: cryptoPreview2x,
      webp: cryptoPreviewWebp,
      webp2x: cryptoPreview2xWebp,
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Material UI', 'Emotion'],
    links: {
      github: 'https://github.com/MelnykovSV/crypto',
      // moreInfo: '',
      livePage: 'https://crypto-seven-lemon.vercel.app/',
    },
  },
  {
    name: 'Electronic laboratory Notebook',
    description:
      'Сhemical syntheses management application (frontend and backend). Notable features include the ability to save experiment spectra in PDF format, identification of the last successfully completed stage for the progress tracking, automated calculation of reagent quantities needed for the entire synthesis or a single experiment, and yield calculation.',
    image: {
      jpg: elnPreview,
      jpg2x: elnPreview2x,
      webp: elnPreviewWebp,
      webp2x: elnPreview2xWebp,
    },
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux',
      'Material UI',
      'Emotion',
    ],
    links: {
      github: 'https://github.com/MelnykovSV/eln-app-frontend',
      githubBack: 'https://github.com/MelnykovSV/eln-app-web-server',
      // moreInfo: '',
      livePage: 'https://eln-app-frontend.vercel.app/',
    },
  },
  {
    name: 'GooseTrack',
    description:
      'This task manager app features an integrated calendar for efficient task scheduling on a daily and monthly basis. Users can gain insights into task completion rates and productivity trends through a dedicated statistics page. The inclusion of a user-friendly review system allows for valuable feedback, prominently displayed on the main page. Additionally, personalized user profiles facilitate easy information updates and customization.',
    image: {
      jpg: gooseTrackPreview,
      jpg2x: gooseTrackPreview2x,
      webp: gooseTrackPreviewWebp,
      webp2x: gooseTrackPreview2xWebp,
    },
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux',
      'Material UI',
      'Emotion',
    ],
    links: {
      github: 'https://github.com/MelnykovSV/GooseTrack',
      githubBack: 'https://github.com/MelnykovSV/GooseTrack-backend',
      // moreInfo: '',
      livePage: 'https://melnykovsv.github.io/GooseTrack/',
    },
  },
  {
    name: 'BookShelf',
    description:
      'Interactive book website connected to Swagger backend API, you can add and remove books from the shopping list. Bookshelf also features Firebase authentication, you can register, log in, and log out. Adapted to any device starting with 320 px screen width, implemented light and dark themes.',
    image: {
      jpg: bookShelfPreview,
      jpg2x: bookShelfPreview2x,
      webp: bookShelfPreviewWebp,
      webp2x: bookShelfPreview2xWebp,
    },
    technologies: ['JavaScript', 'HTML', 'SCSS'],
    links: {
      github: 'https://github.com/MelnykovSV/js-project-books-t5',
      // moreInfo: '',
      livePage: 'https://melnykovsv.github.io/js-project-books-t5/',
    },
  },
];

export default projects;
