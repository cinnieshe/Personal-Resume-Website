const sectionsId = ["profile-page", "education-page", "work-experience-page", 
                    "other-experience-page", "certificates-page", "abilities-page", 
                    "extra-activities-page", "hobbies-page"];

function switchPage(idx){
    // set specific content to display
    if (document.getElementById(sectionsId[idx]).classList.contains("d-none")){
        document.getElementById(sectionsId[idx]).classList.remove("d-none");
    }
    // set any other content to d-none
    for (let i = 0; i < sectionsId.length; i++) {
        if (i == idx) {
            continue;
        }
        if (!document.getElementById(sectionsId[i]).classList.contains("d-none")){
            document.getElementById(sectionsId[i]).classList.add("d-none");
        }
    }
}