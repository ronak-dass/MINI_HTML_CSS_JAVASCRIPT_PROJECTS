let btn = document.querySelector('#btn')
let vowelResult = document.querySelector('#vowelResult')
let lengthResult = document.querySelector('#lengthResult')


btn.addEventListener('click', () => {
    let text = document.querySelector('#textArea').value
    
        const vowel = ['a','e','i','o','u']
        let vowelCount = 0;
        text = text.toLowerCase()
        
        for(let i = 0; i < text.length; i++){
            let char = text.charAt(i)
    
            if(vowel.includes(char)){
                vowelCount++;
                // console.log(char)
            }
        }

        vowelResult.innerHTML = "Total Vowel : " + vowelCount
        lengthResult.style.fontWeight = "700";
        lengthResult.innerHTML = "Total Length : " + text.length
})