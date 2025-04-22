document.addEventListener("DOMContentLoaded", () => {
    const navIcons = document.querySelectorAll("#nav i");
    const sections = document.querySelectorAll(".section");

    navIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const sectionToShow = icon.getAttribute("data-section");

            // Hide all sections
            sections.forEach(section => section.classList.remove("active"));

            // Show the clicked section
            document.getElementById(sectionToShow).classList.add("active");
        });
    });
});

//for overview section 

  document.getElementById("createGroupBtn").addEventListener("click", function() {
    showSection("contacts");
  });

  document.getElementById("requestFundBtn").addEventListener("click", function() {
    showSection("transfer");
  });

  function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  }

// wallet overiew section 
document.addEventListener("DOMContentLoaded", function () {
    const transactions = [
      {
        date: "2025-04-01",
        description: "Contribution to Friends",
        amount: "- ₹2,000",
        type: "Debit"
      },
      {
        date: "2025-04-05",
        description: "Contribution to College Buddies",
        amount: "- ₹1,500",
        type: "Debit"
      },
      {
        date: "2025-04-10",
        description: "Emergency Fund Received",
        amount: "+ ₹1,000",
        type: "Credit"
      }
    ];
  
    const tbody = document.getElementById("transactionBody");
  
    transactions.forEach(tx => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${tx.date}</td>
        <td>${tx.description}</td>
        <td>${tx.amount}</td>
        <td>${tx.type}</td>
      `;
      tbody.appendChild(row);
    });
  
    // Activate wallet section for demo
    document.getElementById("wallet").classList.add("active");
  });



// for logout
function confirmLogout() {
    
    document.getElementById("logoutMessage").style.display = "block";
    
    setTimeout(() => {
      window.location.href = "../login/login.html";
    }, 1000);
  }
  function cancelLogout() {
    window.location.href = "index.html";
  }