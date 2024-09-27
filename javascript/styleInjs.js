// Switch between Donation and History tabs
document.getElementById("donation-tab").addEventListener("click", function() {
    document.getElementById("donation-page").classList.remove("hidden");
    document.getElementById("history-page").classList.add("hidden");
    document.getElementById("donation-tab").classList.add("active");
    document.getElementById("history-tab").classList.remove("active");
});

document.getElementById("history-tab").addEventListener("click", function() {
    document.getElementById("history-page").classList.remove("hidden");
    document.getElementById("donation-page").classList.add("hidden");
    document.getElementById("history-tab").classList.add("active");
    document.getElementById("donation-tab").classList.remove("active");
});

// Donation action and modal confirmation
function donate(amount) {
    let donationAmount = document.getElementById(`donation-amount-${amount}`).value;
    if (donationAmount && donationAmount > 0) {
        document.getElementById("donation-confirmation").classList.remove("hidden");
    }
}

function closeModal() {
    document.getElementById("donation-confirmation").classList.add("hidden");
}

