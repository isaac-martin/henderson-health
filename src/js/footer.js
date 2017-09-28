// ==== FOOTER ==== //

// A simple wrapper for all your custom jQuery that belongs in the footer
(function($){
  $(function(){
    // Example integration: JavaScript-based human-readable timestamps
    if ($.timeago) {
      $('time').timeago();
    }
  })

  $.fn.joinForms = function() {
      var formdata
      $('#join').submit(function(e){
        e.preventDefault();
        formdata = $( this ).serializeArray();
        formdata = JSON.stringify(formdata);
        $().joinajaxForm();
      });

      $.fn.joinajaxForm = function(){
        jQuery.ajax({
            type: "POST",
            url: templateDir+'/join-mail.php',
            data: { data : formdata },

          success: function(data) {
            $( '#join').fadeOut(1000, function() {
              $('#join-message').append( "<h3>Thanks, a member of staff will be in touch shortly</h3>" );
              $('#join-message').fadeIn(1000);
            });
            console.log(formdata);
          },

          fail: function(data) {
              $('#join-message').append( "<h3>There Was an Issue With your Form Submission - Please try again</h3>" );
              $('#join-message').fadeIn(1000);
          }
        });
    }
   }

   $.fn.contactForms = function() {
       var formdata
       $('#contact').submit(function(e){
         e.preventDefault();
         formdata = $( this ).serializeArray();
         formdata = JSON.stringify(formdata);
         $().contactajaxForm();
       });

       $.fn.contactajaxForm = function(){
         jQuery.ajax({
             type: "POST",
             url: templateDir+'/contact-mail.php',
             data: { data : formdata },

           success: function(data) {
             $('#contact').fadeOut(1000, function() {
               $('#contact-message').append( "<h3>Thanks, a member of staff will be in touch shortly</h3>" );
               $('#contact-message').fadeIn(1000);
             });
             console.log(formdata);
           },

           fail: function(data) {
               $('#contact-message').append( "<h3>There Was an Issue With your Form Submission - Please try again</h3>" );
               $('#contact-message').fadeIn(1000);
           }
         });
     }
    }

   $().joinForms();
   $().contactForms();
  })(jQuery, this);
