import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full ml-[13px]">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
     
      </div>
    </div>
  );
};

export default SingleFeature;
