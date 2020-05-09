import { wrapper } from './utils/createWrapper';
import onCategoryClick from './goToCategory';
import onButtonClick from './reverseCard';
import onCardClick from './speakWord';

export default function initEventListeners() {
  wrapper.addEventListener('click', [onCategoryClick, onButtonClick, onCardClick]);
}
