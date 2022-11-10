let catalogue = {
    1: ['Accent', 'Elantra', 'Santafy', 'Atoz', 'I10', 'Sonata'],
    2: ['Picanto', 'Optima', 'Cerato', 'Rio', 'Sorento', 'Soul'],
    3: ['Lancer', 'Mirage', 'Pajero', 'Galant'],
    4: ['Fujin', 'Escape', 'Mustang', 'Edge'],
    5: ['Camry', 'Corolla', 'Avallon', 'Prius'],
    6: ['Sunny', 'Altima', 'Joke', 'Tida']
}


let brand = document.querySelector('#sel-brand');
let series = document.querySelector("#sel-class");

// عند تغيير البراند
brand.addEventListener('change', function () {
    // نخزن رمز البراند
    let brandVal = this.value;

    // اجلب الاصناف التابعة للبراند من الاوبجكت
    let models = catalogue[brandVal];

    // تفريغ قائمة الاصناف
    series.innerHTML = "";

    // اعادة الخيار الاول للاصناف
    let opt = document.createElement('option');
    opt.text = 'Class/Series';
    series.appendChild(opt);

    // ادخال الاصناف التابعة للبراند المختار
    models.forEach(function (el, index) {
        opt = document.createElement('option');
        opt.text = el;
        opt.value = index + 1;

        series.appendChild(opt);
    });
});