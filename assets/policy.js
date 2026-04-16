const SUPPORTED_LANGUAGES = ['pl', 'en', 'de'];
const DEFAULT_LANGUAGE = 'pl';
const STORAGE_KEY = 'pozer-privacy-policy-language';

const LANGUAGE_LABELS = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
};

const POLICY_CONTENT = {
  pl: {
    pageTitle: 'Polityka Prywatności - POZER',
    brand: 'POZER',
    languageLabel: 'Język strony',
    title: 'Polityka Prywatności Aplikacji POZER',
    effectiveDate: 'Data wejścia w życie: 25 marca 2026 r.',
    body: `
      <p>Niniejsza Polityka Prywatności opisuje, jakie dane są przetwarzane podczas korzystania z aplikacji POZER oraz w jakim celu są używane. POZER nadal działa głównie w modelu "offline-first", czyli większość danych pozostaje na Twoim urządzeniu. Jednocześnie aplikacja może teraz oferować logowanie oraz ręczny backup wybranych danych w chmurze Firebase.</p>

      <h2>1. Administrator danych</h2>
      <p>Administratorem danych jest Jonasz Olszewski, prowadzący jednoosobową działalność gospodarczą.</p>
      <p>W sprawach związanych z prywatnością możesz skontaktować się pod adresem: <strong>kontakt@jonaszolszewski.pl</strong>.</p>

      <h2>2. Jakie dane przetwarzamy</h2>
      <ul>
        <li>Dane zapisywane lokalnie na urządzeniu: sesje, checklisty, notatki, preferencje, własne pozy, lokalne pliki zdjęć i audio oraz inne dane potrzebne do działania aplikacji offline.</li>
        <li>Dane konta użytkownika w Firebase Authentication: identyfikator użytkownika, adres e-mail, nazwa wyświetlana oraz identyfikator dostawcy logowania, jeżeli zdecydujesz się zalogować przez Google lub Apple.</li>
        <li>Dane backupu w chmurze Firebase Firestore i Firebase Storage: wybrane dane potrzebne do odtworzenia korzystania z aplikacji po zalogowaniu, w szczególności ustawienia profilu i aplikacji, lista ulubionych póz, sesje, checklisty, lokalizacje, własne pozy, wybrane filtry i preferencje widoków oraz powiązane pliki potrzebne do przywrócenia tych danych.</li>
        <li>Dane funkcji społeczności "Odkrywaj": jeżeli użytkownik zdecyduje się zgłosić własną pozę do sekcji społeczności, aplikacja może przetwarzać obraz pozy, tytuł, instrukcje, przypisane kategorie i tagi, status moderacji, liczbę pobrań i zgłoszeń oraz opcjonalne publiczne dane autora, takie jak publiczna nazwa, nazwa użytkownika na Instagramie i adres strony www.</li>
        <li>Zagregowane statystyki popularności póz: aplikacja może okresowo tworzyć globalne zestawienia "Najpopularniejsze" i "Ostatnio dodane". Takie zestawienia nie pokazują, kto polubił, zapisał lub dodał daną pozę do sesji. Końcowy wynik zawiera wyłącznie zbiorczy ranking póz, bez publicznego ujawniania tożsamości użytkowników.</li>
        <li>Dane techniczne i diagnostyczne: podstawowe logi błędów, informacje o stabilności działania aplikacji i informacje potrzebne do ochrony usług backendowych przed nadużyciami.</li>
      </ul>

      <h2>3. W jakim celu używamy danych</h2>
      <ul>
        <li>aby uruchamiać aplikację i zapisywać Twoje ustawienia lokalnie,</li>
        <li>aby umożliwić logowanie przez Google lub Apple,</li>
        <li>aby utworzyć konto użytkownika w Firebase,</li>
        <li>aby utworzyć, wyświetlić i przywrócić ręczny backup danych testowych w chmurze,</li>
        <li>aby umożliwić użytkownikowi przesłanie własnej pozy do moderowanej sekcji społeczności "Odkrywaj",</li>
        <li>aby pokazywać innym użytkownikom zaakceptowane pozy społecznościowe wraz z publicznymi danymi autora, jeśli autor nie wybrał publikacji anonimowej,</li>
        <li>aby przyjmować zgłoszenia naruszeń, blokować autorów i prowadzić ręczną moderację treści społecznościowych,</li>
        <li>aby okresowo zbudować lekkie, globalne i zagregowane zestawienia najpopularniejszych póz w katalogu oraz w społeczności,</li>
        <li>aby umożliwić usunięcie konta i danych chmurowych z poziomu aplikacji,</li>
        <li>aby chronić backend, diagnozować błędy i utrzymywać stabilność usługi.</li>
      </ul>

      <h2>4. Logowanie przez Google i Apple</h2>
      <p>Jeżeli zdecydujesz się zalogować:</p>
      <ul>
        <li>logowanie jest obsługiwane przez Firebase Authentication,</li>
        <li>dostawcą tożsamości może być Google albo Apple,</li>
        <li>POZER otrzymuje od dostawcy wyłącznie dane potrzebne do utworzenia i utrzymania konta, takie jak identyfikator użytkownika, adres e-mail oraz nazwa wyświetlana, jeśli dostawca je udostępni,</li>
        <li>logowanie jest opcjonalne, ale jest wymagane do używania backupu w chmurze.</li>
      </ul>

      <h2>5. Backup w chmurze</h2>
      <p>Na obecnym etapie backup w chmurze może obejmować w szczególności:</p>
      <ul>
        <li>ustawienia profilu i aplikacji, w tym miasto z widżetu "Warunki na dziś", auto-lokalizację, język aplikacji i motyw,</li>
        <li>listę ulubionych póz,</li>
        <li>sesje, checklisty, lokalizacje i wybrane ustawienia widoków,</li>
        <li>własne pozy użytkownika,</li>
        <li>wybrane notatki i inne dane potrzebne do przywrócenia działania aplikacji po zalogowaniu,</li>
        <li>powiązane pliki multimedialne, jeżeli są potrzebne do przywrócenia powyższych danych.</li>
      </ul>
      <p>Backup nie obejmuje obecnie wszystkich danych aplikacji. Większość treści nadal pozostaje lokalnie na urządzeniu.</p>
      <p>Backup może zostać utworzony ręcznie przez użytkownika z poziomu sekcji "Profil i ustawienia". Po pierwszym zalogowaniu aplikacja może również utworzyć pierwszy backup startowy, a później może okresowo zapisać automatyczną kopię po ponownym otwarciu aplikacji, jeśli użytkownik nadal korzysta z konta i dane uległy zmianie.</p>
      <p>POZER może wykorzystywać najnowszy dostępny backup użytkownika również do utworzenia globalnego rankingu najpopularniejszych póz w katalogu. Taki ranking:</p>
      <ul>
        <li>jest budowany najwyżej okresowo, zwykle nie częściej niż raz dziennie,</li>
        <li>korzysta wyłącznie z najnowszej dostępnej kopii danych użytkownika, a nie z ciągłego śledzenia każdego kliknięcia w czasie rzeczywistym,</li>
        <li>uwzględnia jedynie zbiorcze informacje, takie jak to, czy dana poza była oznaczona jako ulubiona albo dodana do sesji,</li>
        <li>nie publikuje i nie pokazuje innym użytkownikom listy osób, które polubiły daną pozę albo zapisały ją do sesji,</li>
        <li>zapisuje do odczytu przez aplikację wyłącznie gotowy, zagregowany wynik, a nie publiczną historię działań konkretnych osób.</li>
      </ul>
      <p>W sekcji społeczności "Odkrywaj" najpopularniejsze pozy są ustalane na podstawie zagregowanej liczby pobrań tych póz przez użytkowników. Również tutaj aplikacja pokazuje wyłącznie wynik zbiorczy, bez ujawniania innym użytkownikom, kto pobrał daną pozę.</p>

      <h2>6. Gdzie dane są przechowywane</h2>
      <ul>
        <li>lokalnie na Twoim urządzeniu,</li>
        <li>w usługach Firebase, w szczególności Firebase Authentication oraz Cloud Firestore,</li>
        <li>tymczasowo w usługach zewnętrznych niezbędnych do działania wybranych funkcji aplikacji.</li>
      </ul>

      <h2>6a. Funkcja społeczności "Odkrywaj"</h2>
      <p>Jeżeli użytkownik zdecyduje się opublikować własną pozę w społeczności:</p>
      <ul>
        <li>poza trafia najpierw do moderacji,</li>
        <li>dopiero po zatwierdzeniu może być publicznie widoczna dla innych użytkowników w sekcji "Odkrywaj",</li>
        <li>użytkownik może wybrać publikację anonimową albo dodać publiczną nazwę, nazwę użytkownika na Instagramie i adres strony www,</li>
        <li>inni użytkownicy mogą pobrać taką pozę do swojej aplikacji, zgłosić naruszenie albo zablokować autora,</li>
        <li>administrator może taką pozę zaakceptować, odrzucić, ukryć albo usunąć na stałe.</li>
      </ul>
      <p>Jeżeli poza zostanie ukryta, może zniknąć z publicznego feedu, ale nadal pozostać dostępna dla osób, które już wcześniej ją pobrały, jeśli jest to technicznie i prawnie uzasadnione.</p>
      <p>Jeżeli poza zostanie usunięta na stałe z powodów moderacyjnych albo prawnych, aplikacja może usunąć ją z listy pobranych i zastąpić ją technicznym placeholderem w istniejących sesjach, aby nie zostawić uszkodzonego widoku.</p>

      <h2>7. Integracje z usługami zewnętrznymi</h2>
      <ul>
        <li>Firebase Authentication: do logowania i obsługi kont użytkowników.</li>
        <li>Cloud Firestore: do przechowywania prostych backupów chmurowych użytkownika.</li>
        <li>Firebase Storage: do przechowywania zasobów aplikacji oraz innych plików używanych przez aplikację.</li>
        <li>Firebase App Check oraz powiązane mechanizmy bezpieczeństwa: do ochrony backendu przed nadużyciami.</li>
        <li>Google Sign-In: do logowania użytkownika kontem Google.</li>
        <li>Sign in with Apple: do logowania użytkownika kontem Apple.</li>
        <li>Google AI (Gemini): do funkcji AI, takich jak tworzenie ilustracji, analiza zdjęć i generowanie opisów.</li>
        <li>Google Places API: do pobierania danych o miejscach.</li>
        <li>Open-Meteo oraz sunrise-sunset.org: do danych pogodowych i godzin wschodu oraz zachodu słońca.</li>
        <li>Google Sheets: jeśli użytkownik sam zdecyduje się skorzystać z importu CSV.</li>
      </ul>

      <h2>8. Podstawa korzystania z funkcji chmurowych</h2>
      <p>Korzystanie z logowania i backupu w chmurze jest dobrowolne. Jeżeli nie chcesz korzystać z funkcji konta:</p>
      <ul>
        <li>możesz nadal używać aplikacji lokalnie,</li>
        <li>Twoje lokalne dane pozostają na urządzeniu,</li>
        <li>backup w chmurze i synchronizacja konta nie będą aktywne.</li>
        <li>Twoje lokalne dane nie będą uwzględniane w chmurowym rankingu najpopularniejszych póz w katalogu.</li>
      </ul>

      <h2>9. Usuwanie konta i danych</h2>
      <p>Jeżeli korzystasz z logowania, możesz usunąć konto z poziomu aplikacji.</p>
      <p>Usunięcie konta powoduje:</p>
      <ul>
        <li>usunięcie konta użytkownika w Firebase Authentication,</li>
        <li>usunięcie dokumentu użytkownika i backupów zapisanych w Cloud Firestore,</li>
        <li>wylogowanie z aplikacji.</li>
      </ul>
      <p>Usunięcie konta nie czyści automatycznie wszystkich danych lokalnych zapisanych na urządzeniu, chyba że użytkownik skorzysta osobno z funkcji resetu lokalnych danych lub odinstaluje aplikację.</p>

      <h2>10. Jak długo przechowujemy dane</h2>
      <ul>
        <li>Dane lokalne pozostają na urządzeniu do momentu ich usunięcia przez użytkownika, resetu aplikacji albo odinstalowania aplikacji.</li>
        <li>Dane konta i backupy chmurowe pozostają do czasu usunięcia konta przez użytkownika albo do czasu ręcznego usunięcia ich przez administratora w sytuacjach wymaganych prawem lub technicznie uzasadnionych.</li>
        <li>Zagregowane rankingi popularności mogą być przechowywane osobno jako techniczne zestawienia zbiorcze potrzebne do działania aplikacji, ale nie zawierają publicznej listy działań konkretnych użytkowników.</li>
      </ul>

      <h2>11. Udostępnianie danych</h2>
      <p>Nie sprzedajemy Twoich danych osobowych.</p>
      <p>Dane mogą być przekazywane wyłącznie:</p>
      <ul>
        <li>dostawcom usług technicznych niezbędnych do działania aplikacji,</li>
        <li>gdy wymaga tego prawo,</li>
        <li>gdy jest to konieczne do realizacji funkcji, z której użytkownik świadomie korzysta.</li>
      </ul>

      <h2>12. Twoje prawa</h2>
      <p>Masz prawo do:</p>
      <ul>
        <li>dostępu do danych,</li>
        <li>sprostowania danych,</li>
        <li>usunięcia danych,</li>
        <li>ograniczenia przetwarzania,</li>
        <li>kontaktu z administratorem w sprawach prywatności.</li>
      </ul>
      <p>W przypadku danych lokalnych najprostszą metodą usunięcia jest skorzystanie z odpowiednich funkcji w aplikacji albo odinstalowanie aplikacji. W przypadku danych konta i backupów chmurowych możesz użyć funkcji "Usuń konto" w aplikacji albo skontaktować się mailowo.</p>

      <h2>13. Zmiany polityki prywatności</h2>
      <p>Polityka prywatności może być aktualizowana wraz ze zmianami funkcji aplikacji, wymogów prawnych lub wymogów sklepów z aplikacjami. Aktualna wersja jest publikowana pod adresem: <strong>https://szczureknarolkach.github.io/pozer-privacy-policy/</strong>.</p>
    `,
  },
  en: {
    pageTitle: 'Privacy Policy - POZER',
    brand: 'POZER',
    languageLabel: 'Page language',
    title: 'POZER App Privacy Policy',
    effectiveDate: 'Effective date: March 25, 2026',
    body: `
      <p>This Privacy Policy explains what data is processed when you use the POZER app and why it is used. POZER still works mainly in an "offline-first" mode, which means most data stays on your device. At the same time, the app can now offer sign-in and manual backups of selected data in Firebase cloud services.</p>

      <h2>1. Data controller</h2>
      <p>The data controller is Jonasz Olszewski, operating as a sole trader.</p>
      <p>If you have privacy-related questions, you can contact: <strong>kontakt@jonaszolszewski.pl</strong>.</p>

      <h2>2. What data we process</h2>
      <ul>
        <li>Data stored locally on your device: sessions, checklists, notes, preferences, your own poses, local photo and audio files, and other data needed for the app to work offline.</li>
        <li>User account data in Firebase Authentication: user ID, email address, display name, and sign-in provider ID if you choose to sign in with Google or Apple.</li>
        <li>Backup data stored in Firebase Firestore and Firebase Storage: selected data needed to restore app usage after sign-in, especially profile and app settings, favorite poses, sessions, checklists, locations, custom poses, selected filters and view preferences, and related files needed to restore this data.</li>
        <li>Data related to the "Discover" community feature: if a user chooses to submit a custom pose to the community section, the app may process the pose image, title, instructions, assigned categories and tags, moderation status, number of downloads and reports, and optional public author details such as public name, Instagram username, and website address.</li>
        <li>Aggregated pose popularity statistics: the app may periodically create global "Most popular" and "Recently added" lists. These lists do not show who liked, saved, or added a given pose to a session. The final result contains only an aggregated pose ranking, without publicly revealing user identities.</li>
        <li>Technical and diagnostic data: basic error logs, app stability information, and information needed to protect backend services against abuse.</li>
      </ul>

      <h2>3. Why we use the data</h2>
      <ul>
        <li>to run the app and save your settings locally,</li>
        <li>to enable Google or Apple sign-in,</li>
        <li>to create a user account in Firebase,</li>
        <li>to create, display, and restore manual cloud backups of test data,</li>
        <li>to allow a user to submit a custom pose to the moderated "Discover" community section,</li>
        <li>to show approved community poses to other users together with the author's public details, if the author did not choose anonymous publication,</li>
        <li>to receive violation reports, block authors, and carry out manual moderation of community content,</li>
        <li>to periodically build lightweight, global, aggregated rankings of the most popular poses in the catalog and in the community,</li>
        <li>to let users delete their accounts and cloud data from inside the app,</li>
        <li>to protect the backend, diagnose errors, and keep the service stable.</li>
      </ul>

      <h2>4. Sign in with Google and Apple</h2>
      <p>If you choose to sign in:</p>
      <ul>
        <li>sign-in is handled by Firebase Authentication,</li>
        <li>the identity provider may be Google or Apple,</li>
        <li>POZER only receives the data needed to create and maintain the account, such as user ID, email address, and display name, if the provider shares it,</li>
        <li>sign-in is optional, but it is required if you want to use cloud backup.</li>
      </ul>

      <h2>5. Cloud backup</h2>
      <p>At this stage, cloud backup may include in particular:</p>
      <ul>
        <li>profile and app settings, including the city used in the "Conditions for today" widget, auto-location, app language, and theme,</li>
        <li>the list of favorite poses,</li>
        <li>sessions, checklists, locations, and selected view settings,</li>
        <li>the user's custom poses,</li>
        <li>selected notes and other data needed to restore the app after sign-in,</li>
        <li>related media files if they are needed to restore the data listed above.</li>
      </ul>
      <p>Cloud backup does not currently include all app data. Most content still remains locally on the device.</p>
      <p>A backup can be created manually by the user from the "Profile and settings" section. After the first sign-in, the app may also create an initial starter backup, and later it may periodically save an automatic copy after the app is opened again, if the user still uses the account and the data has changed.</p>
      <p>POZER may also use the user's latest available backup to build a global ranking of the most popular poses in the catalog. Such ranking:</p>
      <ul>
        <li>is created at most periodically, usually no more than once per day,</li>
        <li>uses only the user's latest available backup copy instead of continuously tracking every tap in real time,</li>
        <li>includes only aggregated information, such as whether a pose was marked as favorite or added to a session,</li>
        <li>does not publish or show other users a list of people who liked a pose or saved it to a session,</li>
        <li>saves only the final aggregated result for the app to read, not a public history of actions of specific people.</li>
      </ul>
      <p>In the "Discover" community section, the most popular poses are determined based on the aggregated number of downloads by users. Here as well, the app shows only the aggregated result, without revealing who downloaded a specific pose.</p>

      <h2>6. Where data is stored</h2>
      <ul>
        <li>locally on your device,</li>
        <li>in Firebase services, especially Firebase Authentication and Cloud Firestore,</li>
        <li>temporarily in external services required for selected app features.</li>
      </ul>

      <h2>6a. "Discover" community feature</h2>
      <p>If a user chooses to publish a custom pose in the community:</p>
      <ul>
        <li>the pose first goes through moderation,</li>
        <li>only after approval can it become publicly visible to other users in the "Discover" section,</li>
        <li>the user may choose anonymous publication or add a public name, Instagram username, and website address,</li>
        <li>other users may download such pose into their app, report a violation, or block the author,</li>
        <li>the administrator may approve, reject, hide, or permanently remove such pose.</li>
      </ul>
      <p>If a pose is hidden, it may disappear from the public feed but still remain available to people who had already downloaded it earlier, if that is technically and legally justified.</p>
      <p>If a pose is permanently removed for moderation or legal reasons, the app may remove it from downloaded lists and replace it with a technical placeholder in existing sessions so that broken views are not left behind.</p>

      <h2>7. Integrations with external services</h2>
      <ul>
        <li>Firebase Authentication: for sign-in and account handling.</li>
        <li>Cloud Firestore: for storing simple cloud backups of user data.</li>
        <li>Firebase Storage: for app assets and other files used by the app.</li>
        <li>Firebase App Check and related security mechanisms: to protect the backend against abuse.</li>
        <li>Google Sign-In: for signing in with a Google account.</li>
        <li>Sign in with Apple: for signing in with an Apple account.</li>
        <li>Google AI (Gemini): for AI features such as illustration creation, photo analysis, and text generation.</li>
        <li>Google Places API: for fetching place details.</li>
        <li>Open-Meteo and sunrise-sunset.org: for weather data and sunrise/sunset times.</li>
        <li>Google Sheets: if the user explicitly chooses CSV import.</li>
      </ul>

      <h2>8. Basis for using cloud features</h2>
      <p>Using sign-in and cloud backup is voluntary. If you do not want to use account features:</p>
      <ul>
        <li>you can still use the app locally,</li>
        <li>your local data stays on the device,</li>
        <li>cloud backup and account sync will remain inactive,</li>
        <li>your local data will not be included in the cloud ranking of the most popular poses in the catalog.</li>
      </ul>

      <h2>9. Deleting an account and data</h2>
      <p>If you use sign-in, you can delete your account from inside the app.</p>
      <p>Deleting the account causes:</p>
      <ul>
        <li>deletion of the user account in Firebase Authentication,</li>
        <li>deletion of the user document and backups stored in Cloud Firestore,</li>
        <li>sign-out from the app.</li>
      </ul>
      <p>Deleting the account does not automatically remove all local data stored on the device, unless the user separately uses the local data reset feature or uninstalls the app.</p>

      <h2>10. How long we keep data</h2>
      <ul>
        <li>Local data remains on the device until it is deleted by the user, the app is reset, or the app is uninstalled.</li>
        <li>Account data and cloud backups remain until the user deletes the account or until the administrator manually removes them when required by law or technically justified.</li>
        <li>Aggregated popularity rankings may be stored separately as technical summary sets needed for the app to work, but they do not contain a public list of actions of specific users.</li>
      </ul>

      <h2>11. Sharing data</h2>
      <p>We do not sell your personal data.</p>
      <p>Data may be shared only:</p>
      <ul>
        <li>with technical service providers needed for the app to operate,</li>
        <li>when required by law,</li>
        <li>when necessary to provide a feature that the user knowingly uses.</li>
      </ul>

      <h2>12. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access your data,</li>
        <li>correct your data,</li>
        <li>delete your data,</li>
        <li>restrict processing,</li>
        <li>contact the data controller about privacy matters.</li>
      </ul>
      <p>For local data, the easiest way to delete it is to use the relevant features inside the app or uninstall the app. For account data and cloud backups, you can use the "Delete account" feature in the app or contact us by email.</p>

      <h2>13. Changes to this Privacy Policy</h2>
      <p>This Privacy Policy may be updated when app features, legal requirements, or app store requirements change. The current version is published at: <strong>https://szczureknarolkach.github.io/pozer-privacy-policy/</strong>.</p>
    `,
  },
  de: {
    pageTitle: 'Datenschutzerklärung - POZER',
    brand: 'POZER',
    languageLabel: 'Seitensprache',
    title: 'Datenschutzerklärung der POZER-App',
    effectiveDate: 'Gültig ab: 25. März 2026',
    body: `
      <p>Diese Datenschutzerklärung beschreibt, welche Daten bei der Nutzung der POZER-App verarbeitet werden und zu welchem Zweck sie verwendet werden. POZER arbeitet weiterhin hauptsächlich nach dem Prinzip "offline-first", das heißt, die meisten Daten bleiben auf deinem Gerät. Gleichzeitig kann die App nun eine Anmeldung und manuelle Backups ausgewählter Daten in Firebase-Cloud-Diensten anbieten.</p>

      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlicher für die Datenverarbeitung ist Jonasz Olszewski als Einzelunternehmer.</p>
      <p>Bei Fragen zum Datenschutz kannst du dich an folgende Adresse wenden: <strong>kontakt@jonaszolszewski.pl</strong>.</p>

      <h2>2. Welche Daten wir verarbeiten</h2>
      <ul>
        <li>Lokal auf dem Gerät gespeicherte Daten: Sitzungen, Checklisten, Notizen, Einstellungen, eigene Posen, lokale Foto- und Audiodateien sowie weitere Daten, die für die Offline-Nutzung der App erforderlich sind.</li>
        <li>Benutzerkontodaten in Firebase Authentication: Benutzer-ID, E-Mail-Adresse, Anzeigename und Kennung des Anmeldeanbieters, wenn du dich mit Google oder Apple anmeldest.</li>
        <li>Backup-Daten in Firebase Firestore und Firebase Storage: ausgewählte Daten, die benötigt werden, um die Nutzung der App nach der Anmeldung wiederherzustellen, insbesondere Profil- und App-Einstellungen, Lieblingsposen, Sitzungen, Checklisten, Orte, eigene Posen, ausgewählte Filter und Ansichtseinstellungen sowie zugehörige Dateien, die für die Wiederherstellung dieser Daten nötig sind.</li>
        <li>Daten der Community-Funktion "Entdecken": Wenn sich ein Nutzer entscheidet, eine eigene Pose für den Community-Bereich einzureichen, kann die App das Bild der Pose, den Titel, Anleitungen, zugewiesene Kategorien und Tags, den Moderationsstatus, die Anzahl der Downloads und Meldungen sowie optionale öffentliche Angaben des Autors wie öffentlichen Namen, Instagram-Namen und Website-Adresse verarbeiten.</li>
        <li>Aggregierte Statistiken zur Beliebtheit von Posen: Die App kann regelmäßig globale Listen wie "Am beliebtesten" und "Zuletzt hinzugefügt" erstellen. Diese Listen zeigen nicht, wer eine bestimmte Pose geliked, gespeichert oder zu einer Sitzung hinzugefügt hat. Das Endergebnis enthält ausschließlich ein zusammengefasstes Ranking von Posen, ohne die Identität der Nutzer öffentlich preiszugeben.</li>
        <li>Technische und diagnostische Daten: grundlegende Fehlerprotokolle, Informationen zur Stabilität der App und Informationen, die zum Schutz der Backend-Dienste vor Missbrauch erforderlich sind.</li>
      </ul>

      <h2>3. Warum wir diese Daten verwenden</h2>
      <ul>
        <li>um die App auszuführen und deine Einstellungen lokal zu speichern,</li>
        <li>um die Anmeldung mit Google oder Apple zu ermöglichen,</li>
        <li>um ein Benutzerkonto in Firebase zu erstellen,</li>
        <li>um manuelle Cloud-Backups von Testdaten zu erstellen, anzuzeigen und wiederherzustellen,</li>
        <li>um einem Nutzer zu ermöglichen, eine eigene Pose in den moderierten Community-Bereich "Entdecken" einzureichen,</li>
        <li>um anderen Nutzern freigegebene Community-Posen zusammen mit öffentlichen Angaben des Autors anzuzeigen, wenn der Autor keine anonyme Veröffentlichung gewählt hat,</li>
        <li>um Meldungen über Verstöße entgegenzunehmen, Autoren zu blockieren und eine manuelle Moderation von Community-Inhalten durchzuführen,</li>
        <li>um regelmäßig leichte, globale und aggregierte Ranglisten der beliebtesten Posen im Katalog und in der Community zu erstellen,</li>
        <li>um das Löschen von Konten und Cloud-Daten innerhalb der App zu ermöglichen,</li>
        <li>um das Backend zu schützen, Fehler zu diagnostizieren und den Dienst stabil zu halten.</li>
      </ul>

      <h2>4. Anmeldung mit Google und Apple</h2>
      <p>Wenn du dich anmeldest:</p>
      <ul>
        <li>wird die Anmeldung über Firebase Authentication abgewickelt,</li>
        <li>kann der Identitätsanbieter Google oder Apple sein,</li>
        <li>erhält POZER vom Anbieter nur die Daten, die zum Erstellen und Pflegen des Kontos notwendig sind, zum Beispiel Benutzer-ID, E-Mail-Adresse und Anzeigename, sofern der Anbieter sie weitergibt,</li>
        <li>ist die Anmeldung freiwillig, wird aber für die Nutzung des Cloud-Backups benötigt.</li>
      </ul>

      <h2>5. Cloud-Backup</h2>
      <p>Im aktuellen Stand kann das Cloud-Backup insbesondere Folgendes umfassen:</p>
      <ul>
        <li>Profil- und App-Einstellungen, darunter die Stadt aus dem Widget "Bedingungen für heute", Auto-Standort, App-Sprache und Design,</li>
        <li>die Liste der Lieblingsposen,</li>
        <li>Sitzungen, Checklisten, Orte und ausgewählte Ansichtseinstellungen,</li>
        <li>eigene Posen des Nutzers,</li>
        <li>ausgewählte Notizen und andere Daten, die benötigt werden, um die App nach der Anmeldung wiederherzustellen,</li>
        <li>zugehörige Mediendateien, wenn sie für die Wiederherstellung der oben genannten Daten erforderlich sind.</li>
      </ul>
      <p>Das Cloud-Backup umfasst derzeit nicht alle App-Daten. Die meisten Inhalte bleiben weiterhin lokal auf dem Gerät.</p>
      <p>Ein Backup kann vom Nutzer manuell im Bereich "Profil und Einstellungen" erstellt werden. Nach der ersten Anmeldung kann die App außerdem ein erstes Start-Backup anlegen und später nach erneutem Öffnen der App regelmäßig eine automatische Kopie speichern, sofern der Nutzer das Konto weiterhin verwendet und sich die Daten geändert haben.</p>
      <p>POZER kann außerdem das neueste verfügbare Backup des Nutzers verwenden, um ein globales Ranking der beliebtesten Posen im Katalog zu erstellen. Ein solches Ranking:</p>
      <ul>
        <li>wird höchstens regelmäßig erstellt, in der Regel nicht öfter als einmal pro Tag,</li>
        <li>verwendet ausschließlich die neueste verfügbare Sicherung des Nutzers und verfolgt nicht jeden einzelnen Klick in Echtzeit,</li>
        <li>berücksichtigt nur zusammengefasste Informationen, etwa ob eine Pose als Favorit markiert oder zu einer Sitzung hinzugefügt wurde,</li>
        <li>veröffentlicht oder zeigt anderen Nutzern keine Liste der Personen, die eine Pose geliked oder zu einer Sitzung gespeichert haben,</li>
        <li>speichert für die App nur das fertige aggregierte Ergebnis und keine öffentliche Historie der Handlungen einzelner Personen.</li>
      </ul>
      <p>Im Community-Bereich "Entdecken" werden die beliebtesten Posen anhand der aggregierten Anzahl der Downloads durch Nutzer bestimmt. Auch hier zeigt die App nur das zusammengefasste Ergebnis, ohne offenzulegen, wer eine bestimmte Pose heruntergeladen hat.</p>

      <h2>6. Wo Daten gespeichert werden</h2>
      <ul>
        <li>lokal auf deinem Gerät,</li>
        <li>in Firebase-Diensten, insbesondere Firebase Authentication und Cloud Firestore,</li>
        <li>vorübergehend in externen Diensten, die für ausgewählte Funktionen der App benötigt werden.</li>
      </ul>

      <h2>6a. Community-Funktion "Entdecken"</h2>
      <p>Wenn sich ein Nutzer entscheidet, eine eigene Pose in der Community zu veröffentlichen:</p>
      <ul>
        <li>geht die Pose zunächst in die Moderation,</li>
        <li>kann sie erst nach Freigabe für andere Nutzer im Bereich "Entdecken" öffentlich sichtbar werden,</li>
        <li>kann der Nutzer eine anonyme Veröffentlichung wählen oder einen öffentlichen Namen, Instagram-Namen und eine Website-Adresse hinzufügen,</li>
        <li>können andere Nutzer diese Pose in ihre App herunterladen, einen Verstoß melden oder den Autor blockieren,</li>
        <li>kann der Administrator diese Pose freigeben, ablehnen, ausblenden oder dauerhaft entfernen.</li>
      </ul>
      <p>Wenn eine Pose ausgeblendet wird, kann sie aus dem öffentlichen Feed verschwinden, aber für Personen, die sie bereits früher heruntergeladen haben, weiterhin verfügbar bleiben, sofern dies technisch und rechtlich gerechtfertigt ist.</p>
      <p>Wenn eine Pose aus Moderations- oder Rechtsgründen dauerhaft entfernt wird, kann die App sie aus den heruntergeladenen Listen entfernen und in bestehenden Sitzungen durch einen technischen Platzhalter ersetzen, damit keine beschädigten Ansichten zurückbleiben.</p>

      <h2>7. Integrationen mit externen Diensten</h2>
      <ul>
        <li>Firebase Authentication: für Anmeldung und Kontoverwaltung.</li>
        <li>Cloud Firestore: zum Speichern einfacher Cloud-Backups von Nutzerdaten.</li>
        <li>Firebase Storage: für App-Ressourcen und andere von der App verwendete Dateien.</li>
        <li>Firebase App Check und verwandte Sicherheitsmechanismen: zum Schutz des Backends vor Missbrauch.</li>
        <li>Google Sign-In: für die Anmeldung mit einem Google-Konto.</li>
        <li>Sign in with Apple: für die Anmeldung mit einem Apple-Konto.</li>
        <li>Google AI (Gemini): für KI-Funktionen wie das Erstellen von Illustrationen, Bildanalyse und Textgenerierung.</li>
        <li>Google Places API: zum Abrufen von Ortsdaten.</li>
        <li>Open-Meteo und sunrise-sunset.org: für Wetterdaten sowie Zeiten von Sonnenaufgang und Sonnenuntergang.</li>
        <li>Google Sheets: wenn der Nutzer ausdrücklich einen CSV-Import verwendet.</li>
      </ul>

      <h2>8. Grundlage für die Nutzung von Cloud-Funktionen</h2>
      <p>Die Nutzung von Anmeldung und Cloud-Backup ist freiwillig. Wenn du keine Kontofunktionen nutzen möchtest:</p>
      <ul>
        <li>kannst du die App weiterhin lokal verwenden,</li>
        <li>bleiben deine lokalen Daten auf dem Gerät,</li>
        <li>bleiben Cloud-Backup und Kontosynchronisierung inaktiv,</li>
        <li>werden deine lokalen Daten nicht in das Cloud-Ranking der beliebtesten Posen im Katalog aufgenommen.</li>
      </ul>

      <h2>9. Löschen von Konto und Daten</h2>
      <p>Wenn du die Anmeldung nutzt, kannst du dein Konto direkt in der App löschen.</p>
      <p>Das Löschen des Kontos bewirkt:</p>
      <ul>
        <li>das Löschen des Benutzerkontos in Firebase Authentication,</li>
        <li>das Löschen des Benutzerdokuments und der in Cloud Firestore gespeicherten Backups,</li>
        <li>die Abmeldung aus der App.</li>
      </ul>
      <p>Durch das Löschen des Kontos werden nicht automatisch alle lokal auf dem Gerät gespeicherten Daten entfernt, es sei denn, der Nutzer verwendet zusätzlich die Funktion zum Zurücksetzen lokaler Daten oder deinstalliert die App.</p>

      <h2>10. Wie lange wir Daten speichern</h2>
      <ul>
        <li>Lokale Daten bleiben auf dem Gerät, bis sie vom Nutzer gelöscht werden, die App zurückgesetzt wird oder die App deinstalliert wird.</li>
        <li>Kontodaten und Cloud-Backups bleiben erhalten, bis der Nutzer das Konto löscht oder der Administrator sie manuell entfernt, wenn dies gesetzlich erforderlich oder technisch begründet ist.</li>
        <li>Aggregierte Beliebtheitsrankings können getrennt als technische Zusammenfassungen gespeichert werden, die für den Betrieb der App notwendig sind. Sie enthalten jedoch keine öffentliche Liste der Handlungen einzelner Nutzer.</li>
      </ul>

      <h2>11. Weitergabe von Daten</h2>
      <p>Wir verkaufen deine personenbezogenen Daten nicht.</p>
      <p>Daten dürfen nur weitergegeben werden:</p>
      <ul>
        <li>an technische Dienstleister, die für den Betrieb der App notwendig sind,</li>
        <li>wenn dies gesetzlich vorgeschrieben ist,</li>
        <li>wenn es erforderlich ist, um eine Funktion bereitzustellen, die der Nutzer bewusst verwendet.</li>
      </ul>

      <h2>12. Deine Rechte</h2>
      <p>Du hast das Recht auf:</p>
      <ul>
        <li>Auskunft über deine Daten,</li>
        <li>Berichtigung deiner Daten,</li>
        <li>Löschung deiner Daten,</li>
        <li>Einschränkung der Verarbeitung,</li>
        <li>Kontakt mit dem Verantwortlichen in Datenschutzfragen.</li>
      </ul>
      <p>Bei lokalen Daten ist der einfachste Weg zur Löschung die Nutzung der entsprechenden Funktionen in der App oder die Deinstallation der App. Bei Kontodaten und Cloud-Backups kannst du die Funktion "Konto löschen" in der App verwenden oder uns per E-Mail kontaktieren.</p>

      <h2>13. Änderungen dieser Datenschutzerklärung</h2>
      <p>Diese Datenschutzerklärung kann aktualisiert werden, wenn sich App-Funktionen, gesetzliche Anforderungen oder Anforderungen der App Stores ändern. Die aktuelle Version wird veröffentlicht unter: <strong>https://szczureknarolkach.github.io/pozer-privacy-policy/</strong>.</p>
    `,
  },
};

