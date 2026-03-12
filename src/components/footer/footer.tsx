const Footer = () => {
  return (
    <div className="bg-black text-white p-10 flex flex-col lg:flex-row items-start justify-center lg:justify-around gap-10">
      <div className="flex flex-row gap-5 order-1 lg:order-2">
        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full">
          <img
            src="/assets/social-media/facebook.svg"
            alt="facebook"
            className="w-5 h-5"
          />
        </div>

        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full">
          <img
            src="/assets/social-media/instagram.svg"
            alt="instagram"
            className="w-5 h-5"
          />
        </div>

        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full">
          <img
            src="/assets/social-media/linkedin.svg"
            alt="linkedin"
            className="w-5 h-5"
          />
        </div>

        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full">
          <img src="/assets/logo/tiktok.svg" alt="tiktok" className="w-5 h-5" />
        </div>
      </div>
      <div className="order-2 lg:order-1">
        <h1 className="text-left">
          © 2025 Edwin Anderson. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;