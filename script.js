let currentLanguage = 'es';

const loadLanguage = (lang) => {
  fetch('./languages.json')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('logIn').innerText = data[lang].logIn;
      document.getElementById('presentation').innerText =
        data[lang].presentation;
      document.getElementById('presentation2').innerText =
        data[lang].presentation2;
      document.getElementById('tryIt').innerText = data[lang].tryIt;
      document.getElementById('question').innerText = data[lang].question;
      document.getElementById('enjoy').innerText = data[lang].enjoy;
      document.getElementById('enjoyText').innerText = data[lang].enjoyText;
      document.getElementById('enjoy2').innerText = data[lang].enjoy2;
      document.getElementById('enjoy2Text').innerText = data[lang].enjoy2Text;
      document.getElementById('download').innerText = data[lang].download;
      document.getElementById('downloadText').innerText =
        data[lang].downloadText;
      document.getElementById('faq').innerText = data[lang].faq;
      document.getElementById('question2').innerText = data[lang].question2;
      document.getElementById('question2Text').innerText =
        data[lang].question2Text;
      document.getElementById('question3').innerText = data[lang].question3;
      document.getElementById('question3Text').innerText =
        data[lang].question3Text;
      document.getElementById('question4').innerText = data[lang].question4;
      document.getElementById('question4Text').innerText =
        data[lang].question4Text;
      document.getElementById('question5').innerText = data[lang].question5;
      document.getElementById('question5Text').innerText =
        data[lang].question5Text;
      document.getElementById('question6').innerText = data[lang].question6;
      document.getElementById('question6Text').innerText =
        data[lang].question6Text;
      document.getElementById('tryIt2').innerText = data[lang].tryIt2;
      document.getElementById('question7').innerText = data[lang].question7;
      document.getElementById('item1').innerText = data[lang].item1;
      document.getElementById('item2').innerText = data[lang].item2;
      document.getElementById('item3').innerText = data[lang].item3;
      document.getElementById('item4').innerText = data[lang].item4;
      document.getElementById('item5').innerText = data[lang].item5;
      document.getElementById('item6').innerText = data[lang].item6;
      document.getElementById('item7').innerText = data[lang].item7;
      document.getElementById('item8').innerText = data[lang].item8;
      document.getElementById('item9').innerText = data[lang].item9;
      document.getElementById('item10').innerText = data[lang].item10;
      document.getElementById('item11').innerText = data[lang].item11;
      document.getElementById('item12').innerText = data[lang].item12;
      document.getElementById('item13').innerText = data[lang].item13;
      document.getElementById('item14').innerText = data[lang].item14;
      document.getElementById('item15').innerText = data[lang].item15;
      document.getElementById('item16').innerText = data[lang].item16;
      document.getElementById('item17').innerText = data[lang].item17;
    })
    .catch((error) => console.error('Error loading language file:', error));
};

loadLanguage(currentLanguage);

document.getElementById('language-selector').addEventListener('change', (e) => {
  currentLanguage = e.target.value;
  loadLanguage(currentLanguage);
});
