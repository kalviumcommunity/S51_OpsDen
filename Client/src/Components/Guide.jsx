import React from 'react'
import Navbar from './Navbar'
import './Guide.css'

function Guide() {
  return (
    <div>
        <Navbar/>
        <div className='guide'>
        To ensure a welcoming and inclusive environment for all members, please adhere to the following guidelines:<br></br><br></br>
        Respect:Treat all members with respect and courtesy. Avoid engaging in personal attacks, harassment, or discriminatory behavior.<br></br><br></br>
        Relevance: Keep discussions relevant to the topic at hand. Avoid spamming, off-topic posts, or excessive self-promotion.<br></br><br></br>
        Quality: Contribute high-quality content that adds value to the discussion. Avoid posting low-effort or duplicate content.<br></br><br></br>
        Civility: Foster constructive and civil discourse. Disagreements are inevitable, but handle them diplomatically and avoid escalating conflicts.<br></br><br></br>
        Privacy: Respect the privacy of others. Avoid sharing sensitive or personal information without consent.<br></br><br></br>
        Legal Compliance: Ensure that all content shared on the forum complies with applicable laws and regulations, including copyright and intellectual property rights.<br></br><br></br>
        Moderation: Follow the instructions of forum moderators and administrators. Report any inappropriate behavior or content to the moderation team.<br></br><br></br>
        By participating in the OpsDen Forum, you agree to abide by these guidelines and contribute to creating a vibrant and inclusive community for all members.<br></br><br></br>
        </div>
    </div>
  )
}

export default Guide