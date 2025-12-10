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
                                    Filmmaker with international co-production & directing experience. Credits include: India’s Daughter (Oscar-nominated), My Home India, Smiling Woman of Banda. Worked with: BBC, DR, NHK, Indian government. Bollywood involvement: Kuch Kuch Hota Hai, Shivaay, Kabir Singh.
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
                                    Multidisciplinary creative consultant & visual artist. Expertise: Visual development, Illustrative design, Digital art. Awards: Lincoln Laureate, Projects for Peace recipient. Experience with: Apricot Sky Entertainment, Viacom18 Studios. Role: Strengthens Yantra’s visual & emotional storytelling.
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </FollowerPointerCard>

                    {/* Meet Bros */}
                    <FollowerPointerCard title="Meet Bros" className="h-full">
                        <CardContainer className="inter-var h-full">
                            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-full min-h-[600px] rounded-xl p-6 border flex flex-col">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Meet Bros
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Musical Directors & Partners
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4 flex-grow-0">
                                    <img
                                        src="/Founders/imgi_6_width_799.webp"
                                        alt="Meet Bros"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-10">
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Musical Visionaries
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Creative Partners
                                    </CardItem>
                                </div>
                                <CardItem
                                    translateZ="40"
                                    className="text-neutral-400 text-sm mt-4 leading-relaxed text-justify flex-grow"
                                >
                                    Acclaimed musical duo Manmeet and Harmeet Singh, known for redefining Bollywood music with hits like "Baby Doll" and "Chittiyaan Kalaiyaan". Recipients of Filmfare, IIFA, and Screen Awards. Established 'Meet Bros Recording Studio' and bring extensive entertainment industry experience to Yantra.
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
