import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/Components/Table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return createTable(40);
  }
}
