import Navbar from './Navbar'
import './Guide.css'
import  Sidebar from './Sidebar'

function Guide() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='guide'><ul>
        <li>By participating in the OpsDen Forum, you agree to abide by these guidelines and contribute to creating a vibrant and inclusive community for all members of OpsDen.</li>
        <br /><br /><br />
          <li style={{textAlign : 'left'}}>Respect:Treat all members with respect and courtesy. Avoid engaging in personal attacks, harassment, or discriminatory behavior.</li><br />
          <li style={{textAlign : 'left'}}>Relevance: Keep discussions relevant to the topic at hand. Avoid spamming, off-topic posts, or excessive self-promotion.</li><br />
          <li style={{textAlign : 'left'}}>Quality: Contribute high-quality content that adds value to the discussion. Avoid posting low-effort or duplicate content.</li><br />
          <li style={{textAlign : 'left'}}> Civility: Foster constructive and civil discourse. Disagreements are inevitable, but handle them diplomatically and avoid escalating conflicts.</li><br />
          <li style={{textAlign : 'left'}}>Privacy: Respect the privacy of others. Avoid sharing sensitive or personal information without consent.</li><br />
          <li style={{textAlign : 'left'}}>Legal Compliance: Ensure that all content shared on the forum complies with applicable laws and regulations, including copyright and intellectual property rights.</li><br />
          <li style={{textAlign : 'left'}}>Moderation: Follow the instructions of forum moderators and administrators. Report any inappropriate behavior or content to the moderation team.</li><br />
         
        </ul>
        
        
        
        
       
        
        
        
        
        </div>
    </div>
  )
}

export default Guide