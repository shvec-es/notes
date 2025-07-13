// 3.2 - створюємо функцію збереження тасок в ЛС і для діставання їх з ЛС
export const saveInLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLS = key => {
  return JSON.parse(localStorage.getItem(key)) || null;
};
