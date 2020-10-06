var ttmnewsletter = {
    'PopupValidateEmail': function() {
        var REemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = $('#subscribe_email').val();
        if (email != "") {
            if (!REemail.test(email)) {
                $('.emailtext-danger').remove();
                $('#subscribe_email').after('<div class="alert emailtext-danger">An invalid email address!</div>');
                return false;
            } else {
                $.ajax({
                    url: 'index.php?route=extension/module/ttmnewsletters/newsletter_mail_popup',
                    type: 'post',
                    data: 'email=' + $('#subscribe_email').val(),
                    dataType: 'json',
                    success: function(json) {
                        $('.alert.emailtext-danger').remove();
                        $('#subscribe_email').after('<div class="alert emailtext-success">Successfull!</div>');
                    }
                });
                return false;
            }
        } else {
            $('.emailtext-danger').remove();
            $('#subscribe_email').after('<div class="alert emailtext-danger">Email address is require!</div>');
            $(email).focus();
            return false;
        }
    },
    'ValidateEmail': function() {
        var REemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = $('#txtemail').val();

        if (email != "") {
            if (!REemail.test(email)) {
                $('.emailtext-danger').remove();
                $('#txtemail').after('<div class="alert emailtext-danger">An invalid email address!</div>');
                return false;
            } else {
                $.ajax({
                    url: 'index.php?route=extension/module/ttmnewsletters/newsletter_mail',
                    type: 'post',
                    data: 'email=' + $('#txtemail').val(),
                    dataType: 'json',
                    success: function(json) {
                        $('.alert.emailtext-danger').remove();
                        $('#txtemail').after('<div class="alert emailtext-success">Successfull!</div>');
                    }
                });
                return false;
            }
        } else {
            $('.emailtext-danger').remove();
            $('#txtemail').after('<div class="alert emailtext-danger">Email address is require!</div>');
            $(email).focus();
            return false;
        }
    },
    'PopupClose': function() {
        if ($('.check_newsletter').is(':checked')) {
            ttmnewsletter.setCookie("mail", "existed", 1);
        }
        $('.ttm_popup_newsletter').hide();
    },
    'setCookie': function(aname, avalue, exdays) {
        var b = new Date();
        b.setTime(b.getTime() + (exdays * 25 * 50 * 50 * 1000));
        var exp = "exp=" + b.toUTCString();
        document.cookie = aname + "=" + avalue + ";" + exp;
    },
    'getCookie': function(aname) {
        var cname = aname + "=";
        var d = document.cookie.split(';');
        for (var i = 0; i < d.length; i++) {
            var c = d[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    },
    'checkCookie': function() {
        var user = ttmnewsletter.getCookie("mail");
        if (user != "") {
            $('.ttm_popup_newsletter').hide();
        }
    }
}