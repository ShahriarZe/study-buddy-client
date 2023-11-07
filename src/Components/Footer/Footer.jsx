import study from '../../assets/study.png'
const Footer = () => {
    return (
        <footer className="footer p-10  text-base-content font-bold border-t-2">
  <aside className='text-center'>
    <img className='w-4/6' src={study} alt="" />
    <p>Online Group Study Platform.<br/>Collecting Learners since 2010 <br /> Copyright © SHAHRIAR AHMMED - All rights Reserved</p>
    
  </aside> 
  <nav>
    <header className="footer-title">Programs</header> 
    <a className="link link-hover">Study</a> 
    <a className="link link-hover">Connecting</a> 
    <a className="link link-hover">Grouping</a> 
    <a className="link link-hover">Learing</a>
  </nav> 
  <nav>
    <header className="footer-title">Benefits</header> 
    <a className="link link-hover">Success</a> 
    <a className="link link-hover">Team Work</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;