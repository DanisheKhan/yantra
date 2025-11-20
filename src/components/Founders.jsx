import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const Founders = () => {
  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          Visionaries
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Anjali Bhushan */}
          <CardContainer className="inter-var">
            <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="h-60 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center">
                    {/* Placeholder for Image if needed, or just abstract art */}
                    <span className="text-6xl">🎬</span>
                </div>
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
                  className="text-neutral-400 text-sm mt-4 leading-relaxed"
              >
                  With decades of industry experience, Anjali brings strong creative leadership, having collaborated on acclaimed international documentaries and major Indian films.
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Anavi Bhushan Nugyal */}
          <CardContainer className="inter-var">
            <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
              <CardItem translateZ="100" className="w-full mt-4">
                 <div className="h-60 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center">
                    {/* Placeholder for Image if needed, or just abstract art */}
                    <span className="text-6xl">🎨</span>
                </div>
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
                  className="text-neutral-400 text-sm mt-4 leading-relaxed"
              >
                  A multidisciplinary creative consultant and visual artist, Anavi adds fresh, contemporary vision through her expertise in visual development and modern narrative forms.
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default Founders;
