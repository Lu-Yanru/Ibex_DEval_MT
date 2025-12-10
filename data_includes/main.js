PennController.ResetPrefix( null );
//AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/PWI_BB/");
PennController.DebugOff()
// change the tedxt on the progress bar
var progressBarText = "progress";

PennController.Sequence("init", "intro", "PersonalData", "hinweise", "practice_start", "practice", "exp_start", randomize("exp"), "payment2", "send", "end")




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Introduction HTML


PennController("intro",

             newHtml("intro", "intro.html")
             .print()

             ,

             newCanvas("space1", 1, 125)
             .print()

             ,

             newButton("weiter", "next")
             .center()
             .settings.css("font-size", "20px")
             .print()
             .wait()


    )

    //.setOption("hideProgressBar", "true")
    ;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// demographic info


PennController("PersonalData",



               newText("EnterData", "Please share a few details about yourself before continuing. This is collected for research purposes only.")
               .settings.css("font-size", "large")
               .print()

               ,

               newCanvas("space1", 1, 10)
               .print()

               ,

               newText("EnterData2", "<b>Please answer all the questions before clicking on <i>next</i>. Otherwise the survey will be stopped, and you will need to reload the page!</b>")
               .settings.css("font-size", "18px")
               .print()

               ,

               newCanvas("space2", 1, 10)
               .print()

               ,

               //newTextInput("id", "")
               //.log()
               //.size(300, 20)
               //,

               //newText("idtext", "Prolific ID:")
               //.css("font-size", "18px")
               //,

               //newCanvas("idcanvas", 600, 70)
               //.add(0, 20, getText("idtext"))
               //.add(350, 23, getTextInput("id"))
               //.print()
               //,

               newTextInput("language", "")
               .settings.log("last")
               .lines(0)
               .size(300, 50)
               //.add( "Deutsch" , "Deutsch und andere Sprache(n) vor dem 5. Lebensjahr" , "andere" )

               ,

               newText("languagetext", "Languages you speak fluently:")
               .settings.css("font-size", "18px")
               ,


               newCanvas("languagecanvas", 600, 70)
               .add(0, 20, getText("languagetext"))
               .add(350, 23, getTextInput("language"))
               .print()

               ,

               newDropDown("gender", "")
               .settings.log()
               .add( "female" , "male" , "diverse", "not specified" )

               ,

               newText("gendertext", "Gender:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("gendercanvas", 600, 35)
               .add(0, 20, getText("gendertext"))
               .add(350, 23, getDropDown("gender"))
               .print()

               ,


               newTextInput("age", "")
               .settings.log("last")
               .size(300, 20)
               ,

               newText("agetext", "Age:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("agecanvas", 600, 35)
               .add(0, 20, getText("agetext"))
               .add(350, 23, getTextInput("age"))
               .print()

               ,

               //newText("educationtext", "H&ouml;chste Bildungsabschluss:")
               //.settings.css("font-size", "18px")
               //,

               //newDropDown("education", "")
               //.settings.log("last")
               //.add("Hauptschulabschluss und qualifizierender Hauptschulabschluss",
               //"Mittlerer Schulabschluss (Realschulabschluss und vergleichbare Schulabschl&uuml;sse)",
               //"Fachhochschulreife (allgemeine oder fachgebundene Fachhochschulreife)",
               //"Abitur (allgemeine oder fachgebundene Hochschulreife)",
               //"Berufsausbildung",
               //"Hochschulabschluss (Universit&auml;t, Fachhochschule)")
               //,

               //newCanvas("educationcanvas", 600, 35)
               //.add(0, 20, getText("educationtext"))
               //.add(350, 23, getDropDown("education"))
               //.print()
               //,

               newDropDown("browser", "")
               .settings.log("last")
               .add( "Safari" , "Firefox" , "Chrome", "Internet Explorer", "Microsoft Edge", "anderer" )

               ,

               newText("browsertext", "Browser used:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("browsercanvas", 600, 35)
               .add(0, 20, getText("browsertext"))
               .add(350, 23, getDropDown("browser"))
               .print()

               ,

               newCanvas("space3", 1, 155)
               .print()

               ,

               newButton("weiter", "next")
               .settings.center()
               .settings.css("font-size", "20px")
               .print()
               .wait(getTextInput("age")
                     .test.text(/^\d+$/) // matches a string with only digits
                     // ende age input

                    .and(getDropDown("gender")
                      .test.selected()
                    ) //ende gender scale


                     .and(getTextInput("language")
                       .test.text(/[A-Za-z]+/) // matches a string with at least one alphabet
                          ) //ende language scale

                      //.and(getTextInput("id")
                      //  .test.text(/^(?!\s*$).+/) //matched a string that contains at least one non-space character
                      //)

                     //.and(getDropDown("education")
                    //   .test.selected()
                    //    ) //ende education scale

                      .and(getDropDown("browser")
                        .test.selected()
                           ) //ende browser scale


                     .success()
                     .failure(

                         getButton("weiter")
                         .remove()
                         ,
                         newText("bye", "Unfortunately, you cannot participate in our survey, because you either do not fulfill our requirements or you did not answer all the questions.")
                         .color("red")
                         .print()

                             ) //ende failure

                    ) // ende wait

               ,

               //newVar("id")
               //.global()
               //.set(getTextInput("id"))
               //,

               newVar("gender")
               .settings.global()
               .set( getDropDown("gender") )

               ,

               newVar("age")
               .settings.global()
               .set( getTextInput("age") )

               ,

               newVar("language")
               .settings.global()
               .set( getTextInput("language") )

               ,

               //newVar("education")
               //.settings.global()
               //.set(getDropDown("education"))
               //,

               newVar("browser")
               .settings.global()
               .set( getDropDown("browser") )

     )

    //.setOption("hideProgressBar", "true")
    //.log("id",         getVar("id"))
    .log( "gender" ,   getVar("gender"))
    .log( "age" ,      getVar("age"))
    .log( "language" , getVar("language"))
    //.log("education", getVar("education"))
    .log( "browser" ,  getVar("browser"))


    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Hinweise HTML

PennController("hinweise",

             newHtml("Hinweise_html.html")
             .print()

             ,

             newCanvas("space1", 1, 160)
             .print()

             ,

             newButton("weiter", "next")
             .center()
             .settings.css("font-size", "20px")
             .print()
             .wait()


    )

    //.setOption("hideProgressBar", "true")
    ;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice


PennController("practice_start",


              newHtml("practice_start", "practice_start.html")
              .print()
              ,

              newButton("weiter", "next")
              .settings.center()
              .settings.css("font-size", "20px")
              .print()
              .wait()


    )

    //.setOption("hideProgressBar", "true")

    ;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice


PennController.Template("practice.csv", variable =>

    PennController("practice",


             newText("sentence", variable.Sentence)
             .settings.css("font-size", "18px")

             ,

             newText("extraction", variable.Entity)
             .settings.css("font-size", "18px")

             ,

             newCanvas("canvas", 1000, 100)
             .add(0, 0, getText("sentence"))
             .add(0, 40, getText("extraction"))
             .print()

             ,

             newText("q1", "Does <b>the expression</b> match <b>the job description</b> in the sentence?")
             ,

             newCanvas("q1Canvas", 1000, 30)
             .add(0, 0, getText("q1"))
             .print()
             ,

             newText("yes1", "Yes")
             //.settings.center()
             .settings.after(newText("no1", "No").settings.css("padding-left", "50pt").settings.css("font-size", "medium")
                            .after(newText("idk1", "I don't know")
                                  .css("padding-left", "50pt").settings.css("font-size", "medium")
                            )
                            )
             .settings.css("font-size", "medium")
             .print()
             ,

             newSelector("match")
             .settings.add(getText("yes1"), getText("no1"), getText("idk1"))
             .log("last")
             ,

             newText("q2", "What is the gender of <b>the job description</b> in the sentence?")
             ,

             newCanvas("q2Canvas", 1000, 60)
             .add(0, 30, getText("q2"))
             .print()
             ,

             newText("f", "Female")
             //.settings.center()
             .settings.after(newText("m", "Male")
                            .settings.css("padding-left", "50pt")
                            .settings.css("font-size", "medium")
                            .after(newText("n", "Neutral")
                                  .css("padding-left", "50pt")
                                  .after(newText("idk", "I don't know")
                                        .css("padding-left", "50pt")
                                        )
                                  )
                            )
             .settings.css("font-size", "medium")
             .print()
             ,

             newSelector("gender")
             .settings.add(getText("f"), getText("m"), getText("n"), getText("idk"))
             .log("last")
             ,

             newText("q3", "Does the sentence make sense?")
             ,

             newCanvas("q3Canvas", 1000, 60)
             .add(0, 30, getText("q3"))
             .print()
             ,

             newText("yes3", "Yes")
             //.settings.center()
             .settings.after(newText("no3", "No")
                            .settings.css("padding-left", "50pt")
                            .settings.css("font-size", "medium")
                            .after(newText("notsure", "Not sure")
                                        .css("padding-left", "50pt")
                                  )
                            )
             .settings.css("font-size", "medium")
             .print()
             ,

             newSelector("makesense")
             .settings.add(getText("yes3"), getText("no3"), getText("notsure"))
             .log("last")
             ,

             newCanvas("space", 1, 50)
             .print()

             ,

             //newText("faster", "Please be faster!")
             //,

             //newTimer("timeout", 60000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             //.start()
             //.log()
             //.callback(getText("faster").print())
             //,

             newButton("weiter", "next")
             .settings.center()
             .settings.css("font-size", "20px")
             .log()
             .print()
             .wait(//getTimer("timeout").test.ended()
                  //.or(
                  getSelector("match").test.selected()
                  .and(getSelector("gender").test.selected())
                  .and(getSelector("makesense").test.selected())
                  //)
                  )
           // cannot click weiter until all scales are selected or when the timer ended
           //.callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    //.setOption("hideProgressBar", "true" )
    //.log("id",         getVar("id"))
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    //.log("education"            , getVar("education"))
    .log( "browser"              , getVar("browser")        )
    .log("index"                , variable.Index       )
    .log("translator"           , variable.Translator)
    .log( "extraction"            , variable.Entity       )
    .log( "sentence"            , variable.Sentence       )
    )
    ;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Main

PennController("exp_start",

              newHtml("exp_start", "exp_start.html")
              .print()

              ,
              newCanvas("space1", 1, 160)
              .print()

              ,
              newButton("weiter", "next")
              .settings.center()
              .settings.css("font-size", "20px")
              .print()
              .wait()


    )

    //.setOption("hideProgressBar", "true")

    ;


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Main

    PennController.Template("test.csv", variable =>

    PennController("exp",


             newText("sentence", variable.Sentence)
             .settings.css("font-size", "18px")

             ,

             newText("extraction", variable.Entity)
             .settings.css("font-size", "18px")

             ,

             newCanvas("canvas", 1000, 100)
             .add(0, 0, getText("sentence"))
             .add(0, 40, getText("extraction"))
             .print()

             ,

             newText("q1", "Does the expression match the job description in the sentence?")
             ,

             newCanvas("q1Canvas", 1000, 30)
             .add(0, 0, getText("q1"))
             .print()
             ,

             newText("yes1", "Yes")
             //.settings.center()
             .settings.after(newText("no1", "No").settings.css("padding-left", "50pt").settings.css("font-size", "medium")
                          .after(newText("idk1", "I don't know")
                          .css("padding-left", "50pt").settings.css("font-size", "medium")
                            )
                            )
             .settings.css("font-size", "medium")
             .print()
             ,

             newSelector("match")
             .settings.add(getText("yes1"), getText("no1"), getText("idk1"))
             .log("last")
             ,

             newText("q2", "What is the gender of the job description in the sentence?")
             ,

             newCanvas("q2Canvas", 1000, 60)
             .add(0, 30, getText("q2"))
             .print()
             ,

             newText("f", "Female")
             //.settings.center()
             .settings.after(newText("m", "Male")
                            .settings.css("padding-left", "50pt")
                            .settings.css("font-size", "medium")
                            .after(newText("n", "Neutral")
                                  .css("padding-left", "50pt")
                                  .after(newText("idk", "I don't know")
                                        .css("padding-left", "50pt")
                                        )
                                  )
                            )
             .settings.css("font-size", "medium")
             .print()
             ,

             newSelector("gender")
             .settings.add(getText("f"), getText("m"), getText("n"), getText("idk"))
             .log("last")
             ,

             newText("q3", "Does the sentence make sense?")
             ,

             newCanvas("q3Canvas", 1000, 60)
             .add(0, 30, getText("q3"))
             .print()
             ,

             newText("yes3", "Yes")
             //.settings.center()
             .settings.after(newText("no3", "No")
                            .settings.css("padding-left", "50pt")
                            .settings.css("font-size", "medium")
                            .after(newText("notsure", "Not sure")
                                        .css("padding-left", "50pt")
                                  )
                            )
             .settings.css("font-size", "medium")
             .print()
             ,

             newSelector("makesense")
             .settings.add(getText("yes3"), getText("no3"), getText("notsure"))
             .log("last")
             ,

             newCanvas("space", 1, 50)
             .print()

             ,

             //newText("faster", "Please be faster!")
             //,

             //newTimer("timeout", 60000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             //.start()
             //.log()
             //.callback(getText("faster").print())
             //,

             newButton("weiter", "next")
             .settings.center()
             .settings.css("font-size", "20px")
             .log()
             .print()
             .wait(//getTimer("timeout").test.ended()
                  //.or(
                  getSelector("match").test.selected()
                  .and(getSelector("gender").test.selected())
                  .and(getSelector("makesense").test.selected())
                  //)
                  )
           // cannot click weiter until all scales are selected or when the timer ended
           //.callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    //.setOption("hideProgressBar", "true" )
    //.log("id",         getVar("id"))
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    //.log("education"            , getVar("education"))
    .log( "browser"              , getVar("browser")        )
    .log("index"                , variable.Index       )
    .log("translator"           , variable.Translator)
    .log( "extraction"            , variable.Entity       )
    .log( "sentence"            , variable.Sentence       )
    )
    ;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// completion screen

PennController.SendResults("send");

PennController("payment",

    newHtml("paymentinstruct", "payment_top.html")
    .print()
    ,
    newTextInput("paypal", "")
    .settings.log("last")
    .size(300, 20)
    ,

    newText("paypaltext", "Paypal:")
    .settings.css("font-size", "18px")

    ,

    newCanvas("paypalcanvas", 600, 20)
    .add(140, 0, getText("paypaltext"))
    .add(450, 3, getTextInput("paypal"))
    .print()

    ,
    newText("banktext", "SEPA transfer:")
    .settings.css("font-size", "18px")

    ,

    newTextInput("accountname", "")
    .settings.log("last")
    .size(300, 20)
    ,

    newText("accountnametext", "Account owner:")
    .settings.css("font-size", "18px")

    ,

    newTextInput("iban", "")
    .settings.log("last")
    .size(300, 20)
    ,

    newText("ibantext", "IBAN:")
    .settings.css("font-size", "18px")

    ,

    newCanvas("bankcanvas", 600, 100)
    .add(140, 20, getText("banktext"))
    .add(280, 20, getText("accountnametext"))
    .add(450, 23, getTextInput("accountname"))
    .add(280, 50, getText("ibantext"))
    .add(450, 53, getTextInput("iban"))
    .print()

    ,

    newVar("paypal")
    .settings.global()
    .set( getTextInput("paypal") )

    ,

    newVar("accountname")
    .settings.global()
    .set( getTextInput("accountname") )

    ,

    newVar("iban")
    .settings.global()
    .set( getTextInput("iban") )

    ,

    newHtml("reciept", "payment.html")
    .print()
    ,

    newButton("weiter", "next")
    .settings.center()
    .settings.css("font-size", "20px")
    .log()
    .print()
     .wait()

)
.log( "paypal" ,   getVar("paypal"))
.log( "accountname", getVar("accountname"))
.log( "iban",      getVar("iban"))
;

PennController("payment2",

    newHtml("reciept", "payment2.html")
    .print()
    ,

    newCanvas("space1", 1, 160)
    .print()

    ,
    newButton("weiter", "next")
    .settings.center()
    .settings.css("font-size", "20px")
    .log()
    .print()
     .wait()

)
;

PennController("end",

    newText("<p>Thank you for participating!</p>")
    .settings.css("font-size", "large")
    .print()

     ,

    newCanvas("empty6", 1, 10)
    .print()

    ,

    newText("close",  "Now you can close this survey.")
    .settings.css("font-size", "large")
    .print()

    ,


    newButton("void")
     .wait()

)
.setOption("countsForProgressBar", false);
  //  .setOption("hideProgressBar", "true")
