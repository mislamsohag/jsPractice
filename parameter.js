function singaraAno(taka) {
    if (taka == 50) {
        var singaraPrice = 5;
        var singaraQuantity = taka / singaraPrice;
        return singaraQuantity;

    } else if (taka == 40) {
        var singaraPrice = 5;
        var singaraQuantity = taka / singaraPrice;
        return singaraQuantity;
    } else if (taka < 30 && taka > 20) {
        var singaraPrice = 5;
        var singaraQuantity = taka / singaraPrice;
        return singaraQuantity;
    } else {
        var singaraPrice = 5;
        var singaraQuantity = taka / singaraPrice;
        return singaraQuantity;
    }
};
var singara = singaraAno(8);
console.log('Ai nen', singara, 'ti Singara');