import OpenBurn from "./components/openBurn/OpenBurn";

const App = () => {
    // const permitType = useSelector((state) => state.app.permitType);

    return (
        <div className="">
            <div className="w-full  text-5xl mt-10 mb-5">
                <a
                    href="https://langford.ca"
                    className="block w-56 lg:w-72 mx-auto"
                >
                    <img
                        src="/langford-tagline-logo.png"
                        className="w-full h-full"
                    />
                </a>
            </div>

            <OpenBurn />
        </div>
    );
};

export default App;