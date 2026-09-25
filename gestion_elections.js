const prompt =require("prompt-sync")()

const candidats=[];
function addcandidat(condidatlist){
let con={cin:"", nom:"", prenom:"",partiPolitique:"",age:0,electeurs:[]}
for(key in con ){
if(key==="electeurs")  continue;
con[key]=prompt(`donner le ${key} de condidat `);
}
condidatlist.push(con)
return condidatlist

}

addcandidat(candidats)
console.log(candidats)