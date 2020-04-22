import { cardList } from './utils/CreateWrapper';
import data from './utils/data';

const toggler = document.querySelector('.toggler');

export default function scorePageToRender() {
  toggler.style.display = 'none';
  cardList.innerHTML = '';
  const listItem = document.createElement('table');
  listItem.classList.add('score');
  listItem.innerHTML = `<caption class='score__heading'>Score</caption>
    <tr class='score__row'>
      <th>Category</th>
      <th>Word</th>
      <th>Translate</th>
      <th>Right Answers</th>
      <th>Wrong Ansvers</th>
    </tr>`;

  for (let i = 1; i <= data.length; i += i) {
    const tableItem = document.createElement('tr');
    data[i].forEach((item) => {
      tableItem.innerHTML = `
      <td>${item.word}</td>
      <td>${item.translation}</td>
      <td></td>
      <td></td>`;
    });
    listItem.append(tableItem);
  }
  return cardList.append(listItem);
}
