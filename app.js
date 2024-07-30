
var arrayList = [];
arrayList = JSON.parse(localStorage.getItem('FoodPandaForm'))
function submit(){
    var Uname = document.getElementById('name').value
    var Fname = document.getElementById('fname').value
    var cnic = document.getElementById('cnic').value
    var mobile_no = document.getElementById('mobNo').value
    var pass = document.getElementById('pass').value
    var conpass = document.getElementById('conPass').value

    if(Uname == " " || Fname == " " || cnic == " " || mobile_no == " " || pass == " " || conpass == " "){
        
        alert("Please Fill All the Records")
    }
    else{
        if(pass == conpass){
            var obj = 
            {
                Uname : Uname,
                Fname : Fname,
                cnic : cnic,
                mobile_no : mobile_no,
                pass : pass,
                conpass : conpass
        }
        if(!Array.isArray(arrayList)){
            arrayList = [];
        }
    
        arrayList.push(obj)
        localStorage.setItem("FoodPandaForm",JSON.stringify(arrayList))
        alert("welcome!")
        }
        else{
            alert("Please enter a matching password")
        }
    }  
}

function logIn(){
    var getUname = document.getElementById('name').value
    var getUpass = document.getElementById('pass').value
    var getFromLocalStorage = JSON.parse(localStorage.getItem("FoodPandaForm"))
    if(getUname == " " || getUpass == " "){
        alert("Please Fill the Records")
    }
    else{
        if(getUname == getFromLocalStorage.Uname && getUpass == getFromLocalStorage.pass){
            document.getElementById('userData').innerHTML = getUname;
            alert("!Welcom")
        }
        else{
            alert("plase Enter a Correct userName and Password")
        }
    } 
}

var arrayListOfRes = [];
arrayListOfRes = JSON.parse(localStorage.getItem('ResForm'))
function resSubmit(){
    var Uname = document.getElementById('name').value
    var Rname = document.getElementById('Rname').value
    var cnic = document.getElementById('cnic').value
    var mobile_no = document.getElementById('mobNo').value
    var pass = document.getElementById('pass').value
    var conpass = document.getElementById('conPass').value
    if(Uname == " " || Rname == " " || cnic == " " || mobile_no == " " || pass == " " || conpass == " "){
        alert("Please Fill All the Records")
    }
    else{
        if(pass == conpass){
            var obj = 
            {
                Uname : Uname,
                Rname : Rname,
                cnic : cnic,
                mobile_no : mobile_no,
                pass : pass,
                conpass : conpass
        }
        if(!Array.isArray(arrayListOfRes)){
            arrayListOfRes = [];
        }
    
        arrayListOfRes.push(obj)
        localStorage.setItem("ResForm",JSON.stringify(arrayListOfRes))
        nameOfRes(Rname):
        alert("welcome!")
        }
        else{
            alert("Please enter a matching password")
        }
    } 
    
}

function logInBus(){
    var getUname = document.getElementById('name').value
    var getUpass = document.getElementById('pass').value
    var getFromLocalStorage = JSON.parse(localStorage.getItem("ResForm"))
    if(getUname == " " || getUpass == " "){

        alert("Please Fill the Records")
    }
    else{
        if(getUname == getFromLocalStorage.Uname && getUpass == getFromLocalStorage.pass){
            alert("!Welcom")
        }
        else{
            alert("plase Enter a Correct userName and Password")
        }
    } 
}

function nameOfRes(name){
    document.getElementById('reName').innerHTML = name;
}