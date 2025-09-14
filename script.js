document.addEventListener("DOMContentLoaded", () => {
  let sets = [{
      "id": "intro_to_db_1",
      "name": "Intro To Database Test 1 Terms",
      "cards": [{"id":1,"term":"Table","definition":"A two-dimensional grid characterized by rows and columns","image":""},{"id":2,"term":"Row","definition":"A single record in a table","image":""},{"id":3,"term":"Column","definition":"A set of data values of a defined type in a table","image":""},{"id":4,"term":"Primary Key","definition":"A unique identifier for a record in a table","image":""},{"id":5,"term":"Foreign Key","definition":"A field in one table that uniquely identifies a row of another table","image":""},{"id":6,"term":"Relational Model","definition":"A way to structure data using tables.","image":""},{"id":7,"term":"Set Theory","definition":"A mathematical theory that deals with collections of objects","image":""},{"id":8,"term":"User Tables","definition":"Store user defined data","image":""},{"id":9,"term":"System Tables","definition":"Store metadata - data about the database","image":""},{"id":10,"term":"Database","definition":"An organized collection of data consisting of multiple tables","image":""},{"id":11,"term":"Parent Table","definition":"A table whose primary key is referenced by a child table","image":""},{"id":12,"term":"Child Table","definition":"A table that contains data related to a specific entity in a relational database, often linked to a parent table through a foreign key.","image":""},{"id":13,"term":"Referential Integrity","definition":"A property that ensures relationships between tables remain consistent","image":""},{"id":14,"term":"Junction Table","definition":"A table used to connect two or more tables in a Many to Many relationship","image":""},{"id":15,"term":"Entity-Relationship Diagram (ERD)","definition":"A visual representation of the entities in a database and their relationships.","image":""},{"id":16,"term":"Simple Key","definition":"A single column in a database table that is used to uniquely identify a row.","image":""},{"id":17,"term":"Composite Key","definition":"A combination of two or more columns in a database table that can uniquely identify a row in that table.","image":""},{"id":18,"term":"One to One","definition":"A relationship where a single record in one table is associated with a single record in another table.","image":"https://database.guide/wp-content/uploads/2024/09/one-to-one-relationship-1024x357.png"},{"id":19,"term":"One to Many","definition":"A relationship where a single record in one table can be associated with multiple records in another table.","image":"https://database.guide/wp-content/uploads/2024/09/one-to-many-relationship-1024x357.png"},{"id":20,"term":"Many to Many","definition":"A relationship where multiple records in one table can be associated with multiple records in another table.","image":"https://database.guide/wp-content/uploads/2024/09/many-to-many-relationship-1024x350.png"}]
  },
  {
      "id": "aplus_chap1",
      "name": "A+ Cert Chapter 1 Terms",
      "cards": [{"id":1,"term":"active listening","definition":"An effective communication technique that ensures what the speaker says is accurately received.","image":""},{"id":2,"term":"adapter","definition":"An electronic circuit card that can be inserted into an expansion slot. Also called a controller, card, controller card, circuit card, circuit board, or adapter board.","image":""},{"id":3,"term":"ADF (automatic document feeder)","definition":"A feature on a printer or multifunction device that allows paper to be fed into the device to be copied, scanned, or faxed, depending on the model and task.","image":""},{"id":4,"term":"bit","definition":"An electrically charged 1 or 0.","image":""},{"id":5,"term":"byte","definition":"8 bits grouped together as a basic unit.","image":""},{"id":6,"term":"clarify customer statement","definition":"A technique in which a technician asks open-ended questions that provide more information than questions that result in just yes or no answers.","image":""},{"id":7,"term":"device driver","definition":"Special software that allows an operating system to access a piece of hardware.","image":""},{"id":8,"term":"expansion slot","definition":"A motherboard socket to which adapters are connected.","image":""},{"id":9,"term":"flatbed scanner","definition":"A peripheral used to digitize photos and texts.","image":""},{"id":10,"term":"gigabyte","definition":"Approximately 1 billion bytes of information (exactly 1,073,741,824 bytes); abbreviated GB.","image":""},{"id":11,"term":"hard drive","definition":"A sealed data storage medium on which information is stored. Also called a hard disk.","image":""},{"id":12,"term":"hardware","definition":"A tangible, physical item, such as a keyboard or monitor.","image":""},{"id":13,"term":"headset","definition":"A mobile wearable device that commonly includes a microphone and headphones.","image":""},{"id":14,"term":"keyboard","definition":"A device that allows a user to provide input to a computer.","image":""},{"id":15,"term":"kilobyte","definition":"Approximately 1,000 bytes of information (exactly 1,024 bytes).","image":""},{"id":16,"term":"megabyte","definition":"Approximately 1 million bytes of data (exactly 1,048,576 bytes). Abbreviated MB.","image":""},{"id":17,"term":"memory","definition":"The part of a computer that temporarily stores applications, user documents, and system operating information.","image":""},{"id":18,"term":"microphone","definition":"An audio input device that can be integrated into a mobile device or that can be added externally, as with a wireless Bluetooth device; controlled with an app.","image":""},{"id":19,"term":"monitor","definition":"A device that displays information from a computer to a user.","image":""},{"id":20,"term":"motherboard","definition":"The main circuit board of a computer. Also known as the mainboard, planar, or system board.","image":""},{"id":21,"term":"mouse","definition":"A data input device that moves the cursor or selects menus and options.","image":""},{"id":22,"term":"open ended question","definition":"A soft skills technique that results in more information about a problem than questions that have just yes or no answers.","image":""},{"id":23,"term":"operating system (OS)","definition":"A piece of software that loads a computer and makes it operational.","image":""},{"id":24,"term":"optical drive","definition":"A storage device that accepts optical discs such as CDs, DVDs, or BDs that hold data, music, video, or software applications.","image":""},{"id":25,"term":"PC (personal computer)","definition":"A common name for a computer, derived from the IBM PC brand.","image":""},{"id":26,"term":"powersupply","definition":"A device that converts AC voltage into DC voltage that the computer can use to power all internal and some external devices.","image":""},{"id":27,"term":"printer","definition":"A peripheral used to output text and/or graphics onto paper.","image":""},{"id":28,"term":"RAM","definition":"A volatile type of memory that loses its data when power to the computer is shut off.","image":""},{"id":29,"term":"software","definition":"An application or operating system consisting of a set of instructions that makes the hardware work.","image":""},{"id":30,"term":"terabyte","definition":"Approximately 1 trillion bytes of information, or 240 (1,099,511,627,776) bytes.","image":""},{"id":31,"term":"webcam","definition":"Short for web camera, a small camera used for communicating via video across the internet.","image":""}]
  },
  {
      "id": "aplus_chap2",
      "name": "A+ Cert Chapter 2 Terms",
      "cards": [
          {"id":1,"term":"Placeholder","definition":"W.I.P","image":""}
      ]
  }]
  let currentSet = sets[0].cards;

  const main = document.querySelector("main");
  const cardsSelect = document.getElementById("cardsSelect");

  sets.forEach(set => {
    const option = document.createElement("option");
    option.value = set.id;
    option.textContent = set.name;
    cardsSelect.appendChild(option);
  });

  cardsSelect.addEventListener("change", () => {
      const val = cardsSelect.value;
      let name = null;
      sets.forEach(set => {
          if (set.id !== val) return;
          name = set.name;
          currentSet = set.cards
      });
      renderFlashcards();
      showToast(`Switched to ${name}`);
  });

  function renderFlashcards() {
      main.innerHTML = "";
      currentSet.forEach(card => {
      if (!card.term) return currentSet = currentSet.filter(c => c !== card);
      const cardEl = document.createElement("div");
      cardEl.className = "card";
      cardEl.innerHTML = `
          <div class="card-inner">
          <div class="card-front relative">
              <span class="card-id">#${card.id}</span>
              ${card.image ? `<img src="${card.image}" alt="Term image" class="w-48 h-48 object-contain mx-auto mb-3">` : ""}
              <h3 class="text-lg font-semibold text-center">${card.term}</h3>
          </div>
          <div class="card-back flex justify-center items-center">
              <h3 class="text-xl font-bold">${card.definition}</h3>
          </div>
          </div>
      `;
      cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
      main.appendChild(cardEl);
      });
  }

  renderFlashcards();

  // ----------------- Toast -----------------
  function showToast(message, type="info", duration=3000) {
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.textContent = message;
      document.getElementById("toastContainer").appendChild(toast);
      setTimeout(() => toast.classList.add("show"), 10);
      setTimeout(() => toast.remove(), duration);
      toast.addEventListener("click", (e) => {if (e.target == toast) toast.remove();});
  }

  // ----------------- Match Modal -----------------
  const matchBtn = document.getElementById("matchBtn");
  const matchModal = document.getElementById("matchModal");
  const closeMatch = document.getElementById("closeMatch");
  const matchGrid = document.getElementById("matchGrid");
  const statsEl = document.getElementById("stats");
  const resultEl = document.getElementById("result");
  const restartBtn = document.getElementById("restartBtn");

  let startTime, timerInterval, selected = [], matchCards = [], matchedCount = 0, moves = 0;

  function getRandomItems(arr, count) {
      const shuffled = arr.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, count);
  }

  function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
  }

  function normalizeMatchCardSizes() {
        const cards = document.querySelectorAll(".match-tile");
        if (cards.length === 0) return;
        let maxWidth = 0;
        let maxHeight = 0;
        cards.forEach(card => {
            card.style.width = "auto";
            card.style.height = "auto";
        });
        cards.forEach(card => {
            maxWidth = Math.max(maxWidth, card.offsetWidth);
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
        cards.forEach(card => {
            card.style.width = maxWidth + "px";
            card.style.height = maxHeight + "px";
        });
    }

  function startMatchGame() {
      matchCards = [];
      matchGrid.innerHTML = "";
      resultEl.classList.add("hidden");
      matchedCount = 0;
      selected = [];
      moves = 0;
      let tiles = [];
      if (currentSet.length > 6) matchCards = getRandomItems(currentSet, 6);
      matchCards.forEach(c => {
      tiles.push({id:c.id,type:"q",text:c.term,image:c.image});
      tiles.push({id:c.id,type:"a",text:c.definition});
      });
      shuffle(tiles).forEach(t => {
      const div = document.createElement("div");
      div.className="match-tile";
      if(t.type==="q" && t.image){
          div.innerHTML = `<img src="${t.image}" alt="Term image"><span>${t.text}</span>`;
      } else div.textContent = t.text;
      div.dataset.id = t.id;
      div.dataset.type = t.type;
      div.addEventListener("click", () => handleTileClick(div));
      matchGrid.appendChild(div);
      });
      normalizeMatchCardSizes();
      startTime = Date.now();
      updateStats();
      timerInterval = setInterval(updateStats,500);
  }

  function updateStats() {
      let secs = Math.floor((Date.now() - startTime)/1000);
      statsEl.textContent = `Time: ${secs}s | Moves: ${moves}`;
  }

  function handleTileClick(tile){
      if(tile.classList.contains("matched") || selected.includes(tile)) return;
      tile.classList.add("selected");
      selected.push(tile);
      if(selected.length===2){
      moves++;
      updateStats();
      const [t1,t2]=selected;
      if(t1.dataset.id===t2.dataset.id && t1.dataset.type!==t2.dataset.type){
          t1.classList.remove("selected"); t2.classList.remove("selected");
          t1.classList.add("matched"); t2.classList.add("matched");
          matchedCount++;
          if(matchedCount===matchCards.length) endMatchGame();
      } else {
          setTimeout(()=>{t1.classList.remove("selected"); t2.classList.remove("selected");},800);
      }
      selected=[];
      }
  }

  function endMatchGame(){
      clearInterval(timerInterval);
      let secs=Math.floor((Date.now()-startTime)/1000);
      resultEl.querySelector("p").textContent=`🎉 You finished in ${secs}s with ${moves} moves!`;
      resultEl.classList.remove("hidden");
  }

  matchBtn.addEventListener("click",()=>{
      matchModal.style.display="flex";
      startMatchGame();
  });
  closeMatch.addEventListener("click",()=>{
      matchModal.style.display="none";
      clearInterval(timerInterval);
  });
  restartBtn.addEventListener("click",()=>startMatchGame());
  
  // --- Create Set Modal ---
  const createSetBtn = document.getElementById("createSetBtn");
  const createSetModal = document.getElementById("createSetModal");
  const closeCreateSet = document.getElementById("closeCreateSet");
  const createSetTextarea = document.getElementById("createSetTextarea");
  const termInput = document.getElementById("termInput");
  const definitionInput = document.getElementById("definitionInput");
  const imageInput = document.getElementById("imageInput");
  const addCardBtn = document.getElementById("addCardBtn");
  const clearSetBtn = document.getElementById("clearSetBtn");
  const copySetBtn = document.getElementById("copySetBtn");

  function isValidImageUrl(url) {
    return new Promise((resolve) => {
      if (!url) return resolve(false);

      const img = new Image();
      img.onload = () => resolve(true); 
      img.onerror = () => resolve(false); 
      img.src = url;
    });
  }

  createSetBtn.addEventListener("click", () => {
      createSetModal.style.display = "flex";
      createSetTextarea.value = JSON.stringify(currentSet, null, 2);
  });

  closeCreateSet.addEventListener("click", () => {
    renderFlashcards();
    createSetModal.style.display = "none"
  });

  addCardBtn.addEventListener("click", async () => {
      const term = termInput.value.trim();
      const definition = definitionInput.value.trim();
      let image = imageInput.value.trim();
      if (image) {
        if (!await isValidImageUrl(image)) image = false;
      }
      if(!term || !definition) return showToast("Term and Definition are required!", "error");
      
      const newCard = {
          id: currentSet.length ? Math.max(...currentSet.map(c=>c.id))+1 : 1,
          term,
          definition,
          image: image || ""
      };
      currentSet.push(newCard);
      createSetTextarea.value = JSON.stringify(currentSet, null, 2);
      createSetTextarea.scrollTop = createSetTextarea.scrollHeight;
      termInput.value = definitionInput.value = imageInput.value = "";
  });

  clearSetBtn.addEventListener("click", () => {
      currentSet.length = 0;
      createSetTextarea.value = JSON.stringify(currentSet, null, 2);
  });

  copySetBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(createSetTextarea.value)
          .then(()=>showToast("Set JSON copied!", "success"))
          .catch(()=>showToast("Failed to copy!", "error"));
  });
  
  createSetTextarea.addEventListener("input", () => {
      try {
          const parsed = JSON.parse(createSetTextarea.value);
          if(Array.isArray(parsed)) currentSet = parsed;
      } catch(e) { return; }
  });
});