const contentRoot = document.getElementById('policy-content');
const switcherRoot = document.getElementById('language-switcher');
const brandRoot = document.getElementById('brand');
const languageLabelRoot = document.getElementById('language-label');
const titleRoot = document.getElementById('policy-title');
const effectiveDateRoot = document.getElementById('effective-date');

const normalizeLanguage = (value) => {
  if (!value || typeof value !== 'string') {
    return null;
  }

  const normalized = value.trim().toLowerCase().replace('_', '-');
  if (!normalized) {
    return null;
  }

  const directMatch = SUPPORTED_LANGUAGES.find((language) => language === normalized);
  if (directMatch) {
    return directMatch;
  }

  const prefixMatch = SUPPORTED_LANGUAGES.find((language) => normalized.startsWith(`${language}-`));
  return prefixMatch || null;
};

const getUrlLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  return normalizeLanguage(params.get('lang'));
};

const getStoredLanguage = () => {
  try {
    return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return null;
  }
};

const getBrowserLanguage = () => {
  const candidates = Array.isArray(window.navigator.languages) && window.navigator.languages.length > 0
    ? window.navigator.languages
    : [window.navigator.language];

  for (const candidate of candidates) {
    const normalized = normalizeLanguage(candidate);
    if (normalized) {
      return normalized;
    }
  }

  return null;
};

