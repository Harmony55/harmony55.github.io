function checkCode() {
    const d1 = document.getElementById('digit1').value;
    const d2 = document.getElementById('digit2').value;
    const d3 = document.getElementById('digit3').value;
    const fullCode = d1 + d2 + d3;
    if(fullCode === "102"){
        document.getElementById('step-1').classList.add('hidden');
        document.getElementById('step-2').classList.remove('hidden');
        document.getElementById('label-prevalence').style.display = 'block';
    }
}

function checkPrevalence() {
    const val = document.getElementById('input-prevalence').value.trim();
    const validAnswers = ["0,5", "0.005", "0,5%"];
    if (validAnswers.includes(val)) {
        window.location.href = "./VideoSpecil.mp4";
    }
    else{
        window.location.href = "./wrongturn.mp3";
    }
}