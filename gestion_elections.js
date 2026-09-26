const prompt =require("prompt-sync")()

const candidats=[{ cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Indépendant", age: 40,
    electeurs: [] },
     { cin: "CD234567", nom: "El Amrani", prenom: "Fatima Zahra", partiPolitique: "PJD", age: 35,
    electeurs: ["AB123456", "GH456789", "KL678901"] },
{ cin: "MN789012", nom: "Tazi", prenom: "Hamza", partiPolitique: "USFP", age: 60,
    electeurs: ["QR901234"] },];

  //1step
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
        console.log("age is not valid, use numbers ")}
    
    con[key]=given;
    continue;
}

con[key]=prompt(`donner le ${key} de condidat :`);
}
condidatlist.push(con)
return condidatlist

}
//step2
function addMultiCon(condidatlist){
    let x=parseInt(prompt("donner le nombre des condidas tu vo ajouter"));
    for(let i=0;i<x;i++){
       console.log("le condidats N°:",i+1)
        addcandidat(condidatlist)
    }
}

//step3
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

//step4
function voting(condidatlist){

    let voterCIN=prompt("donner votre CIN")
    let vote =prompt("donner la CIN de condidat tu vous voter for ")
    for(cond of condidatlist){
       
        if (cond["electeurs"].includes(voterCIN)){
            console.log( `« Vous avez déjà voté et vous n'avez pas le droit 
                de modifier votre vote ni de voter à nouveau »`)
                return;
            }
        
        
        else{
            
            if( vote===cond.cin){
                cond["electeurs"].push(voterCIN);
                console.log("voting done succsisfully");
                return ;
              }}
        
             }
            console.log("candida doesnt exist ") 
            
            }
    



    //step6 
 function deleteCON(condidatlist){

    let checker=false
    let givencin=prompt("donner la cin de le condida");
    
    let index=0
    for( i in  condidatlist){
        if(condidatlist[i].cin==givencin){
           checker= true;
            index=i;
            console.log(index)
            break;
        }

    }
    if(checker){
        
       for(let i=index; i<condidatlist.length-1;i++){
        
        condidatlist[i]=condidatlist[i+1]
        }
         condidatlist.pop()
       
       console.log("delete done sucssesfully")}
    
    else console.log("cin doesnt exist")

    

}



//sort by votes 
function sortbyvotes(condidatlist){
    
    for(let i=0;i<condidatlist.length;i++){
        for(let j=i;j<condidatlist.length-1;j++){
           if(condidatlist[j].electeurs.length<condidatlist[j+1].electeurs.length){
               let temp=condidatlist[j]
               condidatlist[j]=condidatlist[j+1]
               condidatlist[j+1]=temp
               
            }
         }
        
    
    }

}



//addMultiCon(candidats)
//voting(candidats)
//afficher(candidats)
console.log(candidats)
//deleteCON(candidats)

sortbyvotes(candidats)
console.log(candidats)


//edit 
function edit(condidatlist){
    
     let checker=false
    let givencin=prompt("donner la cin de le condida");
    
    let index=0
    for( i in  condidatlist){
        if(condidatlist[i].cin==givencin){
           checker= true;
            index=i;
            
            break;}
        }
    if(checker){
    choice=prompt("a, pour chnage age et p pour political")
    switch(choice){
      case a :{
        let  givenage=number(prompt("donner neuvou age ")) 
        let typeofage=number.isInteger(given)
        while(!typeofage) {console.log("age is invalid pleease use numbers")
            given=number(prompt("donner neuvou age "))}
        condidatlist[i].age=givenage
        break;

       }
       case p :{ 
        let givenP= prompt("donner nouveu party")
        condidatlist[i].partiPolitique =givenP
        break;
    }
    default :{
        console.log("please choose a or b only ") 
             edit(condidatlist)

    }

    }} 
    else console.log("condida doesnt exist")
}



