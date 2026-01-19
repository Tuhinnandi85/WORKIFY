const heroSearch = document.getElementById("heroSearch");

    const tabBtns = heroSearch.querySelectorAll(".tab-btn");
    const subtitle = document.getElementById("searchSubtitle");
    const input = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    let activeTab = "expert";

    const tabData = {
      expert: {
        subtitle:
          "Hire trusted experts with the right skills and experience to deliver outstanding results.",
        placeholder: "Search by role, skills or keywords",
      },
      job: {
        subtitle:
          "Find the right jobs that match your skills and start working with top clients.",
        placeholder: "Search jobs by title, skill or keyword",
      },
    };

    // ✅ Switch Tab Function
    function setActiveTab(tabName) {
      activeTab = tabName;

      // active class change
      tabBtns.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
      });

      // update text
      subtitle.textContent = tabData[tabName].subtitle;
      input.placeholder = tabData[tabName].placeholder;

      // clear input (optional)
      input.value = "";
      input.focus();
    }

    // ✅ Tab Click
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        setActiveTab(btn.dataset.tab);
      });
    });

    // ✅ Search action
    function handleSearch() {
      const query = input.value.trim();

      if (!query) {
        alert("Please type something to search!");
        input.focus();
        return;
      }

      // You can redirect / filter results here
      console.log("Searching:", { tab: activeTab, query });

      alert(`Searching in "${activeTab}" for: ${query}`);
    }

    // ✅ Button click
    searchBtn.addEventListener("click", handleSearch);

    // ✅ Enter key search
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSearch();
    });

    // ✅ Default start
    setActiveTab("expert");
