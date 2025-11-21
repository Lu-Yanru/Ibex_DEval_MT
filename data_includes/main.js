PennController.ResetPrefix( null );
//AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/PWI_BB/");
PennController.DebugOff()
// change the tedxt on the progress bar
var progressBarText = "progress";

PennController.Sequence("init", "intro", "PersonalData", "hinweise", "practice_start", "practice")//, "exp_start", randomize("exp"), "send", "end" )




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



               newText("EnterData", "First, a few details about yourself!")
               .settings.css("font-size", "large")
               .print()

               ,

               newCanvas("space1", 1, 10)
               .print()

               ,

               newText("EnterData2", "<b>Please answer all the questions before clicking on <i>next</i>. Otherwise the survey will be stopped!</b>")
               .settings.css("font-size", "18px")
               .print()

               ,

               newCanvas("space2", 1, 10)
               .print()

               ,

               newTextInput("language", "")
               .settings.log()
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
               .add( "female" , "male" , "divers", "not specified" )

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
               .settings.log()
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
                     .test.text(/^\d+$/) // ende age input

                    .and(getDropDown("gender")
                      .test.selected()
                    ) //ende gender scale


                     .and(getTextInput("language")
                       .test.text(/^\d*[a-z][a-z0-9]*$/)
                          ) //ende language scale

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

             newCanvas("canvas", 1000, 130)
             .add(0, 0, getText("sentence"))
             .add(0, 40, getText("extraction"))
             .print()

             ,

             newText("q1", "Does the expression match the job description in the sentence?")
             .print()
             ,

             newText("yes", "<small>Yes</small>")
             .settings.center()
             .settings.after(newText("no", "<small>No</small>").settings.css("padding-left", "100pt").settings.css("font-size", "medium"))
             .settings.css("font-size", "medium")
             .print()
             ,

             newSelector("select1")
             .settings.add(getText("yes"), getText("no"))
             .log("last")
             ,

             //newCanvas("q1Canvas", 1000, 70)
             //.add(0,0, getText("q1"))
             //.add(0, 20, getSelector("select1"))
             //.print()
             //,

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
                  getSelector("select1").test.selected()
                  //)
                  )
           // cannot click weiter until all scales are selected or when the timer ended
           //.callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    //.setOption("hideProgressBar", "true" )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    //.log("education"            , getVar("education"))
    .log( "browser"              , getVar("browser")        )
    .log("index"                , variable.Index       )
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

    PennController.Template("list1-1.csv", variable =>

        PennController("exp",


                 newText("sa", variable.sa)
                 .settings.css("font-size", "18px")

                 ,

                 newText("sb", variable.sb)
                 .settings.css("font-size", "18px")

                 ,

                 newText("frage", "Inwieweit w&uuml;rdest du <b>Person B</b> die folgenden Eigenschaften zuschreiben?")
                 //.settings.css("font-size", "18px")
                 ,

                 newCanvas("canvas", 1000, 130)
                 .add(0, 0, getText("sa"))
                 .add(0, 20, getText("sb"))
                 .add(0, 80, getText("frage"))
                 .print()

                 ,

                 newScale("pingelig", 6)
                 .button()
                 .radio()
                 .before(newText("pingeligtext1", "gar nicht pingelig").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
                 .after(newText("pingeligtext1", "sehr pingelig"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
                 .labelsPosition("top")
                 .log("last")
                 ,

                 newCanvas("pingeligCanvas", 1000, 70)
                 .add(0,0, getScale("pingelig"))
                 .print()
                 ,

                 newScale("gebildet", 6)
                 .button()
                 .radio()
                 .before(newText("gebildettext1", "gar nicht gebildet").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
                 .after(newText("gebildettext1", "sehr gebildet"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
                 .labelsPosition("top")
                 .log("last")
                 ,

                 newCanvas("gebildetCanvas", 1000, 70)
                 .add(0,0, getScale("gebildet"))
                 .print()
                 ,

                 newScale("formell", 6)
                 .button()
                 .radio()
                 .before(newText("formelltext1", "gar nicht formell").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
                 .after(newText("formelltext1", "sehr formell"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
                 .labelsPosition("top")
                 .log("last")
                 ,

                 newCanvas("formellCanvas", 1000, 70)
                 .add(0,0, getScale("formell"))
                 .print()
                 ,

                 newSelector("shuffle") // shuffle the positions of the scales
                 .add(getCanvas("pingeligCanvas"), getCanvas("gebildetCanvas"), getCanvas("formellCanvas"))
                 .shuffle()
                 .disableClicks()
                 ,

                 newCanvas("space", 1, 50)
                 .print()

                 ,

                 //newText("faster", "Bitte schneller bewerten!")
                 //,

                 //newTimer("timeout", 60000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
                 //.start()
                 //.log()
                 //.callback(getCanvas("canvas")
                  //        .remove()
                  //        ,
                  //        getCanvas("pingeligCanvas")
                  //        .remove()
                  //        ,
                  //        getCanvas("gebildetCanvas")
                  //        .remove()
                  //        ,
                  //        getCanvas("formellCanvas")
                  //        .remove()
                  //        ,
                  //      )
                 //.callback(getText("faster").print())
                 //,

                 newButton("weiter", "next")
                 .settings.center()
                 .settings.css("font-size", "20px")
                 .log()
                 .print()
                 .wait(//getTimer("timeout").test.ended()
                      //.or(getScale("pingelig").test.selected()
                      //.and(getScale("gebildet").test.selected()
                      //.and(getScale("formell").test.selected()
                      //)
                      //)
                      )
               )// cannot click weiter until all scales are selected or when the timer ended
               //.callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
               ,


        )

        //.setOption("hideProgressBar", "true" )
        .log( "gender"               , getVar("gender")         )
        .log( "age"                  , getVar("age")            )
        .log( "language"             , getVar("language")       )
        //.log("education"            , getVar("education"))
        .log( "browser"              , getVar("browser")        )
        .log("itemnr"                , variable.item_nr       )
        .log( "condition"            , variable.cond       )
        .log( "conddrop"            , variable.cond_drop       )
        .log("condarg"              , variable.cond_pron    )
        .log("obj"                   ,variable.obj)
        .log("objgen"                  , variable.obj_gen )
        .log("mod"                 , variable.mod )
        .log("v"                    ,variable.v)
        .log("block"                    ,variable.block)
        )
        ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// completion screen

PennController.SendResults("send");

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
