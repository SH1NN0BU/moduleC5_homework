// Значение констант не может быть изменено новым присваиванием, а также не может быть переопределено.
// Константы (const) подчиняются области видимости уровня блока так же, как переменные, объявленные с использованием ключевого слова let

const url_template = (p, l) => `https://picsum.photos/v2/list?page=${p}&limit=${l}`
const result_node = document.querySelector('.result');
const btn_node = document.querySelector('.btn-request');
const btn_clear_node = document.querySelector('.btn-clear');
const page_node = document.querySelector('.input-page');
const limit_node = document.querySelector('.input-limit');

//