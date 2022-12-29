import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import Cite from 'citation-js';

// import {parseBibFile} from 'bibtex';
import publicationsFile from '!!raw-loader!./publications.bib';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  BibItem,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
  TimelineSubItem,
} from './dataDef';

/**
 * BibliographyItem
 */

const publicationData = Cite(publicationsFile, ['-i']);

export const publications: BibItem[] = [];

Object.keys(publicationData.data).forEach((key, index) => {
  const citation = Cite(publicationData.data[key]);
  const doi = citation.data[0].DOI;
  const html_string = citation.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US',
  });

  let doi_url = 'https://doi.org/' + citation.data[0].DOI;

  if (doi == undefined) {
    doi_url = '';
  }

  publications[index] = {
    doi_url: doi_url,
    content: html_string,
  };
});

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Nick's CV",
  description: "Nick Fournier's Curriculum Vitae, and more!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'Curriculum Vitae',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Nick Fournier, PhD`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Engineer, planner, and transportist.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Welcome to my digital Curriculum Vitae and landing page for my miscellaneous projects.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  I have a PhD in transportation engineering, a masters in regional planning, and am passionate about all things transportation in my personal life.
  
  I currently work as a travel modeling consultant, which is a fancy way of saying data scientist and python engineer for travel demand simulation models. I also moonlight as an academic, publishing papers when I can find the time.

  `,
  aboutItems: [
    {label: 'Location', text: 'San Francisco Bay Area, California', Icon: MapIcon},
    {
      label: 'Interests',
      text: 'Sailing, woodworking, gardening, electronics, black & white film development, beer brewing...',
      Icon: SparklesIcon,
    },
    {label: 'Study', text: 'University of Massachusetts Amherst', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Resource System Group, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'R',
        level: 9,
      },
      {
        name: 'SQL',
        level: 4,
      },
    ],
  },
  {
    name: 'Interfacing',
    skills: [
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'TypeScript',
        level: 2,
      },
      {
        name: 'Markdown / Rmarkdown',
        level: 9,
      },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Statistical analysis and testing',
        level: 6,
      },
      {
        name: 'Simulation and analytical modeling',
        level: 6,
      },
      {
        name: 'Predictive modeling (discrete choice, regression, time series forecasting, etc.)',
        level: 7,
      },
    ],
  },
  {
    name: 'Domain expertise',
    skills: [
      {
        name: 'Transportation economics',
        level: 6,
      },
      {
        name: 'Bicycle safety & driver behavior',
        level: 6,
      },
      {
        name: 'Network modeling',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const default_subcontent: TimelineSubItem[] = [
  {
    title: '',
    content: <p></p>,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2019',
    location: 'Univiersity of Massachusetts Amherst',
    title: 'PhD Transportation Engineering',
    // content: <p>Dissertation: Equity and efficiency in multimodal transportation systems</p>,
  },
  {
    date: '2018',
    location: 'University of Massachusetts Amherst',
    title: 'MS Transportation Engineering',
  },
  {
    date: '2017',
    location: 'University of Massachusetts Amherst',
    title: 'Masters of Regional Planning',
  },
  {
    date: '2011',
    location: 'University of Massachusetts Amherst',
    title: 'BS Civil Engineering',
  },
];

export const awards: TimelineItem[] = [
  {
    date: '2019',
    location: '',
    title: 'Eno Fellow – Eno Future Leadership Conference',
  },
  {
    date: '2015-2018',
    location: '',
    title: 'Dwight D. Eisenhower Transportation Fellowship',
  },
  {
    date: '2016-2017',
    location: '',
    title: 'UTC Outstanding Student of the Year',
  },
  {
    date: '2015',
    location: '',
    title: 'Daniel B. Fambro Student Paper Award – ITE',
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'Resource Systems Group, inc.',
    title: 'Consultant',
    content: [
      {
        title: 'blah',
        content: <p>blah</p>,
      },
    ],
  },
  {
    date: '2020 - 2022',
    location: 'University of California, Berkeley',
    title: 'Post-Doctoral Scholar',
    content: [
      {
        title: 'Exploring the operational and equity benefits of a pre-pay dynamic tolling system [lead researcher]',
        content: (
          <p>
            R-based simulation exploring revenue and traffic flow with “futures” market toll pricing. Utilized Kernel
            Density Estimation to smooth traffic flow data for forecasting and pricing models. Funded by California
            State SB1.
          </p>
        ),
      },
      {
        title: 'Bicycle network connectivity evaluation methodology [lead researcher]',
        content: (
          <p>
            Bicycle network connectivity performance measure using graph theory and user preference criteria (e.g.,
            route choice models). Funded by Caltrans.
          </p>
        ),
      },
      {
        title: 'Erroneous High Occupancy Vehicle (HOV) Degradation',
        content: (
          <p>
            {' '}
            Python program to detect operational but mislabeled traffic sensors using machine learning (e.g., k-Nearest
            Neighbor, Logistic Regression, Random Forest, Support Vector Machines, Local Outlier Factor, Isolation
            Forest, and Robust Covariance Anomaly Detection). Funded by Caltrans.
          </p>
        ),
      },
      {
        title: 'Bicycle level of service measures for the CA State Highway System',
        content: (
          <p>
            UX research/human factors study to determine bicycle infrastructure preferences using virtual reality
            bicycle simulator. Estimated using a Latent Class Choice Model capable of accounting for user heterogeneity.
            Results to align with “Complete Cities” project. Funded by Caltrans.
          </p>
        ),
      },
    ],
  },
  {
    date: '2019 - 2020',
    location: 'Monash University',
    title: 'Research Fellow',
    content: [
      {
        title: 'Public Transport Research Group',
        content: (
          <p>
            Advised team of 19 doctoral students conducting industry partnered research in public transportation
            engineering, planning, policy analysis, and economics.
          </p>
        ),
      },
    ],
  },
  {
    date: '2014 - 2019',
    location: 'University of Massachusetts Amherst',
    title: 'Graduate Research Assistant',
    content: [
      {
        title: 'Sustainable Travel Incentives with Prediction, Optimization and Personalization',
        content: (
          <p>
            Data fusion population synthesizer using novel combinatorial optimization algorithm in R and C++
            (demographics, OD-matrices, household/vehicle association, etc.). Mixed-methods include Bayesian Networks,
            Markov chain Monte Carlo simulation, iterative fitting (matrix raking), robust regression, LASSO/Ridge
            regularization, and gradient descent. Used as input in larger agent-based discrete choice and simulation to
            lower energy consumption with user incentives. Joint MIT project sponsored by ARPA-energy.
          </p>
        ),
      },
    ],
  },
  {
    date: '2014 - 2015',
    location: 'Volpe National Transportation Center',
    title: 'Community Planning Intern',
    // content: (
    //   <p>
    //     Describe work, special projects, notable achievements, what technologies you have been working with, and
    //     anything else that would be useful for an employer to know.
    //   </p>
    // ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'nichfournier at gmail.com',
      href: 'mailto:nichfournier@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'San Francisco Bay Area, California',
      href: 'https://www.google.com/maps/place/San+Francisco,+CA/@37.804289,-122.4904803,11z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'nick-fournier',
      href: 'https://github.com/nick-fournier',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nick-fournier'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nick-fournier/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
