 //search input select option
 const optionList = document.querySelector('list_option li');
 const optiontSearches = document.querySelectorAll('#optionSearch');
 optiontSearches.forEach(optiontSearch =>
   
   optiontSearch.addEventListener('keyup', function(){
     
    const filter = optiontSearch.value.toUpperCase();
    const  li = optionList.getElementsByTagName(li);
     for(let i = 0; i < li.length; i++){
       liCount = li[i];
       const textValue = liCount.textContent;
       if(textValue.toUpperCase().indexOf(filter) > -1){
         li[i].style.display = '';
       }else{
         li[i].style.display = 'none';
       }
     }
   })
   )