function myFunction() {
    var stringCCCD = "";
    stringCCCD = document.getElementById('TextBox1').value;
    for (var i = 0; i <= stringCCCD.length; i++) {
        var charCode = stringCCCD.charCodeAt(i);
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            document.getElementById('Label1').innerHTML = 'Vui lòng chỉ nhập dữ liệu kiểu số. Ví dụ: 0,1,2';
            return false
        }
    }
    if (stringCCCD.length !== 9 && stringCCCD.length !== 12) {
        document.getElementById('Label1').innerHTML = 'Vui lòng chỉ nhập 9 hoặc 12 ký tự.';
        return false
    }
    else {
        document.getElementById('Label1').innerHTML = "";
        return true
    }
}