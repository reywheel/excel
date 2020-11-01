import './scss/index.scss';
import {Excel} from '@/Components/Excel/Excel';
import {Header} from '@/Components/Header/Header';
import {Toolbar} from '@/Components/Toolbar/Toolbar';
import {Formula} from '@/Components/Formula/Formula';
import {Table} from '@/Components/Table/Table';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();
