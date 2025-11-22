import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { FollowerPointerCard } from './ui/following-pointer';

const Founders = () => {
    return (
        <div id="founders" className="w-full bg-background py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
                   VISIONARIES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Anjali Bhushan */}
                    <FollowerPointerCard title="Anjali Bhushan" className="h-full">
                        <CardContainer className="inter-var h-full">
                            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-full min-h-[600px] rounded-xl p-6 border flex flex-col">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Anjali Bhushan
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Founder
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4 flex-grow-0">
                                    <img
                                        src="/Founders/imgi_8_width_556.jpg"
                                        alt="Anjali Bhushan"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-10">
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Creative Leadership
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Production & Direction
                                    </CardItem>
                                </div>
                                <CardItem
                                    translateZ="40"
                                    className="text-neutral-400 text-sm mt-4 leading-relaxed text-justify flex-grow"
                                >
                                    With decades of industry experience, Anjali brings strong creative leadership, having collaborated on acclaimed international documentaries and major Indian films.
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </FollowerPointerCard>

                    {/* Anavi Bhushan Nugyal */}
                    <FollowerPointerCard title="Anavi Bhushan Nugyal" className="h-full">
                        <CardContainer className="inter-var h-full">
                            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-full min-h-[600px] rounded-xl p-6 border flex flex-col">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Anavi Bhushan Nugyal
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Founder
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4 flex-grow-0">
                                    <img
                                        src="/Founders/imgi_7_width_799.webp"
                                        alt="Anavi Bhushan Nugyal"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-10">
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Visual Artist
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Creative Consultant
                                    </CardItem>
                                </div>
                                <CardItem
                                    translateZ="40"
                                    className="text-neutral-400 text-sm mt-4 leading-relaxed text-justify flex-grow"
                                >
                                    A multidisciplinary creative consultant and visual artist, Anavi adds fresh, contemporary vision through her expertise in visual development and modern narrative forms.
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </FollowerPointerCard>

                    {/* New Team Member */}
                    <FollowerPointerCard title="Team Member" className="h-full">
                        <CardContainer className="inter-var h-full">
                            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-full min-h-[600px] rounded-xl p-6 border flex flex-col">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    MeetBros
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Role
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4 flex-grow-0">
                                    <img
                                        src="/Founders/imgi_6_width_799.webp"
                                        alt="Team Member"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-10">
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Expertise
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Role
                                    </CardItem>
                                </div>
                                <CardItem
                                    translateZ="40"
                                    className="text-neutral-400 text-sm mt-4 leading-relaxed text-justify flex-grow"
                                >
                                    Description of the new team member goes here. Please provide the name, role, and bio for this card.
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </FollowerPointerCard>
                </div>
            </div>
        </div>
    );
};

export default Founders;
