function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
   return flag;
}



var yargs = require('yargs');
var n = yargs.argv.n;

if (typeof n === 'undefined'){
	console.log('Vui long nhap dung n');
} else {
	n = parseInt(n);
    var flag = kiem_tra_snt(n);

    if(!flag){
    	console.log('Khong phai so nguyen to');
    } else {
    	console.log('La so nguyen to');
    }

}
