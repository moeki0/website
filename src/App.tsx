const App: React.FC = () => {
  return (
    <main className="p-8 max-w-[500px] mx-auto">
      <section className="">
        <h1 className="font-bold text-2xl">HackLuckCat</h1>
      </section>
      <section className="py-2">
        <h2 className="mb-2 text-xl font-bold">Philosophy</h2>
        <ol className="list-decimal list-inside">
          <li>Contributing to Family's Happiness</li>
          <li>Contributing to Poeple's Creativity</li>
          <li>Contributing to World Peace</li>
        </ol>
      </section>
      <section className="py-2">
        <h2 className="mb-2 text-xl font-bold">Status</h2>
        <ul className="list-disc list-inside">
          <li>Hacker</li>
          <li>Servant of 4 cats</li>
          <li>Caffeine lover</li>
          <li>Believer in science</li>
        </ul>
      </section>
      <section className="py-2">
        <h2 className="font-bold text-xl mb-2">Links</h2>
        <ul>
          <li>
            <a className="underline hover:text-gray-600" href="https://github.com/moekiorg">github.com/hackluckcat</a>
          </li>
          <li><a className="underline hover:text-gray-600" href="mailto:hi@moeki.org">hi@hackluckcat.com</a></li>
        </ul>
      </section>
      <footer className="py-4">
        <p className="text-xs">&copy; 2024 HackLuckCat. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
