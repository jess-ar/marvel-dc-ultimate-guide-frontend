import ArrowBack from "@/components/arrow/ArrowBack";

const AvengersTeamPage = () => {
    return (
        <>
            <ArrowBack />
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-background">
                <h1 className="text-4xl text-white font-protest">Avengers Team</h1>
                <p className="text-lg text-secondary">This page is under construction. Check back later!</p>
                
                <div className="relative">
                    <img
                        src="/assets/images/teams/construction.jpg" 
                        alt="Under construction"
                        className="w-64 h-auto mx-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 p-2 text-xs font-bold text-white rounded-full bg-primary">
                        Oops!
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvengersTeamPage;