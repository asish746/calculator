function kumar(){
    var a =parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("second").value);
    var out=document.getElementById("operator").value; 
    if(out==='+'){
    document.getElementById('result').value=a+b;
    }
    else if(out==='-')
    document.getElementById('result').value=a-b;
    else if(out==='*')
    document.getElementById('result').value=a*b;
    else if(out==="/")
    document.getElementById('result').value=a/b;
    else if(out==='%')
    document.getElementById('result').value=a%b;
    
}