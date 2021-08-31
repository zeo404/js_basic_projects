var sunucudanDonen;

var baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        sunucudanDonen = JSON.parse(baglanti.responseText);
        getQuestion();
    }
    return sunucudanDonen;
};
baglanti.open("GET", "data.json", true);
baglanti.send();

const answerContainer = document.getElementsByClassName("question-container")[0];
const question = document.getElementById('question');
const options = document.getElementsByName('option');

const opContentA = document.getElementById('opContentA');
const opContentB = document.getElementById('opContentB');
const opContentC = document.getElementById('opContentC');
const opContentD = document.getElementById('opContentD');

const submitBtn = document.getElementById('submit');

let puan = 0;
let sira = 0;

function getQuestion(){
    clearOption();
    console.log(sunucudanDonen);

    let nextQuestion = sunucudanDonen.questions[sira];
    question.innerHTML = nextQuestion.question;
    opContentA.innerText = nextQuestion.optionA;
    opContentB.innerText = nextQuestion.optionB;
    opContentC.innerText = nextQuestion.optionC;
    opContentD.innerText = nextQuestion.optionD;
}
function clearOption(){
    options.forEach(option => option.checked = false);
}
function getOption(){
    let secim;
    options.forEach(option => {
        if(option.checked == true){
            secim = option.id;
        }
    })
    return secim;
}
submitBtn.addEventListener('click', () =>{
    const secilen = getOption();
    console.log(secilen);

    if(secilen){
        if(secilen === sunucudanDonen.questions[sira].answer){
            puan++;
        }
    }
    sira++;
    if(sira < sunucudanDonen.questions.length){
        getQuestion();
    }
    else{
        answerContainer.innerHTML = `<h2>Your score: ${puan}/${sunucudanDonen.questions.length}</h2>`
        submitBtn.setAttribute('onclick',"location.reload()");
    }
})