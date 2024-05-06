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
    path: 'Crypto',
    description:
      'This application provides a platform for users to practice cryptocurrency trading with simulated funds. It offers various features to enhance your trading experience, including a comprehensive coin table, detailed single-coin information, dynamic portfolio page with charts and trading capabilities, transaction history table, and a user information page.',
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
    pages: [
      {
        name: 'Profile page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'The User Profile page provides users with essential account details, including their username, email address, and phone number, all of which can be easily updated. Additionally, the page offers users the opportunity to personalize their profiles visually through the avatar feature. Users can upload their own avatar image, instantly updating their profile to reflect their individuality.',
      },
      {
        name: 'Transactions history page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'The Transaction History page offers users a comprehensive overview of their past transactions, including buys, sells, and exchanges, through a detailed transaction history table. Users have the ability to filter transactions by type, status, or date, enhancing their ability to track and analyze their transaction history efficiently. Additionally, the page provides a convenient search function, allowing users to quickly locate specific transactions involving a particular cryptocurrency. With these features, users can easily review their transaction history, monitor account activity, and gain insights into their trading behavior within the platform.',
      },
      {
        name: 'Portfolio page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          "The portfolio page showcases a comprehensive list of cryptocurrencies within the user's portfolio, accompanied by a pie chart displaying asset distribution and a chart illustrating the total portfolio value over time. Additionally, users can engage in simulated trading activities, allowing them to buy, sell, or exchange cryptocurrencies with virtual funds. This interactive environment provides users with a hands-on experience to practice trading strategies and analyze portfolio performance in real-time.",
      },
      {
        name: 'Coins page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'Explore a comprehensive table of cryptocurrency coins, featuring vital information like price, market cap, and percentage change. The table is equipped with pagination for seamless navigation and includes a sparkline visualization for each currency, offering a quick glance at price trends. Users can access detailed information about a specific currency by clicking on it within the table or utilizing the search bar to select it. This functionality ensures easy exploration and in-depth analysis of individual cryptocurrencies within the platform.',
      },
      {
        name: 'Single coin page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'Gain access to in-depth information for each cryptocurrency, encompassing historical price data, market trends, and pertinent details. Historical price data is presented in both regular chart and candle chart formats, offering diverse visualization options for analyzing price movements over time. Additionally, users can delve into general information about the currency, including its background, technology, team, and other relevant insights. This comprehensive resource equips users with the tools needed to conduct thorough research and make informed decisions when navigating the cryptocurrency market.',
      },
    ],
  },
  {
    name: 'Electronic Laboratory Notebook',
    path: 'ELN',
    description:
      'Сhemical syntheses management application. Notable features include the ability to save experiment spectra in PDF format, identification of the last successfully completed stage for the progress tracking, automated calculation of reagent quantities needed for the entire synthesis or a single experiment, and yield calculation.',
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
    pages: [
      {
        name: 'Scheme previews page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'Get a quick snapshot of your synthesis projects with essential information, including starting compound, final product, number of stages, creation date, last update date, mass, and price. Sort and arrange your schemes based on creation date, last update date, mass, and price for efficient data management.',
      },
      {
        name: 'New scheme page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          "Effortlessly initiate synthesis projects with user-friendly 'New Scheme' form. Break down each project into stages, navigating seamlessly between tabs. Enter crucial data for each stage, including reaction conditions such as solvent, yield, time, temperature, and methodic. The 'Scheme Preview' feature updates in real-time, providing an immediate overview of your project's progress and details. Streamline your synthesis endeavors with precision and ease.",
      },
      {
        name: 'Scheme previews Page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'Get a quick snapshot of your synthesis projects with essential information, including starting compound, final product, number of stages, creation date, last update date, mass, and price.Sort and arrange your schemes based on creation date, last update date, mass, and price for efficient data management.',
      },
      {
        name: 'Single scheme Page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'Seamlessly navigate between different stages of your synthesis, enabling easy tracking of progress and input of essential data. Identify the last successfully completed stage outlined in green for quick progress tracking.',
      },
      {
        name: 'Single scheme page (reagents tab)',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'In the dedicated "Reagents Calculation" tab, you can access information about every reagent required for your synthesis. This feature not only provides details on the reagents but also calculates the masses required to achieve the desired mass of the target compound when yields are provided for each stage.',
      },
      {
        name: 'Single stage Page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'Effortlessly switch between experiments within a stage using a simple select feature for optimal condition optimization. Input precise experiment conditions in each tab for reproducible results. Automatic yield calculations based on product mass and purity eliminate manual work. Manage up to four reagents per experiment with automatic mass calculations. The experiment spectra panel allows dynamic management, including PDF uploads, comments, viewing, downloading, and deletion.',
      },
    ],
  },
  {
    name: 'GooseTrack',
    path: 'GooseTrack',
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

    pages: [
      {
        name: 'Profile page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'The User Profile page provides users with essential account details, including their username, email address, and phone number, all of which can be easily updated. Additionally, the page offers users the opportunity to personalize their profiles visually through the avatar feature. Users can upload their own avatar image, instantly updating their profile to reflect their individuality.',
      },
      {
        name: 'Calendar page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'Calendar offers users a streamlined way to manage their schedule. It presents all tasks, events, and appointments in a visually appealing layout, ensuring users have a clear overview of their commitments. With color-coded labels and intuitive navigation, users can easily distinguish between different types of activities and navigate their schedule effortlessly. The Calendar view provides a user-friendly experience, empowering users to stay organized and on track with their daily, weekly, or monthly plans.',
      },
      {
        name: 'Calendar page (day mode)',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'The day mode on the calendar provides a quick and convenient way to review your upcoming events and tasks for any selected day. With a glance, users can access all scheduled activities, ensuring they stay organized and prepared for the day ahead.',
      },
      {
        name: 'Single Scheme Page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          ' The Statistics page offers users a comprehensive overview of their productivity and task management trends, presenting insightful data through visually appealing charts. Users can analyze their productivity on a daily and monthly basis, as well as track progress across different task types, including tasks that are done, in progress, and yet to be completed. These charts provide valuable insights into user behavior and help them identify patterns, set goals, and optimize their workflow effectively.',
      },
    ],
  },
  {
    name: 'BookShelf',
    path: 'BookShelf',
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
    pages: [
      {
        name: 'Home page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'The Main Page of the interactive book website presents users with an array of book categories for exploration. Users can effortlessly add or remove books from their shopping list directly from this page. With a responsive design optimized for various devices and the option to switch between light and dark themes, users can enjoy a personalized browsing experience tailored to their preferences.',
      },
      {
        name: 'Shopping list page',
        image: {
          jpg: elnPreview,
          jpg2x: elnPreview2x,
          webp: elnPreviewWebp,
          webp2x: elnPreview2xWebp,
        },
        description:
          'The Shopping List Page offers users a streamlined view of their selected books for purchase, complete with pagination for easy navigation. Users can efficiently manage their shopping list by removing items as needed. The page ensures a seamless user experience across devices, allowing users to shop with convenience and ease.',
      },
    ],
  },
];

export default projects;
