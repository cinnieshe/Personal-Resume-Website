function getResumeProjectDetails() {
    if (!document.getElementById("challengerDetails").classList.contains("d-none")){
        document.getElementById("challengerDetails").classList.add("d-none");
    }
    else if (!document.getElementById("viActDetails").classList.contains("d-none")){
        document.getElementById("viActDetails").classList.add("d-none");
    }
    else if (!document.getElementById("HangmanDetails").classList.contains("d-none")){
        document.getElementById("HangmanDetails").classList.add("d-none");
    }
    
    if (document.getElementById("resumeProjectDetails").classList.contains("d-none")){
        document.getElementById("resumeProjectDetails").classList.remove("d-none");
    }
}

function getChallengerProjectDetails() {
    if (!document.getElementById("resumeProjectDetails").classList.contains("d-none")){
        document.getElementById("resumeProjectDetails").classList.add("d-none");
    }
    else if (!document.getElementById("viActDetails").classList.contains("d-none")){
        document.getElementById("viActDetails").classList.add("d-none");
    }
    else if (!document.getElementById("HangmanDetails").classList.contains("d-none")){
        document.getElementById("HangmanDetails").classList.add("d-none");
    }
    
    if (document.getElementById("challengerDetails").classList.contains("d-none")){
        document.getElementById("challengerDetails").classList.remove("d-none");
    }
}

function getViActProjectDetails() {
    if (!document.getElementById("resumeProjectDetails").classList.contains("d-none")){
        document.getElementById("resumeProjectDetails").classList.add("d-none");
    }
    else if (!document.getElementById("challengerDetails").classList.contains("d-none")){
        document.getElementById("challengerDetails").classList.add("d-none");
    }
    else if (!document.getElementById("HangmanDetails").classList.contains("d-none")){
        document.getElementById("HangmanDetails").classList.add("d-none");
    }
    
    if (document.getElementById("viActDetails").classList.contains("d-none")){
        document.getElementById("viActDetails").classList.remove("d-none");
    }
}

function getHangmanProjectDetails() {
    if (!document.getElementById("resumeProjectDetails").classList.contains("d-none")){
        document.getElementById("resumeProjectDetails").classList.add("d-none");
    }
    else if (!document.getElementById("challengerDetails").classList.contains("d-none")){
        document.getElementById("challengerDetails").classList.add("d-none");
    }
    else if (!document.getElementById("viActDetails").classList.contains("d-none")){
        document.getElementById("viActDetails").classList.add("d-none");
    }
    
    if (document.getElementById("HangmanDetails").classList.contains("d-none")){
        document.getElementById("HangmanDetails").classList.remove("d-none");
    }
}