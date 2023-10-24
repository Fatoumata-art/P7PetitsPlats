 //search input select option
 const optionList = document.querySelector('list_option li');
 const optiontSearches = document.querySelectorAll('#optionSearch');
 optiontSearches.forEach(optiontSearch =>
   
   optiontSearch.addEventListener('keyup', function(){
     let filter, li, i, textValue;
     filter = optiontSearch.value.toUpperCase();
     li = optionList.getElementsByTagName(li);
     for( i = 0; i < li.length; i++){
       liCount = li[i];
       textValue = liCount.textContent;
       if(textValue.toUpperCase().indexOf(filter) > -1){
         li[i].style.display = '';
       }else{
         li[i].style.display = 'none';
       }
     }
   })
   )