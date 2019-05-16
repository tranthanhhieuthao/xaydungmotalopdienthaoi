
function Mobile() {
    this.Pin = 100;
    this.ststus = false;
    this.Msg ="";
    this.inbox =[];
    this.outbox =[];
    this.TinNhanDangSoanThao = function (msg) {
        this.Msg = msg;
    }
    this.LuuTinNhanTrongHopThuDen = function () {
        return this.outbox;
    }
    this.LưuTinNhanDaGui = function () {
        return this.inbox;
    }
    this.CheckStatus = function () {
        return this.ststus();
    }
    this.BatTatDienThoai = function () {
        if (this.ststus) alert("Turn On");
        else alert("Turn Off")
    }

    this.XacPinDienThoai = function () {
        if (this.Pin <0) alert("Máy can được xạc vui lòng chờ");
    }
    this.GuiTinNhanDenMobile = function (phone) {
        this.outbox.push(this.Msg);
        phone.inbox.push(this.Msg);
    }
}

let DienThoainokia = new Mobile();
let DienThoaiiphone = new Mobile();
document.getElementById("NangLuongPin1").innerHTML = DienThoainokia.Pin;
document.getElementById("NangLuongPin").innerHTML = DienThoaiiphone.Pin;
    function soantinmay1(text) {
        document.getElementById("TinNhanDangSoan1").innerHTML = text;
        DienThoainokia.TinNhanDangSoanThao(text);
    }
    function GuiTinNhan1() {
        DienThoainokia.GuiTinNhanDenMobile(DienThoaiiphone);
        document.getElementById("TinNhanDaNhan2").innerHTML = DienThoaiiphone.inbox.join("<br/>");
        DienThoainokia.Pin--;
        document.getElementById("NangLuongPin1").innerHTML = DienThoainokia.Pin;
    }
    function soantinmay2(text) {
        document.getElementById("TinNhanDangSoan2").innerHTML = text;
        DienThoainokia.TinNhanDangSoanThao(text);
    }
    function GuiTinNhan2() {
        DienThoaiiphone.GuiTinNhanDenMobile(DienThoainokia);
        document.getElementById("TinNhanDaNhan1").innerHTML = DienThoainokia.inbox.join("<br/>");
        DienThoaiiphone.Pin--;
        document.getElementById("NangLuongPin").innerHTML = DienThoaiiphone.Pin;
    }

function ClickSacDt1() {
    let refreshIntervalId = setInterval(function () {
        DienThoainokia.Pin++;
        document.getElementById("NangLuongPin1").innerHTML = DienThoainokia.Pin;
        if (DienThoainokia.Pin >= 100)
            clearInterval(refreshIntervalId);
    }, 1000);
}
function ClickSacDt2() {
    let refreshIntervalId1 = setInterval(function () {
        DienThoaiiphone.Pin++;
        document.getElementById("NangLuongPin").innerHTML = DienThoaiiphone.Pin;
        if (DienThoaiiphone.Pin >= 100)
            clearInterval(refreshIntervalId1);
    }, 1000);
}




