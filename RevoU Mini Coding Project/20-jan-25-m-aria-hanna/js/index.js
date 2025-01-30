function calculateBmi(){
    let resultBmi = document.getElementById('result-bmi');
    let weight = document.getElementById('input-berat-badan').value;
    let age = document.getElementById('input-usia').value;
    let height = document.getElementById('input-tinggi-badan').value;


if (weight != '' && age != '' && height != ''){
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    resultBmi.textContent = bmi;
}else{
    alert('Mohon Isi Semua Data');
}
}