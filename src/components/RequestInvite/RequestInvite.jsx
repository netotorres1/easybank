import React from 'react'
import bgIntroDesktop from './../../assets/images/bg-intro-desktop.svg'
import imageMorckups from './../../assets/images/image-mockups.png'
import './requestinvite.css'

const RequestInvite = () => {
  return (
    <div className='ContainerResquestInvite'>
      <div className='ContainerImagesMobile'>
            <img alt='' className='introDesktopMobile' src={bgIntroDesktop} />
            <img alt='' className='imageMorckupsMobile' src={imageMorckups} />
        </div>
        <div className='ContainerTexts'>
            <h1 className='Title'>Next generation digital banking</h1>
            <p className='P'>
                Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
            </p>
            <button className='btn'>Request Invite</button>
        </div>
        <div className='ContainerImages'>
            <img alt='' className='introDesktop' src={bgIntroDesktop} />
            <img alt='' className='imageMorckups' src={imageMorckups} />
        </div>
    </div>
  )
}

export default RequestInvite