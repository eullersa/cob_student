import Menu from '../components/menu/Menu.jsx'
import Footer from '../components/footer/Footer.jsx';
import Dashboard from '../components/dashboard/Dashboard.jsx';
import { useState } from 'react';

function Home() {

  const [coursesDrop, setCoursesDrop] = useState(undefined)

  return (
    <>
        <Menu bulb={true} items={[
          {name: 'inicial', link: '/dashboard'},
          {name: 'módulos', link: '/modulos'},
          {name: 'ao vivo', link: '/live'},
          {name: 'preços', link: '/precos'}
        ]} courses={true} links={[
          {name: 'perfil', link: '/profile', type: 'button', function: 'signout'},
          {name: 'sair', link: '', type: 'text', onclick: 'signout'}
        ]} longer={'longer'} coursesDrop={coursesDrop} />
        <div className='spaceContent'></div>

        <Dashboard setCoursesDrop={setCoursesDrop} />

        <Footer over={false} />
    </>
  )
}

export default Home;
