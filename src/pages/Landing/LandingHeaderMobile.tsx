import dogImage from 'assets/images/landing/dog-mobile.png';
import backgroundImage1 from 'assets/images/landing/bg-mobile-1.png';


export default function LandingHeaderMobile() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: '100vh'
    }}>
      <div className="container h-full flex items-center justify-center p-3 flex-col">
        <div className="">
          <h1 className="font-900 text-center" style={{ fontSize: 45, lineHeight: '50px' }}>
            <span className="text-primary-800">Marketing</span> and{' '}
            <span className="text-primary-800">Management</span> for Groomers and Kennels
          </h1>
        </div>
        <img src={dogImage} alt="dog" className="w-full mt-8 max-w-[450px]" />
      </div>
    </div>
  );
}
