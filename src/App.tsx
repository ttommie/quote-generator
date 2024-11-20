import Header from "./components/Header"
import Quote from "./components/Quote"

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-4">
      {/* Header */}
      <Header />

      {/* Quote */}
      <Quote />
    </div>
  )
}

export default App
