import Gallery from "./components/Gallery";

let galList = [
  {
    name: 'Chan',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s'
  },
  {
    name: 'Jessica Koel',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyDzGUOkGUhw1tLvonMzkSk4XSa4f4aVtmEo6fyKOSoKE4jFiUH0V5MeY_B2RZRCMuPI&usqp=CAU'
  },
  {
    name: 'Komeial Bolger',
    img_url: 'https://cdn.prod.website-files.com/62bb1002c791742c87073bc9/663201be286f923ff97ce598_633acad620b9cf8684d26688_male.png'
  },
  {
    name: 'Tamaara Suiale',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s'
  },
  {
    name: 'Sam Nielson',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyDzGUOkGUhw1tLvonMzkSk4XSa4f4aVtmEo6fyKOSoKE4jFiUH0V5MeY_B2RZRCMuPI&usqp=CAU'
  },
  {
    name: 'Caroline Nexon',
    img_url: 'https://cdn.prod.website-files.com/62bb1002c791742c87073bc9/663201be286f923ff97ce598_633acad620b9cf8684d26688_male.png'
  },
  {
    name: 'Patrick koeler',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s'
  },
  {
    name: 'Sam Nielson',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyDzGUOkGUhw1tLvonMzkSk4XSa4f4aVtmEo6fyKOSoKE4jFiUH0V5MeY_B2RZRCMuPI&usqp=CAU'
  },
  {
    name: 'Caroline Nexon',
    img_url: 'https://cdn.prod.website-files.com/62bb1002c791742c87073bc9/663201be286f923ff97ce598_633acad620b9cf8684d26688_male.png'
  },
  {
    name: 'Patrick koeler',
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s'
  },
]

let App = () => {
  return (
    <div className='gallery'>
      {
        galList.map((item) => {
          return (
            <Gallery img_name={item.name} img_url={item.img_url}></Gallery>
          )
        })
      }
    </div>

  )
}
export default App;