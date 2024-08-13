function init() {
    declareEvents();
    clickBtnMore();
}


function declareEvents() {
    let my_btn = document.querySelector("#my_btn");
    let p = document.createElement("p");
    // p.className = "lead";
    document.querySelector("#id_div").append(p);
    //    document.querySelector(".para").append(p);

    my_btn.addEventListener("click", function () {
        if (p.innerHTML.length < 1) {
            p.innerHTML = `לימודיי וניסיוני מעולם הרוח ומגוון שיטות טיפול שהביאו לריפוי ודיוק מערכות היחסים בחיי ולפתיחת ערוצי השפע.
<br>
מה שאיפשר ומאפשר לי לסייע לאנשים רבים לשחרור וזימון זוגיות, לפתיחת ערוצי השפע, לפתרון ושחרור בעיות העבר שלהם, לדעת לסלוח ולחיות בשלום ואהבה עם עצמך ועם הסובבים.
<br>
אני מזמינה אותך לחוויה רוחנית עוצמתית ומקדמת.

`

            my_btn.innerHTML = ` 
            <i class="fa fa-chevron-up" aria-hidden="true"></i>`
            // my_btn.style.background = ""

        } else {
            p.innerHTML = "";
            // my_btn.style.border = "black 1px solid"
            my_btn.innerHTML = `
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
            `

        }
    })
}

function clickBtnMore() {
    let my_btn_more = document.querySelector("#my_btn_more");
    let div = document.createElement("div");
    // p.className = "lead";
    document.querySelector("#id_div_movies").append(div);
    //    document.querySelector(".para").append(p);

    my_btn_more.addEventListener("click", function () {
        if (div.innerHTML.length < 1) {
            div.innerHTML = `<div class="roww d-block d-lg-flex justify-content-center mb-lg-3">
            <div class="video">
                <iframe width="500" height="255" src="https://www.youtube.com/embed/jo_xG0aYtAE?si=uw-oOhNl91Egj4Ed"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video">
                <iframe width="500" height="255" src="https://www.youtube.com/embed/LHNUWbiRUX4?si=dORTzjnWgakUpaYR"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        <div class="roww video d-block d-lg-flex justify-content-center">
        <div class="video">
             <iframe width="500" height="255" src="https://www.youtube.com/embed/WneUWG8DlWk?si=9LSDIbrh1F0psm1M"
             title="YouTube video player" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowfullscreen>
            </iframe>
        </div>
        <div class="video">
        <iframe width="500" 
        height="255" 
        src="https://www.youtube.com/embed/kjIEnCWnutE?si=Jmn4-qN-M3Lv9GxZ" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
    </div>
    </div>`
            my_btn_more.innerHTML = ` 
            <i class="fa fa-chevron-up" aria-hidden="true"></i>`
            // my_btn.style.background = ""

        } else {
            div.innerHTML = "";
            // my_btn.style.border = "black 1px solid"
            my_btn_more.innerHTML = `
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
            `

        }
    })
}

init();