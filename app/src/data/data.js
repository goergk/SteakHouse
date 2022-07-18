import { ReactComponent as Koszyk } from '../assets/icons/koszyk.svg';
import { ReactComponent as MojeKonto } from '../assets/icons/mojekonto.svg';
import { ReactComponent as Zamow } from '../assets/icons/zamow_ikona.svg';
import Logo_1 from '../assets/images/Bitmap-4.png';
import Logo_2 from '../assets/images/e.png';
import Logo_3 from '../assets/images/Bitmap.png';
import Logo_4 from '../assets/images/Bitmap-2.png';
import Logo_5 from '../assets/images/Bitmap-3.png';


export const Items_data = ['Steaks', 'Burgers', 'French Fries', 'Drinks', 'Gdzie dowozimy?', 'Kontakt'];

export const Options_data = [
  {
    icon: <MojeKonto />,
    text: 'Moje konto',
    selected: false,
  },
  {
    icon: <Koszyk />,
    text: 'Koszyk',
    selected: false,
  },
  {
    icon: <Zamow />,
    text: 'Zamów',
    selected: true,
  }
];

export const Logos_data = [
  {
    src: Logo_1,
    alt: 'Pyszne.pl',
  },
  {
    src: Logo_2,
    alt: 'DeliGoo',
  },
  {
    src: Logo_3,
    alt: 'Glovo',
  },
  {
    src: Logo_4,
    alt: 'UberEats',
  },
  {
    src: Logo_5,
    alt: 'BoltFood',
  }
]