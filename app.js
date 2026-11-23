document.addEventListener("DOMContentLoaded", () => {
  const ROUND_DURATION_SECONDS = 120;
  const STAKE_BIRR = 10;

  const state = {
    lang: "am",
    rulesLang: "am",
    theme: "dark",
    sound: true,
    phone: "0912341486",
    balance: 6.0,
    roundId: 352443,
    status: "waiting",
    secondsLeft: ROUND_DURATION_SECONDS,
    selectedBingo: null,
    rangeStart: 1,
    rangeEnd: 150,
    calledNumbers: [],
    autoMark: true,
    boardCollapsed: false,
    winnerInfo: {
      phone: "0925**7220",
      cardNum: 89,
      payoutBirr: 512.0,
      cardCells: [12, 24, 38, 51, 67, 4, 19, 33, 49, 71, 9, 27, "FREE", 56, 63, 14, 22, 41, 59, 74, 7, 30, 44, 53, 69],
      hits: [12, 38, 51, 4, 33, 71, 27, "FREE", 56, 14, 41, 74, 44, 69],
    },
  };

  const I18N = {
    am: {
      login_tab: "ይግቡ",
      register_tab: "መለያ ይክፈቱ",
      welcome_back: "እንኳን ደህና መጡ",
      enter_info: "ለመግባት መረጃዎን ያስገቡ",
      phone_label: "ስልክ ቁጥር",
      password_label: "የይለፍ ቃል",
      forgot_password: "የይለፍ ቃል ረሱት?",
      login_btn: "ይግቡ",
      install_app: "Install",
      rules: "ህጎች",
      refresh: "አድስ",
      exit: "ውጣ",
      game_round: "ጨዋታ",
      stake: "ዋጋ",
      status: "ሁኔታ",
      waiting_status: "በመጠባበቅ ...",
      drawing_status: "በመሳል ላይ",
      winner_status: "አሸናፊ ተገኝቷል",
      account: "ሒሳብ",
      payout_label: "ሽልማት:",
      next_game_in: "ጨዋታ ሊጀመር",
      selected_bingo: "የተመረጠ ቢንጎ:",
      select_number_600: "የቢንጎ ቁጥር ይምረጡ (1 – 600)",
      go: "ሂድ",
      all_600: "ሁሉም (600)",
      join_or_watch: "ቢንጎ ይምረጡ / ጨዋታ ይጀምሩ",
      card_label: "ካርቴላ",
      prize_label: "ሽልማት",
      stake_short: "ዋጋ",
      back_to_select: "1–600 ምርጫ",
      auto_mark: "በራሱ ምልክት",
      claim_bingo: "ቢንጎ! (BINGO)",
      spectator_title: "እየተመለከቱ ነው",
      spectator_desc: "አሁን ጨዋታ በመካሄድ ላይ ነው። በሚቀጥለው ዙር መቀላቀል ይችላሉ።",
      bingo_word: "ቢንጎ",
      winner_badge: "አሸናፊ",
      play_again: "እንደገና ተጫወት",
      total_balance: "ጠቅላላ",
      withdrawable: "ሊወጣ የሚችል",
      deposit: "ማስገባት",
      withdraw: "ማውጣት",
      tx_history: "የግብይት ታሪክ",
      game_history: "የጨዋታ ታሪክ",
      settings: "ሴቲንግ",
      theme: "ገጽታ",
      sound: "ድምጽ",
      language: "ቋንቋ",
      notifications: "Notifications",
      notif_desc: "ካርቴላ ካስመዘገብኩኝ ብቻ",
      game_rules: "የጨዋታ ህጎች",
      enter_btn: "ገባኝ",
    },
    ti: {
      login_tab: "እቶ",
      register_tab: "ሕሳብ ክፈት",
      welcome_back: "እንቋዕ ብደሓን መጻእኩም",
      enter_info: "ንምእታው ሓበሬታኹም የእትዉ",
      phone_label: "ቁጽሪ ስልኪ",
      password_label: "መሕለፊ ቃል",
      forgot_password: "መሕለፊ ቃል ረሲዕኩም?",
      login_btn: "እቶ",
      install_app: "Install",
      rules: "ሕግታት",
      refresh: "ኣሐድስ",
      exit: "ውጻእ",
      game_round: "ጸወታ",
      stake: "ዋጋ",
      status: "ኩነታት",
      waiting_status: "ኣብ ምጽባይ ...",
      drawing_status: "ኣብ ምውጻእ",
      winner_status: "ተዓዋቲ ተረኺቡ",
      account: "ሕሳብ",
      payout_label: "ሽልማት:",
      next_game_in: "ጸወታ ክጅምር",
      selected_bingo: "ዝተመርጸ ቢንጎ:",
      select_number_600: "ቁጽሪ ቢንጎ ይምረጡ (1 – 600)",
      go: "ኪድ",
      all_600: "ኩሉ (600)",
      join_or_watch: "ቢንጎ ምረጽ / ጸወታ ጀምር",
      card_label: "ካርቴላ",
      prize_label: "ሽልማት",
      stake_short: "ዋጋ",
      back_to_select: "1–600 ምርጫ",
      auto_mark: "ባዕሉ ምልክት",
      claim_bingo: "ቢንጎ! (BINGO)",
      spectator_title: "ይከታተሉ ኣለዉ",
      spectator_desc: "ሕጂ ጸወታ ይካየድ ኣሎ። ኣብ ዝቕጽል ዙር ክትሳተፉ ትኽእሉ ኢኹም።",
      bingo_word: "ቢንጎ",
      winner_badge: "ተዓዋቲ",
      play_again: "ደጊምካ ተጻወት",
      total_balance: "ጠቅላላ",
      withdrawable: "ክወጽእ ዝኽእል",
      deposit: "ምእታው",
      withdraw: "ምውጻእ",
      tx_history: "ታሪኽ ግብይት",
      game_history: "ታሪኽ ጸወታ",
      settings: "ሴቲንግ",
      theme: "ቅዲ",
      sound: "ድምጽ",
      language: "ቋንቋ",
      notifications: "Notifications",
      notif_desc: "ካርቴላ ምስ ኣመዝገብኩ ጥራይ",
      game_rules: "ሕግታት ጸወታ",
      enter_btn: "ተረዲእኒ",
    },
    en: {
      login_tab: "Login",
      register_tab: "Register",
      welcome_back: "Welcome Back",
      enter_info: "Enter your details to sign in",
      phone_label: "Phone Number",
      password_label: "Password",
      forgot_password: "Forgot password?",
      login_btn: "Login",
      install_app: "Install",
      rules: "Rules",
      refresh: "Refresh",
      exit: "Exit",
      game_round: "Round",
      stake: "Stake",
      status: "Status",
      waiting_status: "Waiting ...",
      drawing_status: "Drawing",
      winner_status: "Winner Found",
      account: "Account",
      payout_label: "Payout:",
      next_game_in: "Game starts in",
      selected_bingo: "Selected Bingo:",
      select_number_600: "Select Bingo Number (1 – 600)",
      go: "Go",
      all_600: "All (600)",
      join_or_watch: "Select Bingo / Start Game",
      card_label: "Card",
      prize_label: "Prize",
      stake_short: "Stake",
      back_to_select: "1–600 Select",
      auto_mark: "Auto Mark",
      claim_bingo: "BINGO!",
      spectator_title: "Spectating Live Round",
      spectator_desc: "A round is currently in progress. You can join the next 2-minute round.",
      bingo_word: "BINGO",
      winner_badge: "WINNER",
      play_again: "Play Again",
      total_balance: "Total",
      withdrawable: "Withdrawable",
      deposit: "Deposit",
      withdraw: "Withdraw",
      tx_history: "Transactions",
      game_history: "Game History",
      settings: "Settings",
      theme: "Theme",
      sound: "Sound",
      language: "Language",
      notifications: "Notifications",
      notif_desc: "Only when I register a card",
      game_rules: "Game Rules",
      enter_btn: "Got It",
    },
  };

  const RULES_BY_LANG = {
    am: [
      "እያንዳንዱ የቢንጎ ዙር በየ 2 ደቂቃው (120 ሰከንድ) ይካሄዳል።",
      "ከ 1 እስከ 600 ካሉ የቢንጎ ቁጥሮች ውስጥ የመረጡትን ቁጥር ይምረጡ።",
      "የመረጡት የቢንጎ ቁጥር እና የሒሳብ ቀሪ ገንዘብ በማያ ገጽ ላይ በግልጽ ይታያሉ።",
      "ቢንጎ ሲያሟሉ የቢንጎ ቁልፍን ይጫኑ ወይም በራሱ ምልክት ይከታተሉ።",
      "የአሸናፊ ሽልማት በብር (ETB) ብቻ ይከፈላል።",
    ],
    ti: [
      "ነፍሲ ወከፍ ዙር ቢንጎ ኣብ ነፍሲ ወከፍ 2 ደቒቓ (120 ካልኢት) ይካየድ።",
      "ካብ 1 ክሳብ 600 ዘለዉ ቁጽርታት ቢንጎ ዝደለኹሞ ይምረጡ።",
      "ዝመረጽኩሞ ቁጽሪ ቢንጎን ሚዛን ሕሳብኩምን ብንጹር ይርአዩ።",
      "ቢንጎ ምስ ኣማላእኩም ቢንጎ ይጠውቑ ወይ ብኣውቶማቲክ ይከታተሉ።",
      "ሽልማት ተዓዋቲ ብብር (ETB) ጥራይ ይኽፈል።",
    ],
    en: [
      "Each Bingo round runs on a 2-minute (120-second) cycle.",
      "Pick your Bingo number from 1 to 600 on the selector grid.",
      "Your selected Bingo number and wallet balance remain visible on screen.",
      "Press BINGO when you complete a winning pattern or use Auto Mark.",
      "Payouts are awarded strictly in Birr (ETB).",
    ],
  };

  const els = {
    splash: document.getElementById("splash-screen"),
    loginView: document.getElementById("login-view"),
    mainApp: document.getElementById("main-app"),
    selectorView: document.getElementById("selector-view"),
    drawView: document.getElementById("draw-view"),
    winnerView: document.getElementById("winner-view"),
    accountDrawer: document.getElementById("account-drawer"),
    rulesModal: document.getElementById("rules-modal"),
    toast: document.getElementById("toast-banner"),
    roundNumber: document.getElementById("round-number"),
    stakeDisplay: document.getElementById("stake-display"),
    gameStatusText: document.getElementById("game-status-text"),
    balanceDisplay: document.getElementById("balance-display"),
    maskedPhoneDisplay: document.getElementById("masked-phone-display"),
    payoutBirrDisplay: document.getElementById("payout-birr-display"),
    countdownClock: document.getElementById("countdown-clock"),
    selectedBingoPill: document.getElementById("selected-bingo-pill"),
    numberGrid600: document.getElementById("number-grid-600"),
    rangePageInfo: document.getElementById("range-page-info"),
    jumpInput: document.getElementById("jump-number-input"),
    recentCalledList: document.getElementById("recent-called-list"),
    bingo75Board: document.getElementById("bingo-75-board"),
    rulesList: document.getElementById("rules-list"),
  };

  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.remove("hidden");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      els.toast.classList.add("hidden");
    }, 2400);
  }

  function maskPhone(phone) {
    const clean = (phone || "").replace(/\D/g, "");
    if (clean.length < 8) return "0912**1486";
    return `${clean.slice(0, 4)}**${clean.slice(-4)}`;
  }

  function formatBirr(val) {
    return `${Number(val).toFixed(2)} ETB`;
  }

  function formatMinutesCountdown(sec) {
    const safeSec = Math.max(0, sec);
    const mins = Math.ceil(safeSec / 60);
    const mm = String(Math.floor(safeSec / 60)).padStart(2, "0");
    const ss = String(safeSec % 60).padStart(2, "0");
    return `${mins} min (${mm}:${ss})`;
  }

  function applyTranslations() {
    const dict = I18N[state.lang] || I18N.am;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    if (state.status === "waiting") els.gameStatusText.textContent = dict.waiting_status;
    else if (state.status === "drawing") els.gameStatusText.textContent = dict.drawing_status;
    else els.gameStatusText.textContent = dict.winner_status;

    document.querySelectorAll(".lang-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === state.lang);
    });
    document.getElementById("drawer-lang-select").value = state.lang;
    renderRulesList();
  }

  function renderRulesList() {
    const items = RULES_BY_LANG[state.rulesLang] || RULES_BY_LANG.am;
    els.rulesList.innerHTML = items.map((line) => `<li>${line}</li>`).join("");
    document.querySelectorAll(".rules-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.getAttribute("data-rlang") === state.rulesLang);
    });
  }

  function renderHeaderAndWallet() {
    els.roundNumber.textContent = `#${state.roundId}`;
    els.stakeDisplay.textContent = `${STAKE_BIRR} ETB`;
    els.balanceDisplay.textContent = formatBirr(state.balance);
    els.maskedPhoneDisplay.textContent = maskPhone(state.phone);
    els.payoutBirrDisplay.textContent = formatBirr(state.winnerInfo.payoutBirr);
    els.countdownClock.textContent = formatMinutesCountdown(state.secondsLeft);
    els.selectedBingoPill.textContent = state.selectedBingo ? `#${state.selectedBingo}` : "—";

    document.getElementById("drawer-phone").textContent = state.phone;
    document.getElementById("drawer-total-balance").textContent = formatBirr(state.balance);
    document.getElementById("drawer-withdrawable").textContent = state.balance.toFixed(2);
    document.getElementById("live-card-num").textContent = state.selectedBingo ? `#${state.selectedBingo}` : "#64";
    document.getElementById("live-prize-birr").textContent = formatBirr(state.winnerInfo.payoutBirr);
    document.getElementById("live-stake-birr").textContent = `${STAKE_BIRR} ETB`;
    document.getElementById("draw-round-label").textContent = `Round ID: ${state.roundId}`;
  }

  function renderGrid600() {
    const { rangeStart, rangeEnd, selectedBingo } = state;
    els.rangePageInfo.textContent = `${rangeStart} - ${rangeEnd}`;
    const fragment = document.createDocumentFragment();

    for (let n = rangeStart; n <= rangeEnd; n++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "num-tile";
      if (selectedBingo === n) btn.classList.add("selected");
      btn.textContent = String(n);
      btn.addEventListener("click", () => {
        state.selectedBingo = n;
        renderGrid600();
        renderHeaderAndWallet();
        showToast(`Bingo #${n} selected`);
      });
      fragment.appendChild(btn);
    }

    els.numberGrid600.innerHTML = "";
    els.numberGrid600.appendChild(fragment);
  }

  function init75Board() {
    const ranges = {
      B: [1, 15],
      I: [16, 30],
      N: [31, 45],
      G: [46, 60],
      O: [61, 75],
    };

    Object.entries(ranges).forEach(([col, [start, end]]) => {
      const container = els.bingo75Board.querySelector(`.col-cells[data-col="${col}"]`);
      container.innerHTML = "";
      for (let num = start; num <= end; num++) {
        const cell = document.createElement("div");
        cell.className = "board-cell";
        cell.dataset.num = String(num);
        cell.textContent = String(num);
        container.appendChild(cell);
      }
    });
  }

  function updateBoardCalls() {
    const latest = state.calledNumbers[state.calledNumbers.length - 1];
    els.bingo75Board.querySelectorAll(".board-cell").forEach((cell) => {
      const num = Number(cell.dataset.num);
      cell.classList.remove("called", "current-call");
      if (state.calledNumbers.includes(num)) cell.classList.add("called");
      if (num === latest) cell.classList.add("current-call");
    });

    els.recentCalledList.innerHTML = state.calledNumbers
      .slice(-10)
      .map((num, idx, arr) => {
        const isLast = idx === arr.length - 1;
        return `<span class="called-ball ${isLast ? "latest" : ""}">${num}</span>`;
      })
      .join("");
  }

  function switchView(viewName) {
    els.selectorView.classList.add("hidden");
    els.drawView.classList.add("hidden");
    els.winnerView.classList.add("hidden");

    if (viewName === "selector") els.selectorView.classList.remove("hidden");
    else if (viewName === "draw") els.drawView.classList.remove("hidden");
    else if (viewName === "winner") els.winnerView.classList.remove("hidden");
  }

  function renderWinnerCard() {
    const w = state.winnerInfo;
    document.getElementById("winner-phone").textContent = w.phone;
    document.getElementById("winner-card-ref").textContent = `Bingo #${w.cardNum}`;
    document.getElementById("winner-payout-birr").textContent = formatBirr(w.payoutBirr);

    const gridEl = document.getElementById("winner-mini-grid");
    gridEl.innerHTML = w.cardCells
      .map((val) => {
        const isHit = w.hits.includes(val);
        return `<div class="mini-card-cell ${isHit ? "hit" : ""}">${val}</div>`;
      })
      .join("");
  }

  function startNew2MinuteRound() {
    state.roundId += 1;
    state.secondsLeft = ROUND_DURATION_SECONDS;
    state.status = "waiting";
    state.calledNumbers = [];
    updateBoardCalls();
    applyTranslations();
    renderHeaderAndWallet();
    switchView("selector");
  }

  setTimeout(() => {
    els.splash.style.opacity = "0";
    setTimeout(() => {
      els.splash.classList.add("hidden");
      els.rulesModal.classList.remove("hidden");
    }, 350);
  }, 900);

  setInterval(() => {
    if (state.secondsLeft > 0) {
      state.secondsLeft -= 1;
    } else {
      startNew2MinuteRound();
    }

    if (state.status === "drawing" && state.calledNumbers.length < 24 && state.secondsLeft % 3 === 0) {
      let nextBall;
      do {
        nextBall = Math.floor(Math.random() * 75) + 1;
      } while (state.calledNumbers.includes(nextBall));
      state.calledNumbers.push(nextBall);
      updateBoardCalls();
    }

    renderHeaderAndWallet();
  }, 1000);

  document.querySelectorAll(".range-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".range-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      state.rangeStart = Number(tab.dataset.start);
      state.rangeEnd = Number(tab.dataset.end);
      renderGrid600();
    });
  });

  document.getElementById("jump-number-btn").addEventListener("click", () => {
    const target = Number(els.jumpInput.value);
    if (!target || target < 1 || target > 600) {
      showToast("Enter a number from 1 to 600");
      return;
    }
    state.selectedBingo = target;
    const blockIndex = Math.floor((target - 1) / 150);
    state.rangeStart = blockIndex * 150 + 1;
    state.rangeEnd = Math.min(600, (blockIndex + 1) * 150);
    renderGrid600();
    renderHeaderAndWallet();
    showToast(`Selected Bingo #${target}`);
  });

  document.getElementById("btn-start-draw").addEventListener("click", () => {
    if (!state.selectedBingo) {
      showToast("Select a Bingo number (1–600) first");
      return;
    }
    state.status = "drawing";
    if (state.calledNumbers.length === 0) {
      state.calledNumbers = [14, 29, 42, 58, 71];
    }
    updateBoardCalls();
    applyTranslations();
    renderHeaderAndWallet();
    switchView("draw");
  });

  document.getElementById("btn-back-selector").addEventListener("click", () => {
    switchView("selector");
  });

  document.getElementById("btn-claim-bingo").addEventListener("click", () => {
    state.status = "winner";
    state.winnerInfo.cardNum = state.selectedBingo || 89;
    applyTranslations();
    renderWinnerCard();
    switchView("winner");
  });

  document.getElementById("btn-play-again").addEventListener("click", () => {
    startNew2MinuteRound();
  });

  document.querySelectorAll(".lang-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.lang = pill.getAttribute("data-lang");
      applyTranslations();
    });
  });

  document.getElementById("drawer-lang-select").addEventListener("change", (e) => {
    state.lang = e.target.value;
    applyTranslations();
  });

  document.querySelectorAll(".rules-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.rulesLang = tab.getAttribute("data-rlang");
      renderRulesList();
    });
  });

  document.getElementById("btn-rules-top").addEventListener("click", () => {
    els.rulesModal.classList.remove("hidden");
  });
  document.getElementById("close-rules-btn").addEventListener("click", () => {
    els.rulesModal.classList.add("hidden");
  });
  document.getElementById("accept-rules-btn").addEventListener("click", () => {
    els.rulesModal.classList.add("hidden");
  });

  const openDrawer = () => els.accountDrawer.classList.remove("hidden");
  const closeDrawer = () => els.accountDrawer.classList.add("hidden");
  document.getElementById("open-account-btn").addEventListener("click", openDrawer);
  document.getElementById("menu-drawer-btn").addEventListener("click", openDrawer);
  document.getElementById("close-account-btn").addEventListener("click", closeDrawer);
  document.getElementById("close-account-backdrop").addEventListener("click", closeDrawer);

  document.getElementById("theme-dark-btn").addEventListener("click", () => {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
    document.getElementById("theme-dark-btn").classList.add("active");
    document.getElementById("theme-light-btn").classList.remove("active");
  });

  document.getElementById("theme-light-btn").addEventListener("click", () => {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
    document.getElementById("theme-light-btn").classList.add("active");
    document.getElementById("theme-dark-btn").classList.remove("active");
  });

  document.getElementById("btn-refresh-top").addEventListener("click", () => {
    renderHeaderAndWallet();
    renderGrid600();
    showToast("Refreshed");
  });

  document.getElementById("btn-exit-top").addEventListener("click", () => {
    els.mainApp.classList.add("hidden");
    els.loginView.classList.remove("hidden");
  });

  document.getElementById("auth-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const phoneVal = document.getElementById("phone-input").value.trim();
    if (phoneVal) state.phone = phoneVal;
    els.loginView.classList.add("hidden");
    els.mainApp.classList.remove("hidden");
    renderHeaderAndWallet();
    showToast(`Welcome ${state.phone}`);
  });

  document.getElementById("toggle-board-btn").addEventListener("click", (e) => {
    state.boardCollapsed = !state.boardCollapsed;
    els.bingo75Board.classList.toggle("hidden", state.boardCollapsed);
    e.target.textContent = state.boardCollapsed ? "▼" : "▲";
  });

  let walletMode = "tx_history";
  const txLogs = [{ label: "Initial Balance", amount: "+6.00 ETB" }];
  const gameLogs = [{ label: "Round #352442 — Bingo #64", amount: "10.00 ETB" }];

  function renderWalletSubpanel() {
    const titleEl = document.getElementById("wallet-panel-title");
    const amtControls = document.getElementById("wallet-amount-controls");
    const listEl = document.getElementById("wallet-history-list");

    amtControls.classList.toggle("hidden", walletMode !== "deposit" && walletMode !== "withdraw");

    if (walletMode === "deposit") titleEl.textContent = "Deposit (ETB)";
    else if (walletMode === "withdraw") titleEl.textContent = "Withdraw (ETB)";
    else if (walletMode === "game_history") titleEl.textContent = "Game History";
    else titleEl.textContent = "Transaction History";

    const rows = walletMode === "game_history" ? gameLogs : txLogs;
    listEl.innerHTML = rows
      .map((r) => `<li class="wallet-history-item"><span>${r.label}</span><strong>${r.amount}</strong></li>`)
      .join("");
  }

  document.querySelectorAll(".qa-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      walletMode = btn.getAttribute("data-action");
      renderWalletSubpanel();
    });
  });

  document.getElementById("wallet-confirm-btn").addEventListener("click", () => {
    const rawAmt = Number(document.getElementById("wallet-amount-input").value);
    if (!rawAmt || rawAmt <= 0) {
      showToast("Enter a valid ETB amount");
      return;
    }
    if (walletMode === "deposit") {
      state.balance += rawAmt;
      txLogs.unshift({ label: "Deposit", amount: `+${rawAmt.toFixed(2)} ETB` });
      showToast(`Deposited ${rawAmt.toFixed(2)} ETB`);
    } else if (walletMode === "withdraw") {
      if (rawAmt > state.balance) {
        showToast("Insufficient balance");
        return;
      }
      state.balance -= rawAmt;
      txLogs.unshift({ label: "Withdraw", amount: `-${rawAmt.toFixed(2)} ETB` });
      showToast(`Withdrew ${rawAmt.toFixed(2)} ETB`);
    }
    renderHeaderAndWallet();
    renderWalletSubpanel();
  });

  document.getElementById("sync-wallet-btn").addEventListener("click", () => {
    renderHeaderAndWallet();
    renderWalletSubpanel();
    showToast("Balance synced");
  });

  let deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
  });

  document.getElementById("btn-install-app").addEventListener("click", async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    } else {
      showToast("BINGO ET ready — use browser menu 'Add to Home screen'");
    }
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  init75Board();
  renderGrid600();
  applyTranslations();
  renderHeaderAndWallet();
  renderWalletSubpanel();
});
