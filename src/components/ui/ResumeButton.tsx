import downloadImg from "../../assets/about/download-icon.png";

const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/drive/u/1/folders/1ShibKPeCnRRSq_8ZvtwqUyvBiVM5bhYX"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-background transition hover:opacity-90 md:px-7 md:py-4"
    >
      <span>Download resume</span>
      <img src={downloadImg} className="h-5 w-5" alt="" />
    </a>
  );
};

export default ResumeButton;
