//Даны две строки строчных латинских символов: строка J и строка S. 
//Символы, входящие в строку J, — «драгоценности», входящие в строку S — «камни». 
//Нужно определить, какое количество символов из S одновременно являются «драгоценностями». 
//Проще говоря, нужно проверить, какое количество символов из S входит в J.

function getNumbersSymbols(str1, str2) {
    let counter = 0;
    for (let i = 0; i < str2.length; i++) {
      if (str1.includes(str2[i])) {
         counter++;
      }
      
    }
    return counter;
  }