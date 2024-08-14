import downloadImg from "../../assets/about/download-icon.png";


const ResumeButton = () => {

  return (
    <a href="https://drive.google.com/drive/u/1/folders/1ShibKPeCnRRSq_8ZvtwqUyvBiVM5bhYX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 mt-8 rounded-full bg-primary py-1 px-2 md:py-4 md:px-8 ">
			<span className="font-manrope font-bold text-sm md:text-xl">
				DOWNLOAD RESUME{" "}
			</span>
			<img src={downloadImg} className="w-10 h-10" alt="" />
    </a>


  );
};

export default ResumeButton;
