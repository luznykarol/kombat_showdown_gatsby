import React, { useState } from "react"
import Collapse from "../collapse/collapse"
import styled from "styled-components"
const Wrapper = styled.div`
  margin: 0 auto;
`
const CollapseWrap = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Kiedy odbędzie się turniej?",
      answer:
        "Turniej odbędzie się w dniach 9-10 stycznia 2021, na platformie PS4 online. Jeśli jesteś nowy na discordzie, pamiętaj aby podać organizatorom swój nick na PSN. Znacznie ułatwi nam to pracę.",
      open: false,
    },
    {
      question: "O której godzinie się zaczyna?",
      answer:
        "Startujemy o godzinie 14:00. Zawodnikom przypominamy, że check-in należy wykonać na około pół godziny przed startem turnieju.",
      open: false,
    },
    {
      question:
        "Jaka jest wysokość wpisowego? Na co przeznaczona jest ta kwota?",
      answer: "30 zł. Całość kwoty jest przeznaczona na nagrody.",
      open: false,
    },
    {
      question: "Co jeśli mogę grać tylko na wifi?",
      answer:
        "Nie ograniczamy naszych zawodników do konieczności używania kabla, natomiast zwracamy uwagę, że jeśli rozgrywka nie będzie przebiegać płynnie, możemy zdecydować o wydaleniu Cię z turnieju. Nigdy natomiast do takiej sytuacji nie doszło. W jakis sposób rozwiązujemy takie spory dowiesz się w zakładce 'Regulamin'.",
      open: false,
    },
    {
      question: "Jakie wymagania muszę spełniać aby wziąć udział w turnieju?",
      answer:
        "Jedynym warunkiem koniecznym jest dołączenie do Discorda Polska Scena NRS pod tym linkiem https://discord.gg/CSJCy2 . To tutaj na bieżąco komunikujemy się z graczami, przekazujemy nowe informacje i informujemy o zmianach.",
      open: false,
    },
    {
      question: "Gdzie mogę sprawdzić z kim gram?",
      answer:
        "Zajrzyj na naszego smasha - https://smash.gg/tournament/the-kombat-showdown. 6 stycznia o godzinie 20:00 zamykamy zapisy, więc już następnego dnia będziesz dokładnie wiedzieć z kim grasz.",
      open: false,
    },
    {
      question: "Co jeśli zdecyduje się zapisać po 6 stycznia?",
      answer:
        "Jako organizatorzy decydujemy się ograniczać ilość wolnych miejsc na zapisy, aby turniej przebiegał tak sprawnie jak się tylko da. Jeśli po wskazanej dacie zdecydujesz się dołączyć a będzie miejsce, postaramy się dopisać Cię w wolne miejsce. W przypadku pełnego obstawienia miejsc, trafisz na listę rezerwową.",
      open: false,
    },
    {
      question: "Czy wydarzenie będzie można gdzieś obejrzeć?",
      answer:
        "Jasne! Nasza ekipa ciężko pracuje aby dopieszczać nasze transmisje i zapewnić zabawę nie tylko grającym ale i oglądającym. Oglądać nas możesz na kanale https://www.twitch.tv/thekombatshowdown",
      open: false,
    },
  ])

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }
        return faq
      })
    )
  }

  return (
    <Wrapper>
      {faqs.map((faq, i) => (
        <Collapse faq={faq} key={i} index={i} toggleFAQ={toggleFAQ}></Collapse>
      ))}
    </Wrapper>
  )
}

export default CollapseWrap
