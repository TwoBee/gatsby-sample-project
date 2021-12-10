import * as React from 'react'
  import '../tailwind.css'

// markup
const IndexPage = () => {
  return (
    <body class="">
<div class="bg-gradient-to-b from-secondary via-tertier to-secondary">
  <div class="flex p-6 pb-16 justify-center items-center w-full">
    <div class="w-2/4 p-16">
      <h1 class="text-7xl text font-jetbrains pb-6 text-gray-700">tobiaszimmer.dev</h1>
      <div class="h-auto bg-white bg-opacity-50 rounded-lg shadow-xl p-8">
        <div class="w-36 h-36 mb-6 rounded-full mx-auto bg-profil-bubble bg-contain object-cover bg-top">
        </div>
        <p class="text-white break-words">Mein Name ist Tobias Zimmer. Ich bin 25 Jahre alt und seit der 9. Klasse interessiert an allen IT-Themen. <br />
          In den folgenden Abschnitten wird noch so einiges über mich erklärt.</p>
      </div>
    </div>
  </div>
  <div class="flex justify-center mb-16">
    <hr class="w-2/4 border-gray-300 border-opacity-50" />
  </div>
  <div class=" flex items-center justify-center mb-16">
    <div class="grid grid-cols-1 gap-14 p-4 md:grid-cols-2">
      <div class="w-96 h-auto rounded-xl shadow-lg bg-gradient-to-r from-red-500 via-red-500 to-yellow-500  flex items-center px-4 py-6">
        <div class="w-full h-auto bg-white bg-opacity-50 rounded-lg shadow-lg p-2">
          <h1 class="text-xl font-bold m-4">Meine Anfänge</h1>
          <p class="text-black m-4">Wie in der Einleitung schon geschrieben, habe ich in der 9. Klasse angefangen mit der Programmierung. Hier habe ich mit kleinen Modifikationen für das Spiel "Minecraft" angefangen.</p>
        </div>
      </div>
      <div class="w-96 h-auto rounded-xl shadow-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center px-4 py-6">
        <div class="w-full h-auto bg-white bg-opacity-50 rounded-lg shadow-lg p-2">
          <h1 class="text-xl font-bold m-4">Fachabitur</h1>
          <p class="text-black m-4">Im Anschluss zu meinem Realschulabschluss habe ich mein Fachabitur im Bereich Wirtschaftsinformatik begonnen. Hier habe ich alle Fächer belegt die auch nur im entferntesten mit Programmierung zu tun hat. <br />
            Meine Abschlussnote hier war eine 2,1</p>
        </div>
      </div>
      <div class="w-96 h-auto rounded-xl shadow-lg bg-gradient-to-r from-green-400 to-yellow-300 flex items-center px-4 py-6">
        <div class="w-full h-auto bg-white bg-opacity-50 rounded-lg shadow-lg p-2">
          <h1 class="text-xl font-bold m-4">Ausbildung</h1>
          <p class="text-black m-4">Nach meinem Fachabitur habe ich eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung erfolgreich abgeschlossen. Diese Ausbildung fand bei IANEO GmbH statt. <br />
            Mein Abschlussprojekt war hier ein Monitoring-System für die Internen Server.</p>
        </div>
      </div>
      <div class="w-96 h-auto rounded-xl shadow-lg bg-gradient-to-r from-pink-400 to-indigo-500 flex items-center px-4 py-6">
        <div class="w-full h-auto bg-white bg-opacity-50 rounded-lg shadow-lg p-2">
          <h1 class="text-xl font-bold m-4">Studium</h1>
          <p class="text-black m-4">2018 begann ich mein Studium im Fach Wirtschaftsinformatik an der Hochschule Trier. In den ersten 4 Semestern des Studiums arbeitete ich als SAP-Berater. Während des Studiums wechselte ich dann das Unternehmen und arbeitete fortan als Webentwickler.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mb-16">
    <hr class="w-2/4 border-gray-300 border-opacity-50" />
  </div>
  <div class="flex p-6 pb-16 justify-center items-center w-full">
    <div class="w-2/4">
      <h1 class="text-7xl text-white mb-16">Meine Hobbies</h1>
      <div class="h-auto bg-white bg-opacity-50 rounded-lg shadow-xl p-2">
        <p class="text-white break-words">Test</p>
      </div>
    </div>
  </div>
</div>
</body>
  )
}

export default IndexPage
