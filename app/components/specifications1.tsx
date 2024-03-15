export default function Spec1() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-5 mt-5 mx-5 p-2">
      <div className="flex flex-col w-[30%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-max h-8 text-white bg-blue-600 rounded-lg p-1 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 
            21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 
            0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 
            11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 
            12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 
            0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <p className="text-black font-bold text-xl flex gap-1">Coders Networking</p>
        <span className="text-gray-500 font-medium flex flex-wrap">
          Connect, collaborate, and code with TechMatch. Seamlessly plan, create, and launch projects while achieving your coding milestones every month with our integrated networking platform.
        </span>
      </div>
      <div className="flex flex-col w-[30%]">
        <svg
          className="w-max h-8 text-white bg-blue-600 rounded-lg p-1 mt-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667
             9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 
             11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 
             01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 
            1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
          ></path>
        </svg>
        <p className="text-black font-bold text-xl">Legal Compliance</p>
        <p className="text-gray-500 font-medium">
          Stay protected and compliant in the coding world with TechMatch. Our structured workflows and customized permissions ensure legal compliance and safeguard your projects and devices.
        </p>
      </div>
      <div className="flex flex-col w-[30%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-max h-8 text-white bg-blue-600 rounded-lg p-1 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5
             0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.
             75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 
            12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
        <p className="text-black font-bold text-xl">Automated Development</p>
        <p className="text-gray-500 font-medium">
          Automate your coding tasks, streamline communication, and boost productivity with TechMatch. Explore our vast library of templates to kickstart your projects and keep them running smoothly.
        </p>
      </div>
    </div>
  );
}
