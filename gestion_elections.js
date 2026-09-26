const prompt =require("prompt-sync")()

const candidats=[];
function addcandidat(condidatlist){
let con={cin:"", nom:"", prenom:"",partiPolitique:"",age:0,electeurs:[]}
for(key in con ){
if(key==="electeurs")  continue;

if (key==="age"){
    let given=0
    let typeofgiven=false;
    while(!typeofgiven){
        given=Number(prompt(`donner le ${key} de condidat :`))
        typeofgiven=Number.isInteger(given)
        console.log("is not valid, use numbers ")}
    
    con[key]=given;
    continue;
}

con[key]=prompt(`donner le ${key} de condidat :`);
}
condidatlist.push(con)
return condidatlist

}

function addMultiCon(condidatlist){
    let x=parseInt(prompt("donner le nombre des condidas tu vo ajouter"));
    for(let i=0;i<x;i++){
       console.log("le condidats N°:",i+1)
        addcandidat(condidatlist)
    }
}
addMultiCon(candidats)
console.log(candidats)

function afficher(){
for(cond of candidats){
    console.log(`# Candidat ${candidats.indexOf(cond)+1}:`)
    
    
    for (key in cond){
        if(key==="electeurs") {
            console.log(key,":",cond[key].length) 
            continue }
        console.log(key,":",cond[key])}
    
    console.log("--------------")
}

}


function voting(condidatlist){

    let voterCIN=prompt("donner votre CIN")
     let vote =prompt("donner la CIN de condidat tu vous voter for ")
    for(cond of condidatlist){
       
        if (cond.electeurs.includes(voterCIN)){
            console.log( `« Vous avez déjà voté et vous n'avez pas le droit 
                de modifier votre vote ni de voter à nouveau »`)
                break;
            }
        
        
        else{
            console.log("that a valid CIN");
            if( vote===cond.cin){
                cond.electeurs.push(voterCIN);
                console.log("voting done succsisfully");
                break ;
              }}
        
        console.log("the candidat doesnt exist")
             }
                         }
    


    

