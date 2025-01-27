import LanguageSwitcherDropdown from '@/components/footer/LanguageSwitcherDropdown';
import footerSVG from '../../../public/assets/icons/footer.svg'; 

const Footer = () => {
    return (
        <footer className="relative bg-black text-secondary">
            <div className="absolute inset-0 z-10">
                <img src={footerSVG} alt="Footer Design" className="w-full h-auto" />
            </div>

            <div className="relative z-50 flex flex-col items-center justify-between max-w-5xl px-4 mx-auto mb-10 space-y-6 mt-28 md:mt-36 lg:mt-60 xl:mt-72 md:space-y-4 md:items-end md:flex-row">
                <p className="text-sm text-center text-gray-300 md:text-left">
                    © {new Date().getFullYear()} <strong>Marvel & DC Ultimate Guide</strong>. Fan-made project for practice and learning.
                </p>
                <div className="flex justify-center w-full md:w-auto">
                    <LanguageSwitcherDropdown />
                </div>
            </div>
        </footer>
    );
};

export default Footer;