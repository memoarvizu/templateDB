$(function() {
    $("input[type=text]").on("input", function() {
        var urlLogo = $("[name=urlLogo]").val();
        var title = $("[name=title]").val();
        var copy1 = $("[name=copy1").val();
        var url = $("[name=url").val();
        var codProm = $("[name=codProm]").val();
        var copy2 = $("[name=copy2]").val();
        var vigencia = $("[name=vigencia]").val();
        var cta = $("[name=cta]").val();
        var urlImg = $("[name=urlImg").val();
        var tyc = $("[name=tyc]").val();
        var bgColor = $("[name=bgColor]").val();


        $("#output2").get(0).innerHTML = $('<div/>').text('<div class="scopoed-content">\n\
        <style>\n\
            @import url("http://fonts.cdnfonts.com/css/samsung-sharp-sans");\n\
            body {\n\
                background-image: url("ss.png");\n\
                font-family: "Samsung Sharp Sans", sans-serif;\n\
            }\n\
            button {\n\
                font-family: "Samsung Sharp Sans", sans-serif;\n\
            }\n\
        </style>\n\
    </div>\n\n\
        <section style="position: relative; width:100%;"> \n\
            <header style="text-align: center; top: 0; left: 0; \n\
                          width: 100%; padding: 15px 0px 20px 0px;"> \n\
                <a href="" style="position: relative; max-width: 80px;">\n\
                  <img src="' + urlLogo + '" style="width: 180px;"></a>\n\
            </header> \n\n\
        <div class="content" style="text-align: center;"> \n\
            <p style="font-size: 24px; line-height: 1em; \n\
                      color: ' + bgColor + '; letter-spacing: 1px;">\n\
        <strong>' + title + '</strong></p> \n\n\
            <p style="font-size:15px; font-weight: 400; color: #116DBB; \n\
                      line-height: 1.3em; padding-bottom: 13px;">Entra a la página web\n\
                      <u><a href="' + cta + '" style="text-decoration: none; \n\
                                               color: #116DBB; font-weight: bold;">\n\
                                                ' + url + '</a></u>\n\
                                                <br>antes del ' + vigencia + ', elige el proucto<br>que más te guste.</p> \n\n\
        <a style="font-weight: 400; padding: 8px 8px; \n\
           font-size:11px; background-color: #2F9ED5; \n\
           border: none; color: white;">Ingresa el código: <strong style="font-weight: 500;">' + codProm + '</strong> </a> <br><br> \n\n\
        <p style="font-size:15px; \n\
        font-weight: 400; \n\
        color: #116DBB; \n\
        line-height: 1.3em; \n\
        padding-bottom: 16px;">al momento de pagar y disfruta<br>este beneficio que tenemos para ti</p> \n\n\
        <button style="font-weight: bold; \n\
        padding: 5px 20px; \n\
        font-size:10px; \n\
        letter-spacing: 1px; \n\
        background-color: #2F9ED5; \n\
        border-radius: 15px; \n\
        border: none; \n\
        color: white;"><a href="' + cta + '" style="text-decoration: none; color: white">¡Compra ahora!</a></button> \n\n\
        <br><br><br> \n\n\
        <div style="text-align: center;"> \n\
        <img src="' + urlImg + '" width="100%" style="padding-bottom: 11px;"> \n\
        <p style="position: absolute; top: 93%; font-size: 8px; color: #293844; line-height: 1.1em; padding-bottom: 13px;">' + tyc + '</p> \n\
        </div> \n\n\
        </div> \n\
        </section>').html();

        $("#output3").get(0).innerHTML = $('<div/>').text('<section \n\
        style="position: relative; \n\
        width:100%; \n\
        font-family:"Samsung sharp Sans", sans-serif;"  \n\
        <header style="text-align: \n\
        center; \n\
        top: 0; left: 0; \n\
        width: 100%; padding: 15px 0px 20px 0px;" \n\
        <a href="" style="position: relative; max-width: 80px;" \n\
        <img src="' + urlLogo + '" style="width: 180px;"></a></header> \n\
        <div class="content" style="text-align: center;"> \n\
        <p style="font-size: 24px; line-height: 1em; color: ' + bgColor + '; letter-spacing: 1px;"><strong>' + title + '</strong></p> \n\n\
        <p style="font-size:15px; font-weight: 400; color: #116DBB; line-height: 1.3em; padding-bottom: 13px;">Entra a la página web<u><a href="' + cta + '" \n\
        style="text-decoration: none; color: #116DBB; font-weight: bold;"> ' + url + '</a></u><br>antes del ' + vigencia + ', elige el proucto<br>que más te guste.</p> \n\n\
        <a style="font-family: "Samsung Sharp Sans", sans-serif; \n\
        font-weight: 400; \n\
        padding: 8px 8px; \n\
        font-size:11px; \n\
        background-color: #2F9ED5; \n\
        border: none; \n\
        color: white;">Ingresa el código: <strong style="font-weight: 500;">' + codProm + '</strong> </a> <br><br> \n\n\
        <p style="font-size:15px; \n\
        font-weight: 400; \n\
        color: #116DBB; \n\
        line-height: 1.3em; \n\
        padding-bottom: 16px;">al momento de pagar y disfruta<br>este beneficio que tenemos para ti</p> \n\n\
        <button style="font-family: "Samsung Sharp Sans", sans-serif; \n\
        font-weight: bold; \n\
        padding: 5px 20px; \n\
        font-size:10px; \n\
        letter-spacing: 1px; \n\
        background-color: #2F9ED5; \n\
        border-radius: 15px; \n\
        border: none; \n\
        color: white;"><a href="' + cta + '" style="text-decoration: none; color: white">¡Compra ahora!</a></button> \n\n\
        <br><br><br> \n\n\
        <div style="text-align: center;"> \n\
        <img src="' + urlImg + '" width="100%" style="padding-bottom: 11px;"> \n\
        <p style="position: absolute; top: 93%; font-size: 8px; color: #293844; line-height: 1.1em; padding-bottom: 13px;">' + tyc + '</p> \n\
        </div> \n\n\
        </div> \n\
        </section>').html();

        $("#output3").get(0).innerHTML = $('<div/>').text('<section \n\
        style="position: relative; \n\
        width:100%; \n\
        font-family:"Samsung sharp Sans", sans-serif;"  \n\
        <header style="text-align: \n\
        center; \n\
        top: 0; left: 0; \n\
        width: 100%; padding: 15px 0px 20px 0px;" \n\
        <a href="" style="position: relative; max-width: 80px;" \n\
        <img src="' + urlLogo + '" style="width: 180px;"></a></header> \n\
        <div class="content" style="text-align: center;"> \n\
        <p style="font-size: 24px; line-height: 1em; color: ' + bgColor + '; letter-spacing: 1px;"><strong>' + title + '</strong></p> \n\n\
        <p style="font-size:15px; font-weight: 400; color: #116DBB; line-height: 1.3em; padding-bottom: 13px;">Entra a la página web<u><a href="' + cta + '" \n\
        style="text-decoration: none; color: #116DBB; font-weight: bold;"> ' + url + '</a></u><br>antes del ' + vigencia + ', elige el proucto<br>que más te guste.</p> \n\n\
        <a style="font-family: "Samsung Sharp Sans", sans-serif; \n\
        font-weight: 400; \n\
        padding: 8px 8px; \n\
        font-size:11px; \n\
        background-color: #2F9ED5; \n\
        border: none; \n\
        color: white;">Ingresa el código: <strong style="font-weight: 500;">' + codProm + '</strong> </a> <br><br> \n\n\
        <p style="font-size:15px; \n\
        font-weight: 400; \n\
        color: #116DBB; \n\
        line-height: 1.3em; \n\
        padding-bottom: 16px;">al momento de pagar y disfruta<br>este beneficio que tenemos para ti</p> \n\n\
        <button style="font-family: "Samsung Sharp Sans", sans-serif; \n\
        font-weight: bold; \n\
        padding: 5px 20px; \n\
        font-size:10px; \n\
        letter-spacing: 1px; \n\
        background-color: #2F9ED5; \n\
        border-radius: 15px; \n\
        border: none; \n\
        color: white;"><a href="' + cta + '" style="text-decoration: none; color: white">¡Compra ahora!</a></button> \n\n\
        <br><br><br> \n\n\
        <div style="text-align: center;"> \n\
        <img src="' + urlImg + '" width="100%" style="padding-bottom: 11px;"> \n\
        <p style="position: absolute; top: 93%; font-size: 8px; color: #293844; line-height: 1.1em; padding-bottom: 13px;">' + tyc + '</p> \n\
        </div> \n\n\
        </div> \n\
        </section>').html();



        /*  $("#output").get(0).innerHTML = $('<div/>').text('<a class="fragment" href="' + urlLogo + '" target="_blank"> \
        <div> \
          <img class="imgbor" src="' + urlImg + '" alt="some description" /> \
          <span class="styleraise">' + title + '</span> \
          <span class="styleraise1">' + copy2 + '</span> \
          <div class="textpara">' + codProm + '</div> \
        </div> \
      </a>').html();*/
    });
});