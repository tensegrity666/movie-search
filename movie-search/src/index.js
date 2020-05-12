import './index.css';

import paginator from './components/Paginator';
import Presenter from './components/Presenter';

const presenter = new Presenter();
presenter.init(1234);

paginator.init();
