// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBtf__nZVEGozgphoTJhnHyj5M0lC8_NgI",
   authDomain: "project2-46bc8.firebaseapp.com",
   databaseURL: "https://project2-46bc8-default-rtdb.firebaseio.com",
   projectId: "project2-46bc8",
   storageBucket: "project2-46bc8.appspot.com",
   messagingSenderId: "964402296230",
   appId: "1:964402296230:web:a5e97590b34981c3e94b67",
   measurementId: "G-53D199GBR0"
 };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 
// Khai báo biến
  var motor1on = document.getElementById("motor1on");
  var motor1off = document.getElementById("motor1off");

  motor1on.onclick =function()
   {
    //document.getElementById("motor1").src ="asset/img/motoron.gif"
    //firebase.database().ref("/").update({"/Motor/Motor1":1});
    firebase.database().ref("/").update({"/Mode/mode1":1});
    motor1on.style.backgroundColor = 'salmon';
    motor1on.style.color = 'white';
    motor1off.style.backgroundColor = 'white';
    motor1off.style.color = 'black';

   }
 motor1off.onclick =function(){
    document.getElementById("motor1").src ="asset/img/motoroff.png"
    firebase.database().ref("/").update({"/Motor/Motor1":0});
    firebase.database().ref("/").update({"/Mode/mode1":0});
    motor1off.style.backgroundColor = 'salmon';
    motor1off.style.color = 'white';
    motor1on.style.backgroundColor = 'white';
    motor1on.style.color = 'black';
 }
  var motor2on = document.getElementById("motor2on");
  var motor2off = document.getElementById("motor2off");

 motor2on.onclick =function(){
    //document.getElementById("motor2").src ="asset/img/motoron.gif"
    //firebase.database().ref("/").update({"/Motor/Motor2":1});
    firebase.database().ref("/").update({"/Mode/mode2":1});
    motor2on.style.backgroundColor = 'salmon';
    motor2on.style.color = 'white';
    motor2off.style.backgroundColor = 'white';
    motor2off.style.color = 'black';

 }
 motor2off.onclick =function(){
    document.getElementById("motor2").src ="asset/img/motoroff.png"
    firebase.database().ref("/").update({"/Motor/Motor2":0});
    firebase.database().ref("/").update({"/Mode/mode2":0});
    motor2off.style.backgroundColor = 'salmon';
    motor2off.style.color = 'white';
    motor2on.style.backgroundColor = 'white';
    motor2on.style.color = 'black';

 }

 var airon = document.getElementById("airon");
 var airoff = document.getElementById("airoff");

airon.onclick =function(){
   //document.getElementById("air").src ="asset/img/air.gif"
   firebase.database().ref("/").update({"/PIR/security":1});
    airon.style.backgroundColor = 'salmon';
    airon.style.color = 'white';
    airoff.style.backgroundColor = 'white';
    airoff.style.color = 'black';
}
airoff.onclick =function(){
   document.getElementById("air").src ="asset/img/alarmoff.png"
   firebase.database().ref("/").update({"/PIR/security":0});
   firebase.database().ref("/").update({"/PIR/Canh Bao":0});
   airoff.style.backgroundColor = 'salmon';
   airoff.style.color = 'white';
   airon.style.backgroundColor = 'white';
   airon.style.color = 'black';
}

var nhietDo = document.getElementById('tem');
var dbRef = firebase.database().ref().child('/Sensor/temperature');
var doAm = document.getElementById('humi');
var dbRef2 = firebase.database().ref().child('/Sensor/soil');
var anhsang = document.getElementById('light');
var dbRef3 = firebase.database().ref().child('/Sensor/light');
dbRef.on('value', snap => nhietDo.innerText = snap.val() +"℃");
dbRef2.on('value', snap => doAm.innerText = snap.val()+"%");
dbRef3.on('value', snap => anhsang.innerText = snap.val());

var slider1 = document.getElementById("temprange");
var output1 = document.getElementById("tempsetup");
output1.innerHTML = slider1.value;
slider1.oninput = function()
{
  output1.innerHTML = this.value;
  firebase.database().ref("/SETUP/Setup_temp").set(parseInt(this.value));
}

firebase.database().ref("/SETUP/Setup_temp").on("value", function(snapshot) {
   output1.innerHTML = snapshot.val();
 });

 

var slider2 = document.getElementById("soilrange");
var output2 = document.getElementById("soilsetup");
output2.innerHTML = slider2.value;
slider2.oninput = function()
{
  output2.innerHTML = this.value;
  firebase.database().ref("/SETUP/Setup_soil").set(parseInt(this.value));

}

firebase.database().ref("/SETUP/Setup_soil").on("value", function(snapshot) {
   output2.innerHTML = snapshot.val();
 });

// Cập nhập dữ liệu từ firebase
 firebase.database().ref("/Motor/Motor1").on("value",function(snapshot) {
    var L1 = snapshot.val();
   

    if(L1==0)
    {
        document.getElementById("motor1").src ="asset/img/motoroff.png"

    }
    else
    {
        document.getElementById("motor1").src ="asset/img/motoron.gif"

    }
    
 })

 firebase.database().ref("/Motor/Motor2").on("value",function(snapshot1) {
    var L2 = snapshot1.val();
    if(L2==0)
    {
        document.getElementById("motor2").src ="asset/img/motoroff.png"

    }
    else
    {
        document.getElementById("motor2").src ="asset/img/motoron.gif"

    }
 })

 firebase.database().ref("/PIR/Canh Bao").on("value",function(snapshot2) {
    var L3 = snapshot2.val();
    if(L3==0)
    {
        document.getElementById("air").src ="asset/img/alarmoff.png"

    }
    else
    {
        document.getElementById("air").src ="asset/img/alarmon.gif"

    }
 })