const setStoredLanguage = (language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    return;
  }
};

const updateUrlLanguage = (language) => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', url);
};

const renderSwitcher = (activeLanguage) => {
  switcherRoot.innerHTML = '';

  SUPPORTED_LANGUAGES.forEach((language) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `language-button${language === activeLanguage ? ' is-active' : ''}`;
    button.textContent = LANGUAGE_LABELS[language];
    button.setAttribute('aria-pressed', language === activeLanguage ? 'true' : 'false');
    button.addEventListener('click', () => applyLanguage(language));
    switcherRoot.appendChild(button);
  });
};

const applyLanguage = (requestedLanguage) => {
  const language = normalizeLanguage(requestedLanguage) || DEFAULT_LANGUAGE;
  const content = POLICY_CONTENT[language];

  document.documentElement.lang = language;
  document.title = content.pageTitle;

  brandRoot.textContent = content.brand;
  languageLabelRoot.textContent = content.languageLabel;
  titleRoot.textContent = content.title;
  effectiveDateRoot.textContent = content.effectiveDate;
  contentRoot.innerHTML = content.body;

  renderSwitcher(language);
  updateUrlLanguage(language);
  setStoredLanguage(language);
};

const initialLanguage = getUrlLanguage() || getStoredLanguage() || getBrowserLanguage() || DEFAULT_LANGUAGE;
applyLanguage(initialLanguage);
