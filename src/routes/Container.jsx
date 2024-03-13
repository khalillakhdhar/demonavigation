import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
function Navig() {
  return (
    <>
    <Nav
      activeKey="/home" className='justify-content-center'
   
    >
      <Nav.Item>
        <Nav.Link href="/home">Accueil</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="propos" href="/propos">A propos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="elements" href="/elements">elements</Nav.Link>
      </Nav.Item>
     
    </Nav>
    <div>
      <Outlet></Outlet>
    </div>
</>
  );
}

export default Navig;