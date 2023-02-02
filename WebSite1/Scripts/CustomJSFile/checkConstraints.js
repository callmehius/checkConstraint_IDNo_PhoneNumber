//Main method
function checkConstraintsFunction() {
    const resultCheckIDNo = checkIDNo();
    const resultCheckPhoneNumber = checkPhoneNumber();
    if (resultCheckIDNo != "") {
        document.getElementById('alertLableIdNo').innerHTML = resultCheckIDNo;
        return false
    }
    else if (resultCheckPhoneNumber != "") {
        document.getElementById('alertPhoneNumber').innerHTML = resultCheckIDNo;
        return false
    }
    else {
        return true
    }
    
    /*checkPhoneNumber();*/
}
//Hàm kiểm tra ràng buộc căn cước công dân 
function checkIDNo() {
    //tạo biến câu thông báo
    var stringAlert = "";
    //tạo biến rỗng chứa giá trị của CCCD
    var stringCCCD = "";
    //gán giá trị CCCD cho biến
    stringCCCD = document.getElementById('idNoTextBox').value;
    //tách các ký tự trong chuỗi kiểm tra xem có chứa ký tự kiểu chữ hay không
    for (var i = 0; i <= stringCCCD.length; i++) {
        var charCode = stringCCCD.charCodeAt(i);
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            /*document.getElementById('alertLableIdNo').innerHTML = 'Vui lòng chỉ nhập dữ liệu kiểu số. Ví dụ: 0,1,2';*/
            return stringAlert = 'Vui lòng chỉ nhập dữ liệu kiểu số. Ví dụ: 0,1,2'
        }
    }
    //Kiểm tra em chuỗi đã đạt 9 hoặc 12 ký tự hay chưa
    if (stringCCCD.length !== 9 && stringCCCD.length !== 12) {
        /*ocument.getElementById('alertLableIdNo').innerHTML = 'Vui lòng chỉ nhập 9 hoặc 12 ký tự.';*/
        return stringAlert = 'Vui lòng chỉ nhập 9 hoặc 12 ký tự.'
    }
    else {
        /*document.getElementById('alertLableIdNo').innerHTML = "";*/
        return stringAlert=""
    }
}
//Hàm kiểm tra ràng buộc số điện thoại
function checkPhoneNumber() {
    //tạo biến rỗng chứa giá trị của số điện thoại
    var stringPhoneNumber = "";
    //gán giá trị CCCD cho biến
    stringPhoneNumber = document.getElementById('phoneNumberTextBox').value;
    //tách các ký tự trong chuỗi kiểm tra xem có chứa ký tự kiểu chữ hay không
    for (var i = 0; i <= stringPhoneNumber.length; i++) {
        var charCode = stringPhoneNumber.charCodeAt(i);
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            document.getElementById('alertPhoneNumber').innerHTML = 'Vui lòng chỉ nhập dữ liệu kiểu số. Ví dụ: 0,1,2';
            return false
        }
    }
    //Kiểm tra em chuỗi đã đạt 9 hoặc 12 ký tự hay chưa
    if (stringPhoneNumber.length !== 10) {
        document.getElementById('alertPhoneNumber').innerHTML = 'Vui lòng chỉ nhập 10 ký tự.';
        return false
    }
    else {
        document.getElementById('alertPhoneNumber').innerHTML = "";
        return true
    }
}