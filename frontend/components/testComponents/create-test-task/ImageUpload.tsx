import { encodeImageFileAsURL } from "@/helpers/imageLoader";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const ImageUpload = ({ base64, setBase64, setQuestion }: any) => (
    <div className={`w-full mt-4 h-64 px-4 py-2 flex items-center justify-center bg-[#fff] rounded-[10px] mb-5`}>
        {base64 ? (
            <div className="relative w-fit">
                <Image src={base64} alt="" width={2} height={2} className="w-fit max-h-64" />
                <div onClick={() => setBase64('')} className="absolute top-[10px] right-[10px] w-7 h-8">
                    <MdDelete size={24} />
                </div>
            </div>
        ) : (
            <>
                <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
                    <span>Завантажте світлину</span>
                </label>
                <input 
                    type="file" 
                    id="img" 
                    onChange={(e) => encodeImageFileAsURL(e, setBase64, setQuestion)} 
                    className="hidden"
                />
            </>
        )}
    </div>
);

export default ImageUpload