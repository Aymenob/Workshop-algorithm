
const tab=[5,3,8,7,9]
function cards_sorting(){
var temp=0
var n=tab.length
for (var j=0; j<n-1;j++){
    for (var i=0; i<n-1;i++){
        if(tab[i]>tab[i+1]){
            //swap(tab[i],tab[i+1])
            temp= tab[i];
            tab[i] = tab[i+1];
            tab[i+1] = temp;
           // solution 2 : [tab[i],tab[i+1]]=[tab[i+1],tab[i]]  
           
        }
   
}

}
return tab
}
console.log(cards_sorting())