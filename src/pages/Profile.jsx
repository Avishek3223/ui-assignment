import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const userData = location.state?.userData || {
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full relative max-w-sm border border-gray-300 rounded-lg shadow-sm bg-[#fafafa] overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-white border-b border-gray-300">
          <h1 className="text-lg font-medium text-gray-900">
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="p-4 flex items-center border-b border-dashed border-gray-300">
          <div className="relative">
            {/* Camera Icon - Moved Slightly Outside */}
            <div className="absolute bottom-0 right-3 w-6 h-6 bg-purple-600 text-white flex items-center justify-center rounded-full text-xs border-2 border-white z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3"
              >
                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                <path
                  fillRule="evenodd"
                  d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className=" w-16 h-16 rounded-full overflow-hidden mr-4">
              {/* Profile Image */}
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-md font-semibold text-gray-900">
              {userData.fullName}
            </h2>
            <p className="text-sm text-gray-600">{userData.email}</p>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 text-gray-900 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>

        {/* Empty Space */}
        <div className="h-[400px] border-t border-dashed border-gray-300"></div>
        <div className="absolute w-full z-50 bottom-8 border-t border-dashed border-gray-300"></div>
      </div>
    </div>
  );
};

export default Profile;
