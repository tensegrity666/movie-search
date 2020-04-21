import cardList from './utils/CreateWrapper';

const toggler = document.querySelector('.toggler');

export default function scorePageToRender() {
  const listItem = document.createElement('table');
  listItem.classList.add('score');
  listItem.innerHTML = `<caption>Score</caption>
    <tr>
      <th>Word</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
    <tr>
      <td>Word</td><td>1</td><td>2</td><td>3</td>
    </tr>`;
  cardList.append(listItem);
  return cardList;
}
