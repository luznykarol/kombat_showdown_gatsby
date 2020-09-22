// eslint-disable-next-line no-use-before-define
const rulesData = {
  details: {
    title: "Szczegóły turnieju",
    text: [
      `1.Turniej będzie odbywał się w systemie Double Elimination (Grupy + Top8).`,
      `2.W grupach mecze odbywają się systemem FT2, natomiast w top8 FT3.`,
      `3.Awans do top8 uzyskuje 2-óch najlepszych graczy, jeden awansuje do winners bracket, a\u00A0drugi do losers bracket.`,
      `4.Turniej odbędzie się 17.10.2020 (sobota) `,
      `5.Planowana godzina rozpoczęcia turnieju to 14:00`,
    ],
  },
  match: {
    title: "Szczegóły meczu",
    text: [
      `1. Czas rundy: 90 sekund.`,
      `2. Wybór areny losowy (random select).`,
      `
          3. Tylko przegrany może zmienić postać.`,
      `4. Wariacje: Wariacje trybu turniejowego.`,
      `5. W przypadku rozłączenia się któregoś z graczy, mecz należy rozpatrzeć według następujących czynników:`,
    ],
    subText: [
      `Jeśli mecz został przerwany tuż po starcie rundy, gracze powinni wrócić do stanu sprzed disconnecta i kontynuują walkę.`,
      `Jeśli mecz został przerwany w momencie gdy jeden z graczy miał zostać zabity – traci on rundę. Jeśli sytuacja powtórzy się – przegrywa walkę.`,
      `Jeśli mecz został przerwany przez osobę mająca przewagę w punktach życia, osoba która się rozłączy powinna przedstawić krótki filmik bądź screenshota, potwierdzającego sytuację. Gracze wracają wówczas do stanu walki sprzed rozłączenia. Jeśli sytuacja się powtórzy – gracz traci rundę, za trzecim – zostaje wydalony z turnieju.`,
      `
Jeżeli w ciągu całego turnieju gracz zostanie zgłoszony przez 3 graczy, z powodu występowania lagów w trakcie walki – musi on przeprowadzić test szybkości Internetu i\u00A0jego rezultat wysłać do organizatora. Jeżeli test wykaże że minimalna prędkość pobierania wyniesie przynajmniej 5mb/s, to uznaje się, że gracz jest zdolny do\u00A0kontynuowania turnieju.`,
    ],
  },
  punctuality: {
    title: "Punktualność",
    text: [
      "1.Gracze mają 15 minut aby zgłosić się na swój mecz od momentu jego wystartowania. Jeżeli z danej pary przeciwnik nie zjawi się w ciągu 5 minut należy zgłosić ten fakt organizatorom na kanale 'The Kombat Showdown – Wyniki'. Od tego momentu liczone jest kolejne 10 minut i jeśli w przeciągu tego czasu przeciwnik nie zjawi się, osoba oczekująca wygrywa walkę walkowerem.",
      "2.Gracze są zobowiązani do stałego kontaktu z organizatorami poprzez specjalny kanał na\u00A0platformie Discord.",
    ],
  },
  results: {
    title: "Wyniki",
    text: [
      "1.Wyniki zgłaszamy na kanale 'The Kombat Showdown – Wyniki'",
      "2.Każdy z dwójki graczy jest zobowiązany zgłosić wynik meczów, w przypadkach spornych, zawodnicy będą proszeni o przesłanie screenshota, bądź całego meczu na platformę YouTube.",
    ],
  },
  rest: {
    title: "Reszta zasad",
    text: [
      `1.Zabronione jest spamowanie na kanałach turniejowych na których przeciwnicy stawiają się do meczu oraz zgłaszają wyniki, wszelakie luźne dyskusje będą toczyły się na kanale “The\u00A0Kombat Showdown”. W przypadku nie stosowania się do powyższego organizator zastrzega sobie prawo do wydalenia takiej osoby z turnieju.`,
      `2.Organizator turnieju zastrzega sobie prawo do anulowania, zawieszenia i / lub modyfikacji zawodów lub dowolnej jego części, jeżeli jakiekolwiek oszustwo, awarie techniczne lub inne czynniki naruszają integralność lub prawidłowe funkcjonowanie zawodów.`,
      `3.Organizator zastrzega sobie prawo do zamknięcia zapisów ze względu na zbyt dużą ilość graczy, oraz na rozłożenie turnieju na 2 dni to jest 17.10 (sobota) oraz 18.10 (niedziela).`,
    ],
  },
  stream: {
    title: "Transmisja",
    text: `1.Stream będzie nadawany na kanale www.twitch.tv/thekombatshowdown`,
  },
}

export default rulesData
