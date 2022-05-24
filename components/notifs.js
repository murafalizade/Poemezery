import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
export default function NotifModal({notifs}) {
    return (
        <>
            <div style={{ left: '63%', width: '350px' }} className={styles.secretSection}>
               {notifs.map(notif=>(
  <div style={{display:'flex'}}>
  <Image src='/default_avatar.png' style={{maxHeight:'50px',marginTop:'15px'}} width='50px' height='40px'  />
  <p style={{ textAlign: 'center', margin: '16px',maxHeight:'50px',fontSize:'13px' }}><b>{notif.title}</b> {notif.bofy}  <br/>
  <small style={{textAlign:'left'}}>{notif.time}</small></p>
</div>
               ))}
              
            </div>
        </>
    )
}
