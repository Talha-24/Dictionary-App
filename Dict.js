let userInput = document.querySelector("input");
let button = document.querySelector("button");
let dictionaryData= document.querySelector("#meaning");
button.addEventListener("click",function(){
    inputdata=userInput.value;

    (async function apidata(params) {
        let URL=`https://api.dictionaryapi.dev/api/v2/entries/en/${inputdata}`;
        let raw= await fetch(URL);
        let usableData= await raw.json();
        console.log(usableData);

        let word= document.createElement("p");
        word.innerHTML = `Word : ${usableData[0].word}`;
        console.log(word);
        let meaning= document.createElement("p");
        let synonyms = document.createElement('p');
        let grammer = document.createElement('p');
        grammer.innerHTML=`<b>Grammer : </b> ${usableData[0].meanings[0].partOfSpeech}`;
        meaning.innerHTML= `<b>Meaning : </b> ${usableData[0].meanings[0].definitions[0].definition}`;
        synonyms.innerHTML=`<b>Synonym : </b> ${usableData[0].meanings[0].synonyms}`;
        dictionaryData.appendChild(word);
        word.after(grammer);
        grammer.after(meaning);
        meaning.after(synonyms);
        

       
        
    })();
})