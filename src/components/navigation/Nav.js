import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import $ from "jquery";
import { useState, useEffect } from 'react';


const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <>

    <header>
        <a href="" className="logo">Logo</a>
        <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
    </header>

    <section>
      <img src='/stars.png' id="stars" style={{ left: `${scrollY * 1.05}px` }} />
      <img src='/moon.png' id="moon" style={{ top: `${scrollY * 1.05}px` }} />
      <img src='/mountains_behind.png' id="mountains_behind" style={{ top: `${scrollY * 0.5}px` }} />
      <img src='/mountains_front.png' id="mountains_front" style={{ top: `${scrollY * 0}px` }} />
      <div id="text" style={{ marginRight: `${scrollY * 4}px`, marginTop: `${scrollY * 1.5}px` }}>
        moonlight
      </div>
      <a href="#sec" id="btn" style={{ marginTop: `${scrollY * 1.5}px` }}>Explore</a>
    </section>

    <div className='sec' id='sec'>
    <h2>Parallax Scrolling Effects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit a suscipit incidunt ex inventore magnam autem voluptate, recusandae dicta veniam, corporis excepturi error. Doloremque dolorum nemo voluptate nostrum quod ullam quos, quas earum, esse quia aliquam minima! Necessitatibus cumque voluptate placeat saepe qui, adipisci ab incidunt repudiandae optio aperiam quam ipsa quod ipsum, ad nemo nulla recusandae? Ipsum, facere magnam. Maxime, sequi exercitationem fuga rerum numquam, officia fugiat eaque, corrupti perspiciatis quas eos distinctio repudiandae praesentium dolorum fugit soluta veniam natus deserunt quibusdam voluptate quod! Sequi, commodi earum dolore esse fuga reprehenderit iste dignissimos odio voluptates repellat. Repudiandae, fuga?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In id itaque eaque illum ut voluptatibus quas deserunt, ipsam delectus quod incidunt corporis quibusdam saepe laboriosam maiores explicabo eveniet animi doloribus natus, neque doloremque. Voluptatum, fugit non? Necessitatibus doloribus quasi voluptate ratione esse inventore reprehenderit recusandae ipsum. Officia excepturi repellat ut repellendus! Illum similique, cumque facere enim ipsum ducimus, minus in corporis sit culpa voluptatibus. Saepe, suscipit laboriosam. Aut voluptates nemo veniam aliquid reiciendis molestiae cupiditate cum illum omnis ipsam, commodi id optio error dolorum repellendus recusandae hic doloribus rem, numquam magni ad quae pariatur odio alias! Culpa veritatis officia adipisci!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui cumque debitis, cum, placeat sit saepe eius quaerat praesentium, possimus vel sapiente amet nulla sunt dolorem ea sint adipisci laboriosam unde culpa harum. Praesentium quam, tempora temporibus repellat repudiandae rerum. Non quod dolor suscipit eveniet. Ratione nemo cum temporibus dolor quam consectetur quibusdam, et reiciendis explicabo porro doloremque fugiat adipisci. Libero, odio consequuntur aspernatur incidunt sed sunt rerum tenetur commodi hic laborum natus ad ipsa, aperiam debitis ipsum ratione cum nesciunt aliquid officia? Alias eum esse adipisci odit reiciendis soluta. Consequatur eos officia doloribus laborum delectus facere, impedit quae cupiditate!
        </p>
    </div>

    </>
  )
}

export default Nav