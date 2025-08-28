const spells = [
  { name: "ไฟโลกันต์", power: 80, img: "fire.png" },
  { name: "คลื่นน้ำ", power: 60, img: "water.png" },
  { name: "สายฟ้าฟาด", power: 100, img:"thunder.png" }
]
function createEl(tag,{props={},dataset={}, attrs={}, on={} ,children=[]}={}){
  const el = document.createElement(tag)
  Object.assign(el,props)
  for(const [k,v] of Object.entries(dataset))el.dataset[k] = v
  for(const [k,v] of Object.entries(attrs))el.setAttribute(k,v)
  for(const [ev,fn] of Object.entries(on))el.addEventListener(ev,fn)
  el.append(...children)
  return el
}
function renderItem(spell){
  const card = createEl("div",{
    props:{className:"card"},
    dataset:{name:spell.name,power:spell.power},
    on:{click:(e)=> e.currentTarget.classList.toggle("active")},
    children:[
     createEl("img",{attrs:{src:spell.img, alt:spell.name}}),
     createEl("h3",{props:{textContent:spell.name}}),
     createEl("p",{props:{textContent:`พลัง: ${spell.power}`}})  
    ]
  })
  return card
}
function render(){
  const fragment = document.createDocumentFragment()
  spells.forEach(spell => fragment.appendChild(renderItem(spell)))
  document.body.appendChild(fragment)
}
render()