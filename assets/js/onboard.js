/* To-do:

(login modal)

Let’s get started: 
Enter Medicaid or email (isID?),Create password

isPyxPal (check invitation table)?
Yes: Create account—T&C—Home
No: MID check

MID Check: yes: Network T&C—Home
No: HiFriend T&C—Home

 */
function emptyFields() {
    $("#moving-screen").empty();
    $("#process-view").empty();
};

function createBtn(idName, className, txt) {
    var newBtn = $("<button>");
    newBtn.addClass(className);
    newBtn.attr("id", idName);
    newBtn.text(txt);

    return newBtn
}

function startPage() {
    emptyFields();
    $("#screen-prompt").empty();

    var newUser = createBtn("new-user", "btn btn-info col-sm-4", "Let's get started");
    var returnUser = createBtn("returning-user", "btn btn-info col-sm-4", "Have an account?");

    $("#moving-screen").append(newUser);
    $("#moving-screen").append(returnUser);
    $("#process-view").text('This is the first screen. New users will click "Let\'s get started". Returning users will click "Have an account?"');
    $("#screen-prompt").append("Welcome to Pyx");

};

function loginPage() {
    emptyFields();

    var loginBtn = createBtn("return-login", "btn btn-info col-sm-3", "Log In")

    var forgotBtn = createBtn("forgot-btn", "btn btn-info col-sm-6", "Forgot Name or Password?")

    var loginProcess = $("<p>");
    loginProcess.text("Returning users will have the option to enter their log-in credentials or try to retrieve a forgotten account name/password. If log-in credentials are incorrect, they will return to this page.")

    $("#moving-screen").append(loginBtn);
    $("#moving-screen").append(forgotBtn);
    $("#process-view").append(loginProcess);

    $(document).on("click", "#forgot-btn", function () {
        forgotAccount();
    });
    $(document).on("click", "#return-login", function () {
        verifyPhone()
    });
};

function verifyPhone() {
    emptyFields();
    $("#screen-prompt").empty();

    var yesBtn = createBtn("yes-exists", "btn btn-info col-sm-3", "Yes");
    var noBtn = createBtn("no-exists", "btn btn-info col-sm-3", "No");

    var newPhoneWhoDis = $("<p>");
    newPhoneWhoDis.text("Users will be prompted to verify the last four of their current phone number. If yes, user has proper credentials and same phone number, they're good to go.");

    $("#moving-screen").append(yesBtn);
    $("#moving-screen").append(noBtn);
    $("#screen-prompt").text("Does your phone number still end in 1234?");
    $("#process-view").append(newPhoneWhoDis);

    $(document).on("click", "#yes-exists", function () {
        pyxHome();
    });

    $(document).on("click", "#no-exists", function () {
        inputNewPhone();
    });
};

function inputNewPhone() {
    emptyFields();
    $("#screen-prompt").empty();

    var inputPhone = createBtn("input-phone", "btn btn-info col-sm-6", "New Phone Who Dis");

    $("#process-view").html("<p>Users will OTP their phone before being able to land on the dashboard.</p>");
    $("#moving-screen").append(inputPhone);
    $("#screen-prompt").text("Please enter your new phone number.");

    $(document).on("click", "#input-phone", function () {
        pyxHome();
    });
}

function forgotAccount() {

    emptyFields();

    var startOver = createBtn("restart", "btn btn-info col-sm-6", "Call Support and Start Over");

    var callSupport = $("<p>");
    callSupport.text("The current plan of action is for the user to call support to verify account name. Password authentication will need to be discussed moving forward");

    $("#process-view").append(callSupport);
    $("#moving-screen").append(startOver);

    $(document).on("click", "#restart", function () {
        startPage()
    });
};

function pyxHome() {

    emptyFields();
    $("#screen-prompt").empty();

    var startOver = createBtn("restart", "btn btn-info col-sm-6", "Start Over");
    var dashboard = $("<p>");
    dashboard.text("Welcome to the Pyx Dashboard");

    $("#moving-screen").append(startOver);
    $("#screen-prompt").append(dashboard);
    $("#process-view").text("This is the Pyx landing page. The user is now onboarded");

    $(document).on("click", "#restart", function () {
        startPage();
    });
}

$(document).on("click", "#returning-user", function () {
    loginPage();
});


$(document).on("click", "#new-user", function () {
    createNew();
});