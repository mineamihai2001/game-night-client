import { Card } from "../components";

export const GroupDetails = () => {
    return (
        <div className="p-10">
            <section id="header" className="flex justify-center">
                <div className="text-5xl mb-20">Group X</div>
            </section>
            <section id="body">
                <div id="categories" className="flex justify-around">
                    <Card extraClassName="px-36 py-10 cursor-pointer">
                        <div className="text-2xl font-extrabold">Members</div>
                    </Card>
                    <Card extraClassName="px-36 py-10 cursor-pointer">
                        <div className="text-2xl font-extrabold">Nights</div>
                    </Card>
                    <Card extraClassName="px-36 py-10 cursor-pointer">
                        <div className="text-2xl font-extrabold">Games</div>
                    </Card>
                </div>
            </section>
            <section id="details"></section>
        </div>
    );
};
