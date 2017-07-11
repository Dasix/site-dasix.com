$( document ).ready(function() {

    var contactFormId = "contactForm";
    var contactSubmitId = "btnContactSubmit";
    var contactForm;

    if($( "#" + contactFormId ).length > 0 ) {

        // Form validation settings ..
        $(  "#" + contactFormId ).validetta({

            showErrorMessages : true,
            display : "bubble",
            errorTemplateClass : "validetta-bubble",
            validClass : "validetta-valid",
            errorClass : "has-error",
            bubblePosition: "bottom",
            bubbleGapLeft: 5,
            bubbleGapTop: 10,

            realTime : true,
            validators: {},

            // Called when the form is valid
            onValid : function( event ){

                // Prevent the browser's default behavior
                // (submitting the form to the target)
                event.preventDefault();

                // Stop duplicate submissions ..
                disableContactForm();

                // Send the Email
                sendContactEmail();

            },

            // Called when the form is invalid
            onError : function(){

                enableContactForm();

            }

        });
    }

    /**
     * This helper function disables the contact form.
     *
     * @access private
     * @returns {void}
     */
    function disableContactForm() {
        $( "#" + contactFormId + " :input").prop("disabled", true);
        $( "#" + contactSubmitId).html("Sending Email");
    }

    /**
     * This helper function enables the contact form.
     *
     * @access private
     * @returns {void}
     */
    function enableContactForm() {
        $( "#" + contactFormId + " :input").prop("disabled", false);
        $( "#" + contactSubmitId).html("Submit / Send");
    }

    /**
     * This helper function adds informative alerts in
     * response to certain successful or unsuccessful events.
     *
     * @access private
     * @param {string} alertType The type of alert to show ('error', 'info', 'warning', or 'success')
     * @param {string} msg The message to display within the alert.
     * @returns {void}
     */
    function showAlert( alertType, msg ) {

        var boldText;

        switch( alertType.toLowerCase() ) {

            case "error":
            case "danger":
                boldText = "Error!";
                alertType = "danger";
                break;

            case "info":
                boldText = null;
                break;

            case "warning":
                boldText = "Warning!";
                break;

            case "success":
            default:
                boldText = "Email Sent!";
                alertType = "success";
                break;


        }

        var html = "";

        html += '<div class="alert alert-' + alertType + ' alert-dismissible" role="alert">';
        html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

        if( boldText !== null ) {
            html += '<strong>' + boldText + '</strong>&nbsp;';
        }

        html += msg;
        html += '</div>';

        $("#alertContainer").append( html );

    }

    /**
     * This helper function calls the Dasix API endpoint that
     * parses and sends contact emails.
     *
     * @access private
     * @returns {void}
     */
    function sendContactEmail() {

        // Capture Hidden Field Values
        var apiUrl 		= $("#hdnApiUrl").val(),
            apiKey 		= $("#hdnApiKey").val(),
            targetId 	= $("#hdnTargetId").val();

        // Capture Input Fields
        var subject 	= $("#inputSubject").val(),
            fromEmail 	= $("#inputFromEmail").val(),
            fromName 	= $("#inputFromName").val(),
            fromPhone	= $("#inputFromPhone").val(),
            body	 	= $("#inputBody").val();

        // Execute the request
        var request = $.ajax({
            url: apiUrl,
            method: "POST",
            headers: {
                "x-api-key": apiKey
            },
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(
                {
                    data: {
                        type: "ContactEmail",
                        attributes: {
                            target: targetId,
                            subject: subject,
                            fromEmail: fromEmail,
                            fromName: fromName,
                            body: body,
                            extraFields: {
                                "From": fromName,
                                "Email Address": fromEmail,
                                "Phone Number": fromPhone
                            }
                        }
                    }
                }
            )
        });

        request.done(

            function onSuccessResponse( response ) {

                showAlert("success", "We'll be in touch as soon as possible.");
                enableContactForm();

            }

        );

        request.fail(

            function onFailureResponse( jqXHR, textStatus ) {

                var response = jqXHR.responseJSON;
                var status = jqXHR.status;
                var errorMessage;

                if( response.errors !== undefined && response.errors[0] !== undefined ) {
                    errorMessage = response.errors[0].title + " (" + status + "): " + response.errors[0].detail;
                } else {
                    errorMessage = "An unknown problem occurred :(";
                }

                showAlert("error", errorMessage);
                enableContactForm();

            }

        );


    }

});