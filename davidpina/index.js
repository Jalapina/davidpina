$(document).ready(function(){
    
    var form_id = "contact-form";
    
        var data = {
            "access_token": "bc8723fc6gdlfyhufp4g2izv"
        };
    
        var sendButton = $("#" + form_id + " [name='send']");
    
        function send() {

            sendButton.val('Sending…');
            sendButton.prop('disabled',true);

            var subject = $("#" + form_id + " [name='subject']").val();
            var message = $("#" + form_id + " [name='message']").val();

            data['subject'] = subject;
            data['text'] = message;

            $.post('https://postmail.invotes.com/send',data, function(data){
                sendButton.val('Sent');
            });

            return false;

        }
    
        sendButton.on('click', send);
    
        var $form = $("#" + form_id);

        $form.submit(function( event ) {
            sendButton.prop('disabled',false);
            event.preventDefault();
            
        });
});