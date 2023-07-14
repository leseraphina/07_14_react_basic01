
// 
const people ={
  no:1,
  level:'1단계',
  room : 'A강의실'
}
function Header(){
  return (
    <header>
      {/* <h1>react welcome {1 + 3}</h1> */}
      <h1>{`react welcome ${1 + 3}`} </h1>
    </header>
  );
}
function Content(){
  return (
    <>
    <ul className="main">
      <li>no: {people.no}</li>
      <li>level : {people.level}</li>
      <li>강의실: {people.room}</li>
    </ul>
    <p>
      <span>컴포넌트 이름</span>
      <lable htmlFor="name">Name</lable>
      <input type="text" id="name" />
    </p>
    </>
  );
}
function Footer(){
  return (
    <footer>
      <small>저작권정보</small>
    </footer>
  );
}

export default function App(){
  return (
    <>
    <Header />
    <Content />
    <Footer />
    </>
  )
}