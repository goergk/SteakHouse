import { ReactComponent as Koszyk } from '../assets/icons/koszyk.svg';
import { ReactComponent as MojeKonto } from '../assets/icons/mojekonto.svg';
import { ReactComponent as Zamow } from '../assets/icons/zamow_ikona.svg';

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