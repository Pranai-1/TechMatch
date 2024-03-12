export default function Footer(){
    return(
    <div className="w-full h-max p-4 bg-gray-600  flex flex-col  text-white rounded-lg mt-5">
        <div className="flex justify-between items-center p-4">
           <div className="p-2 text-2xl font-bold">
            <p>Coders Connect</p>
           </div>
           <div >
            <ul className="flex justify-end gap-3">
                <li>About</li>
                <li>Privacy policy</li>
                <li>Contact us</li>
                <li>Licensing</li>
            </ul>
           </div>
        </div>
        <span className="py-[0.5px] bg-white w-full mt-2"></span>
        <span className="w-full flex justify-center items-center text-white font-medium p-4">© 2024 Coders Connect. All Rights Reserved.</span>
        </div>
    )
}