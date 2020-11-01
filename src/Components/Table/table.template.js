const CODES = {
  'A': 65,
  'Z': 90,
};

function createRow(rowNumber) {
  const colsNumber = CODES.Z - CODES.A + 1;
  const cols = [];

  for (let i = 0; i < colsNumber; i++) {
    if (rowNumber === 0) {
      const letter = String.fromCharCode(CODES.A + i);
      cols.push(createColumn(letter));
    } else {
      cols.push(createCell());
    }
  }

  return `
    <div class="row">
      <div class="row-info">${rowNumber === 0 ? '' : rowNumber}</div>
      <div class="row-data">
        ${cols.join('')}
      </div>
    </div>
  `;
}

function createColumn(letter = '') {
  return `
    <div class="column">${letter}</div>
  `;
}

function createCell() {
  return `
    <div class="cell" contenteditable=""></div>
  `;
}

export function createTable(rowsNumber = 15) {
  const rows = [];

  for (let i = 0; i < rowsNumber + 1; i++) {
    rows.push(createRow(i));
  }

  return `
    ${rows.join('')}
  `;
}
