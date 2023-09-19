$(document).ready(function () {
    $("#voucher").click(function () {
        $("#username").attr("onInput", "getPassword(event)"), $("#username")
            .attr("placeholder", "ادخل رقم الكرت"), $("#password").attr("readonly", "readonly"), $("#password")
                .attr("placeholder", " "), $("#password").remoteAttr("required"), $("#voucher")
                    .attr("class", "btn btn-info active"), $("#member").attr("class", "btn btn-success")
    }), $("#member").click(function () {
        $("#username")
            .removeAttr("onInput"), $("#username")
                .attr("placeholder", "اسم المستخدم"), $("#password")
                    .removeAttr("readonly"), $("#password").attr("placeholder", "كلمه المرور"), $("#password")
                        .attr("required", "required"), $("#voucher")
                            .attr("class", "btn btn-info"), $("#member")
                                .attr("class", "btn btn-success active")
    })
});