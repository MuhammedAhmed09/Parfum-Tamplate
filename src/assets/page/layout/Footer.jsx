import { Link } from "react-router-dom";
import Button from "../../homeSections/Button"
import { GiVanillaFlower } from "react-icons/gi";

const Footer = () => {
  const companyLinks = [
    {id: 0, path: 'shop', title: 'Shop'},
    {id: 1, path: 'about', title: 'About'},
    {id: 2, path: 'blog', title: 'Blog'},
    {id: 3, path: 'contact', title: 'Contact'},
  ];
  
  const socialLinks = [
    {id: 0, path: '#', title: 'Tiktok'},
    {id: 1, path: '#', title: 'Instagram'},
    {id: 2, path: '#', title: 'Facebook'},
    {id: 3, path: '#', title: 'youtube'},
  ];

  const templateLinks = [
    {id: 0, path: '#', title: 'Style Guide'},
    {id: 1, path: '#', title: 'Changelog'},
    {id: 2, path: '#', title: 'Licenses'},
    {id: 3, path: '#', title: 'All Templates'},
  ];

  return (
    <section className="p-6 w-full bg-Light-Pink">
      <div className="bg-Red py-14 px-8 text-white rounded-2xl">
        {/* TOP */}
        <div className="flex flex-col gap-4 md:flex-row justify-between md:gap-x-12">
          {/* LEFT */}
          <div className="flex flex-col gap-3">
            <img src="image/white-flower-icon.png" alt="flower" className="w-8" />
            <p>We send <i className="font-semibold">great</i> emails.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="text" placeholder="Enter your email" className="outline-none rounded-full px-4 py-1 bg-white/0 border border-white text-sm font-semibold" />
              <a href="#" className="rounded-full flex justify-center py-1 px-4 text-black bg-white font-semibold text-sm">              
                <Button text={'SUBSCRIBE'} />
              </a>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex gap-x-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl mb-2">Company</h3>
              {companyLinks.map((cLink) => (
                <Link to={cLink.path} className="text-sm">{cLink.title}</Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl mb-2">Social</h3>
              {socialLinks.map((cLink) => (
                <a path={cLink.path} className="text-sm cursor-pointer">{cLink.title}</a>
              ))}
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-xl mb-2">Template</h3>
              {templateLinks.map((cLink) => (
                <a path={cLink.path} className="text-sm cursor-pointer">{cLink.title}</a>
              ))}
            </div>
          </div>
        </div>
        {/* MIDDLE */}
        <div>
          <img src="/image/white-logo.png" alt="PURFUM" className='w-full py-12' />   
        </div>
        {/* BOTTOM */}
        <div className="w-full text-sm flex justify-between">
          <p >Powered by <a target="_blank" href="https://github.com/MuhammedAhmed09"><i className="font-bold">B7R</i></a></p>
          <p>Website template design by Callsto Digital Studio.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer