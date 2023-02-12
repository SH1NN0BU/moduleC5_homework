// Значение констант не может быть изменено новым присваиванием, а также не может быть переопределено.
// Константы (const) подчиняются области видимости уровня блока так же, как переменные, объявленные с использованием ключевого слова let

const url_template = (p, l) => `https://picsum.photos/v2/list?page=${p}&limit=${l}`
const result_node = document.querySelector('.result');
const btn_node = document.querySelector('.btn-request');
const btn_clear_node = document.querySelector('.btn-clear');
const page_node = document.querySelector('.input-page');
const limit_node = document.querySelector('.input-limit');

//
let page_param = localStorage.getItem('Page_param');
let limit_param = localStorage.getItem('Limit_param');

if(page_param != null && limit_param != null)
{
    console.log("Use Page and Limit from local storage: ", page_param, limit_param) 
    page_node.value = Number(page_param)
    limit_node.value = Number(limit_param)
    runRequest(Number(page_param), Number(limit_param))
}

function useRequest(p,l) {
    return fetch(url_template(p, l))
    .then((response) => {
      // console.log("1: ", response)
      return response.json()
    })
    .then((json) => {
      // console.log("2: ", json)
      localStorage.setItem('Page_param', p);
      localStorage.setItem('Limit_param', l);
      displayResult(json)

    })
    .catch(() => { console.log('fetch error') });
};

