var percent = 0;

function progress(value) {
    percent += value;
    (percent >=100) ? alert('yje 100 alo') : $('#progressbar').width(percent + value + "%");
    
}