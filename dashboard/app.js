document.addEventListener("DOMContentLoaded", () => {
    const navIcons = document.querySelectorAll("#nav i");
    const cardContainer = document.getElementById("card-container");

    const cardData = {
        dashboard: {
            title: "Dashboard Overview",
            content: "Welcome to the dashboard. Here you can view all metrics."
        },
        wallet: {
            title: "Wallet",
            content: "Manage your wallet and view transactions here."
        },
        transfer: {
            title: "Transfer",
            content: "Transfer funds to others securely and quickly."
        },
        "add-user": {
            title: "Add User",
            content: "Add new users to your group or contacts."
        },
        contacts: {
            title: "Contacts",
            content: "View and manage your contact list."
        },
        settings: {
            title: "Settings",
            content: "Adjust application preferences and configurations."
        },
        logout: {
            title: "Logout",
            content: "Click here to safely log out of your account."
        }
    };

    navIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const section = icon.getAttribute("data-section");
            const cardInfo = cardData[section];

            if (cardInfo) {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `<h2>${cardInfo.title}</h2><p>${cardInfo.content}</p>`;
                
                // Remove existing cards
                cardContainer.innerHTML = "";

                // Add the new card
                cardContainer.appendChild(card);
            }
        });
    });
});
