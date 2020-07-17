import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"

const RulesList = styled.ul`
  li {
    &:not(:last-of-type) {
      margin: 0 0 8px 0;
    }

    ul {
      margin: 8px 0 0 16px;
      padding: 0 0 0 16px;
      li {
        list-style-type: square;
      }
    }
  }
`

const Rules = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Regulamin Turnieju</h1>

    <Card>
      <h3>Szczegóły turnieju</h3>
      <RulesList>
        <li>
          1.Turniej będzie odbywał się w systemie Double Elimination (Grupy +
          Top8).
        </li>

        <li>
          2.W grupach mecze odbywają się systemem FT2, natomiast w top8 FT3.
        </li>

        <li>
          3.Awans do top8 uzyskuje 2-óch najlepszych graczy, jeden awansuje do
          winners bracket, a drugi do losers bracket.
        </li>
        <li>4.Turniej odbędzie się 23.05.2020 (sobota) </li>
      </RulesList>

      <h3>Szczegóły meczu</h3>
      <RulesList>
        <li>1. Czas rundy: 90 sekund.</li>
        <li>2. Wybór areny losowy (random select).</li>
        <li>3. Tylko przegrany może zmienić postać.</li>
        <li>4. Wariacje: Wariacje trybu turniejowego.</li>
        <li>
          5. W przypadku rozłączenia się któregoś z graczy, mecz należy
          rozpatrzeć według następujących czynników:
          <ul>
            <li>
              Jeśli mecz został przerwany tuż po starcie rundy, gracze powinni
              wrócić do stanu sprzed disconnecta i kontynuują walkę.{" "}
            </li>
            <li>
              Jeśli mecz został przerwany w momencie gdy jeden z graczy miał
              zostać zabity – traci on rundę. Jeśli sytuacja powtórzy się –
              przegrywa walkę.
            </li>
            <li>
              Jeśli mecz został przerwany przez osobę mająca przewagę w punktach
              życia, osoba która się rozłączy powinna przedstawić krótki filmik
              bądź screenshota, potwierdzającego sytuację. Gracze wracają
              wówczas do stanu walki sprzed rozłączenia. Jeśli sytuacja się
              powtórzy – gracz traci rundę, za trzecim – zostaje wydalony z
              turnieju.{" "}
            </li>
            <li>
              Jeżeli w ciągu całego turnieju gracz zostanie zgłoszony przez 3
              graczy, z powodu występowania lagów w trakcie walki – musi on
              przeprowadzić test szybkości Internetu i jego rezultat wysłać do
              organizatora. Jeżeli test wykaże że minimalna prędkość pobierania
              wyniesie przynajmniej 5mb/s, to uznaje się, że gracz jest zdolny
              do kontynuowania turnieju.{" "}
            </li>
          </ul>
        </li>
      </RulesList>
      <h3>Punktualność</h3>
      <RulesList>
        <li>
          1.Gracze mają 15 minut aby zgłosić się na swój mecz od momentu jego
          wystartowania. Jeżeli z danej pary przeciwnik nie zjawi się w ciągu 5
          minut należy zgłosić ten fakt organizatorom na kanale „The Kombat
          Showdown – Wyniki”. Od tego momentu liczone jest kolejne 10 minut i
          jeśli w przeciągu tego czasu przeciwnik nie zjawi się, osoba
          oczekująca wygrywa walkę walkowerem.
        </li>
        <li>
          2.Gracze są zobowiązani do stałego kontaktu z organizatorami poprzez
          specjalny kanał na platformie Discord.
        </li>
      </RulesList>

      <h3>Zgłaszanie wyników </h3>
      <RulesList>
        <li>
          1.Wyniki zgłaszamy na kanale “The Kombat Showdown – Wyniki" 2.Każdy z
          dwójki graczy jest zobowiązany zgłosić wynik meczów, w przypadkach
          spornych, zawodnicy będą proszeni o przesłanie screenshota, bądź
          całego meczu na platformę YouTube.
        </li>
      </RulesList>

      <h3>Pozostałe zasady </h3>
      <RulesList>
        <li>
          1.Zabronione jest spamowanie na kanałach turniejowych na których
          przeciwnicy stawiają się do meczu oraz zgłaszają wyniki, wszelakie
          luźne dyskusje będą toczyły się na kanale “The Kombat Showdown”. W
          przypadku nie stosowania się do powyższego organizator zastrzega sobie
          prawo do wydalenia takiej osoby z turnieju.
        </li>
        <li>
          2.Organizator turnieju zastrzega sobie prawo do anulowania,
          zawieszenia i / lub modyfikacji zawodów lub dowolnej jego części,
          jeżeli jakiekolwiek oszustwo, awarie techniczne lub inne czynniki
          naruszają integralność lub prawidłowe funkcjonowanie zawodów.
          3.Organizator zastrzega sobie prawo do zamknięcia zapisów ze względu
          na zbyt dużą ilość graczy, oraz na rozłożenie turnieju na 2 dni to
          jest 23.05 (sobota) oraz 24.05 (niedziela).
        </li>
      </RulesList>

      <h3>Transmisja</h3>
      <RulesList>
        <li>
          1.Stream będzie nadawany na kanale www.twitch.tv/thekombatshowdown
        </li>
      </RulesList>
    </Card>
  </Layout>
)

export default Rules
