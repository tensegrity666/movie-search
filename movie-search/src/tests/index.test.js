/* eslint-disable no-undef */


const assert = require('assert');
const modifyRequestText = require('../helpers');
// function modifyRequestText(request) {
//   return request
//     .toLowerCase()
//     .replace(/\s+/g, ' ')
//     .trim().split(' ')
//     .join('+');
// }


describe('Запрос', () => {
  describe('Возвращает модифицированный запрос:', () => {
    it('возвращает переданное слово без изменений', () => {
      assert.equal(modifyRequestText('qwerty'), 'qwerty');
    });
    it('возвращает несколько слов с разделителем +', () => {
      assert.equal(modifyRequestText('qwerty qwerty'), 'qwerty+qwerty');
    });
    it('приводит все символы к нижнему регистру', () => {
      assert.equal(modifyRequestText('QweRty'), 'qwerty');
    });
    it('yдаляет лишние пробелы в запросе', () => {
      assert.equal(modifyRequestText(' qwe rt   wer ew eee   ee '), 'qwe+rt+wer+ew+eee+ee');
    });
  });
});
