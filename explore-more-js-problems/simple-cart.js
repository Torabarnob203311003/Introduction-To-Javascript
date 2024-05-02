// 
function OilPrice(dijelquantity, petrolquantity, octenquantity) {
    const djlprice = 114;
    const petrolprice = 130;
    const octenprice = 135;

    let totalCost = (djlprice * dijelquantity + petrolprice * petrolquantity + oc * octenquantity);

    return totalCost;
}

const needoils = [5, 8, 10];
const totalprice = OilPrice(needoils);
console.log(totalprice.toFixed(2));