import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ServiceCardSetType = {
  className?: string;
  rectangle5333?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const ServiceCardSet: FunctionComponent<ServiceCardSetType> = ({
  className = "",
  rectangle5333,
  propLeft,
  propTop,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[16px] text-left text-xl text-black1 font-sf-pro-display ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[366px] relative h-56">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke-100 w-[366px] h-56" />
        <img
          className="absolute top-[20px] left-[40px] rounded-xl w-[286.3px] h-[184px] object-cover"
          alt=""
          src={rectangle5333}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[12px]">
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative leading-[130.2%] font-medium">
            Lorem ipsum dolor
          </div>
          <div className="w-[343px] relative text-sm leading-[130.2%] font-lato inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing `}</div>
        </div>
        <div className="w-24 rounded bg-primary h-[34px] flex flex-row items-center justify-center p-2.5 box-border text-base text-white font-lato">
          <div className="relative leading-[130.2%] font-medium">See All</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSet;
