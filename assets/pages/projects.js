const sectionsId = ["challengerDetails", "viActDetails", "HangmanDetails", 
                    "courseLearningDetails", "sentimentAnalysisDetails", "networkMiningDetails", 
                    "ratingPredictionDetails", "powerPlantDetails", "covid19Details", 
                    "mipsDetails", "ec2Details", "finBERTDetails", "resumeProjectDetails", 
                    "musicFlipDetails"];

function switchPage(id){
    idx = sectionsId.indexOf(id);
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