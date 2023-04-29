function init() {
    declareEvents()
}


function declareEvents() {
    let my_btn = document.querySelector("#my_btn");
    let p = document.createElement("p");
    // p.className = "lead";
    document.querySelector("#id_div").append(p);
    //    document.querySelector(".para").append(p);

    my_btn.addEventListener("click", function () {
        if (p.innerHTML.length < 1) {
            p.innerHTML = `  עוסק בחינוך רופאים מתמחים וסטודנטים למקצועות הבריאות.
            <br />
            לצד עבודתו הקלינית, עוסק במחקר בתחומי תפקוד וקוגניציה
            <br />
            בשיתוף עם אוניברסיטת תל-אביב והמרכז הרפואי מאיר.
            <br />
            חבר האיגוד הישראלי לרפואה פנימית,
            <br />
            ובאיגוד הישראלי לרפואה גריאטרית.
            <br />
            חבר ב American Geriatrics Society.`
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



init();