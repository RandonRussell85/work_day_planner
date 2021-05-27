var textAreaContent = {

};

 var header = document.header;
 const m = moment();
 var m2 = m.format("dddd, MMMM Do")
 var m3 = m.format("YYYY")

    $(currentDay).text(m2)
    $(currentYear).text(m3)

 $(".info").each(function(){
     var currentTime = moment().hours();

     var currentHour = Number(currentTime);
     console.log(currentHour)

     var pId = $(this).children("div").children("p").attr("id");
     var taskTime = Number(pId);
     console.log("task time as a number", taskTime);

     if(taskTime < currentHour){
        $(this).children("textarea").addClass('past')
      }
    
      else if(taskTime === currentHour) {
        $(this).children("textarea").addClass('present')
      }

      else{
        $(this).children("textarea").addClass('future')}
    
     });

   
 $(".saveBtn").on("click", function() {
    var targetTextArea = $(this).parent('.info').children('textarea')
   
    var textAreaId =  targetTextArea.attr('id')
    
    localStorage.setItem("task-"+ textAreaId ,targetTextArea.val());
     
  });
  
   function getLocalStorage() {
  if (localStorage.getItem("textarea")){
    textAreaContent = JSON.parse(localStorage.getItem('textarea'));
    }
   }
  
    function setTextContent (){
      for (const [key, value] of Object.entries(textAreaContent)){
        $("#"+key).val(value);
      }
    }
  
  $(document).ready(function(){
    getLocalStorage();
    setTextContent();
  })
 