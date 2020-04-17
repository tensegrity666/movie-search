const CATEGORIES = {
  isMain: false,
  isActionA: false,
  isActionB: false,
  isActionC: false,
  isAdjective: false,
  isAnimalA: false,
  isAnimalB: false,
  isClothes: false,
  isEmotions: false,
};

export const CURRENT_STATE = {
  isMainPage: false,
  currentCategory: 0,
};

export function dataToProcess(numberOfCategory) {
  switch (numberOfCategory) {
    case 1:
      CATEGORIES.isActionA = true;
      break;
    case 2:
      CATEGORIES.isActionB = true;
      break;
    case 3:
      CATEGORIES.isActionC = true;
      break;
    case 4:
      CATEGORIES.isAdjective = true;
      break;
    case 5:
      CATEGORIES.isAnimalA = true;
      break;
    case 6:
      CATEGORIES.isAnimalB = true;
      break;
    case 7:
      CATEGORIES.isClothes = true;
      break;
    case 8:
      CATEGORIES.isEmotions = true;
      break;
    default:
      CURRENT_STATE.isMainPage = true;
      CATEGORIES.isMain = true;
      break;
  }

  console.log(CATEGORIES, CURRENT_STATE);
}
