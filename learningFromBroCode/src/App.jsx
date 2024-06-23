import './App.css'
import Card from './Card.jsx'
import Header from './Header.jsx'
import annamalai from './assets/images.jpeg'
import dhoni from './assets/dhoni-records-odi.webp'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
function App() {

  return(
    <>
      <Header/>
      <div className="container">
        <Card
          image = {annamalai}
          name = "Annamalai"
          desc = "Former IPS who quits his IPS job to serve people of India"
        />

        <Card
          image = {dhoni}
          name = "MS Dhoni"
          desc = "More than a cricketer, He is nationalist & great human being"
        />

        <Card/>
      </div>

      <Counter />

      <ColorPicker />
    </>
  )
  
}

export default App
