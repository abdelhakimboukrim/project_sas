const prompt =require("prompt-sync")()

const candidats=[{ cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Indépendant", age: 40,
    electeurs: [] },
     { cin: "CD234567", nom: "El Amrani", prenom: "Fatima Zahra", partiPolitique: "RNI", age: 35,
    electeurs: ["AB123456", "GH456789", "KL678901"] },
{ cin: "MN789012", nom: "Tazi", prenom: "Hamza", partiPolitique: "USFP", age: 60,
    electeurs: ["QR901234"] },{ cin: "QR901234", nom: "Berrada", prenom: "Omar", partiPolitique: "RNI", age: 38,
    electeurs: ["CD234567", "EF345678", "MN789012"] }
]
    ;

  //1step
function addcandidat(condidatlist){
let con={cin:"", nom:"", prenom:"",partiPolitique:"",age:0,electeurs:[]}
for(let key in con ){
   if(key==="electeurs")  continue;

   if (key==="age"){
     let given=0
     let typeofgiven=false;
     while(!typeofgiven || given<18){
        console.log("Age format est pas valide ! ");
        given=Number(prompt(`donner le ${key} de condidat :`))
        typeofgiven=Number.isInteger(given)
        }
    
     con[key]=given;
     continue;
   }

con[key]=prompt(`donner le ${key} de condidat :`);
}
condidatlist.push(con)
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
function afficher(condidatlist){
for(cond of condidatlist){
    console.log(`# Candidat ${condidatlist.indexOf(cond)+1}:`)
    
    
    for (key in cond){
        if(key==="electeurs") {
            console.log(key,":",cond[key].length) 
            continue }
        console.log(key,":",cond[key])}
    
    console.log("--------------")
}

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


function filterbyparty(condidatsList){
  party=prompt("Donner le nom de patie :")
  let ckecker=false
  arr=[]
for(let index in condidatsList){
  if (condidatsList[index].partiPolitique===party){
    arr.push(condidatsList[index])
    ckecker=true}}
    afficher(arr)
if(!ckecker) console.log("party does not exist")

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
            }
        
        }
            console.log("candida doesnt exist ") 
            
            }
    
}       

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
      case "a" :{
        let  givenage=Number(prompt("donner neuvou age "))
        let typeofage=false
        while(!typeofage) {
            console.log("age is invalid pleease use numbers")
            givenage=Number(prompt("donner neuvou age "))
            typeofage=Number.isInteger(givenage)
            
        }    
            
            condidatlist[i].age=givenage  
             break;

       }
       case "p" :{ 
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

//7.search
function search(condidatlist){
    let checker=false
    let given =prompt("donner la nom de le condida");
    let index=0
    for( i in  condidatlist){
        if(condidatlist[i].nom ==given){
           checker= true;
            index=i;
            console.log("condidats found")
            console.log(condidatlist[i])
            ;}
       
    }if(checker===false){ console.log("nom ne pa trouve ")}

}



function deleteCON(condidatlist){

    let checker=false
    let givencin=prompt("give the CIN of the condidat u want to delete ");
    
    let index=0
    for(let ind in  condidatlist){
        if(condidatlist[ind].cin==givencin){
           checker= true;
            index=ind;
            console.log(index)
            break;
        }

    }
   
    console.log("hihih",condidatlist)
    if(checker){
        
       for(let i=index; i<condidatlist.length-1;i++){
         condidatlist[i] = condidatlist[i+1]
        }
        
        condidatlist.pop()
       
       console.log("CONDIDATE ETER SUPREME .")}
    
    else console.log("CONDIDATE N'EXEST PAS!!")

}
//8
function stats(condidatList){

    console.log(`
          ====   stats menu    ======
        1.total nombre de votes et candidats
        2.top condidats
        3.nombre des candidas des parties 
        0.retouner `)
    choice=parseInt(prompt('=='))
    switch(choice){
        case 1: 
            console.log("nombre des condidats est :",totalCON(condidatList)) ;
            console.log("nombre des votes total est :",totalvotes(condidatList));
            stats(condidatList);
            break;
        case 2:
            console.log("les top 3 sont :" );
            poduim(condidatList);
            stats(condidatList);
            break;
        case 3:
        
        case 0:
            break;

        default:
            console.log("choix invalid ")
            stats(condidatList)


    }

}
// total condidats
function totalCON(condidatlist){
    return condidatlist.length;
}
function totalvotes(condidatlist){
    total=0
    for(index in condidatlist){
        total=total+(condidatlist[index].electeurs.length)

    }return total
}

function poduim(condidatlist){
    arr=[]
    sortbyvotes(condidatlist);
    for(let i=0 ; i<3;i++){
        arr.push(condidatlist[i]);
    }
    afficher(arr)

}








// menu
function Menu(condidatlist){
    console.log(`
      ==== GENTION DES ELECTIONS - MENU ====  
        1.Ajoute un candidat.
        2.Ajoute plusieurs candidats.
        3.afficher la list ;
        4.afficher par partie politique .
        5.voter a un candidad.
        6.Modifier un candidas.
        7.supprimer un candidas.
        8.rechercher un condidat par nom.
        9.stastics  de elections.
        0.Quitter
      ======================================`)

    choice=parseInt(prompt(""))
    switch(choice){
        case 1 : 
              addcandidat(condidatlist);
              Menu(condidatlist)
              break;
         
        case 2: 
              addMultiCon(condidatlist);
              Menu(condidatlist)
              break;
        case 3:
            sortbyvotes(condidatlist);
            afficher(condidatlist)
            Menu(condidatlist)
            break;
        case 4:
            filterbyparty(condidatlist);
            Menu(condidatlist);
            break;
        case 5:
            voting(condidatlist);
            Menu(condidatlist);
            break;
        case 6:
            edit(condidatlist);
            Menu(condidatlist);
            break;
        case 7:
            deleteCON(condidatlist);
            Menu(condidatlist);
            break;
        case 8:
            search(condidatlist);
            Menu(condidatlist);
            break;
        case 9:
            stats(condidatlist)
            Menu(condidatlist)
            break;
        case 0:
            break;
        default :
            console.log("choix invalid");
            Menu(condidatlist)
            



    }
    




}
Menu(candidats)
