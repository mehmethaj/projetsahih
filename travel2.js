document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".gallary .card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            expandImage(this);
        });
    });

    function expandImage(card) {
        
        document.querySelectorAll(".gallary .card").forEach(c => {
            c.classList.remove("expanded");
        });

    
        card.classList.add("expanded");

        
        let existingCloseBtn = card.querySelector(".close-btn");
        if (existingCloseBtn) {
            existingCloseBtn.remove();
        }

        
        let closeBtn = document.createElement("button");
        closeBtn.innerText = "Close";
        closeBtn.classList.add("close-btn");

        
        card.appendChild(closeBtn);

        
        closeBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            closeExpandedImage(card);
        });

        
        let details = card.querySelector(".details");
        if (details) {
            details.style.display = "block";
        }

        
        let seeMoreBtn = card.querySelector(".btn");
        if (seeMoreBtn) {
            seeMoreBtn.addEventListener("click", function (event) {
                event.preventDefault();
                showQuestion(card);
            });
        }
    }

    function closeExpandedImage(card) {
        card.classList.remove("expanded");

        
        let closeBtn = card.querySelector(".close-btn");
        if (closeBtn) {
            closeBtn.remove();
        }

        
        let details = card.querySelector(".details");
        if (details) {
            details.style.display = "none";
        }

        
        let questionBox = card.querySelector(".question-box");
        if (questionBox) {
            questionBox.remove();
        }
    }

    function showQuestion(card) {
        
        let existingBox = card.querySelector(".question-box");
        if (existingBox) {
            existingBox.remove();
        }

        
        let questionBox = document.createElement("div");
        questionBox.classList.add("question-box");

        let questionText = document.createElement("p");
        questionText.innerText = "Did You Like This Tourist Country?";
        questionBox.appendChild(questionText);

        
        let yesBtn = document.createElement("button");
        yesBtn.innerText = "Yes";
        yesBtn.classList.add("yes-btn");
        questionBox.appendChild(yesBtn);
        questionBox.querySelector(".yes-btn").addEventListener("click",function()
        
               {alert("Thanks For Your Answer🌹");})

        
        let noBtn = document.createElement("button");
        noBtn.innerText = "No";
        noBtn.classList.add("no-btn");
        questionBox.appendChild(noBtn);
        questionBox.querySelector(".no-btn").addEventListener("click",function()
        
               {alert("We Hope You Like Another Country🤗🌹");})

    
        card.querySelector(".details").appendChild(questionBox);
    }
});