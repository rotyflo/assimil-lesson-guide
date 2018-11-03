document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let lessonNumber = document.getElementById("lesson-number").value;
        
        document.getElementById("main-lesson").innerText = lessonNumber;

        let reviewNumbers = "";

        for (let i = 1; i <= 32; i *= 2) {
            lessonNumber -= i;

            if (lessonNumber > 0) {
                reviewNumbers += " " + lessonNumber;
            }
            else {
                break;
            }
        }

        document.getElementById("review-lessons").innerText = reviewNumbers;
    }
});